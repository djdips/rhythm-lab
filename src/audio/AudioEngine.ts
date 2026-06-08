import type { WaveformType, Voice, AudioEngineSettings } from './types';

export class AudioEngine {
  private static instance: AudioEngine | null = null;
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private readonly activeVoices: Map<string, Voice> = new Map();
  private settings: AudioEngineSettings = {
    volume: 0.3, // Default master volume
    waveform: 'triangle' // Triangle wave sounds a bit warmer/softer than sine
  };

  private constructor() {
    // Singleton pattern
  }

  /**
   * Returns the singleton instance of the AudioEngine.
   */
  public static getInstance(): AudioEngine {
    if (!AudioEngine.instance) {
      AudioEngine.instance = new AudioEngine();
    }
    return AudioEngine.instance;
  }

  /**
   * Initializes the AudioContext lazily.
   * Must be called in response to a user interaction.
   */
  public initialize(): void {
    if (this.ctx) return;

    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) {
      console.warn('Web Audio API is not supported in this browser.');
      return;
    }

    this.ctx = new AudioContextClass();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.settings.volume;
    this.masterGain.connect(this.ctx.destination);
  }

  /**
   * Set the master volume (0.0 to 1.0)
   */
  public setVolume(volume: number): void {
    const clampedVolume = Math.max(0, Math.min(1, volume));
    this.settings = { ...this.settings, volume: clampedVolume };

    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      // Exponentially ramp volume adjustments to avoid sudden clicks
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      // Volume ramp duration: 50ms
      this.masterGain.gain.exponentialRampToValueAtTime(
        clampedVolume || 0.0001,
        now + 0.05
      );
    }
  }

  /**
   * Set the waveform type (sine, square, sawtooth, triangle)
   */
  public setWaveform(waveform: WaveformType): void {
    this.settings = { ...this.settings, waveform };
  }

  /**
   * Play a note at the specified frequency
   */
  public startNote(pitch: string, frequency: number): void {
    this.initialize();

    if (!this.ctx || !this.masterGain) return;

    // Resume the context if it was suspended (browser autoplay policy)
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }

    // Stop note if it's already active to avoid stacking oscillators on the same pitch
    if (this.activeVoices.has(pitch)) {
      this.stopNote(pitch);
    }

    const osc = this.ctx.createOscillator();
    const voiceGain = this.ctx.createGain();

    osc.type = this.settings.waveform;
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

    // Gain Envelope - Attack (5ms transition from 0 to full volume)
    const attackTime = 0.005;
    const now = this.ctx.currentTime;
    voiceGain.gain.setValueAtTime(0, now);
    voiceGain.gain.linearRampToValueAtTime(1.0, now + attackTime);

    osc.connect(voiceGain);
    voiceGain.connect(this.masterGain);

    osc.start(now);

    this.activeVoices.set(pitch, {
      oscillator: osc,
      gainNode: voiceGain,
      startTime: now
    });
  }

  /**
   * Release a note, triggering the release envelope
   */
  public stopNote(pitch: string): void {
    const voice = this.activeVoices.get(pitch);
    if (!voice || !this.ctx) return;

    // Remove from active list immediately so it can't be stopped twice
    this.activeVoices.delete(pitch);

    const { oscillator, gainNode } = voice;
    const now = this.ctx.currentTime;
    const releaseTime = 0.1; // 100ms release envelope

    try {
      gainNode.gain.cancelScheduledValues(now);
      gainNode.gain.setValueAtTime(gainNode.gain.value, now);
      // Exponential ramp down to a non-zero near-silence value (Web Audio constraint)
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + releaseTime);

      oscillator.stop(now + releaseTime);

      // Clean up connections once the release phase is complete
      setTimeout(() => {
        try {
          oscillator.disconnect();
          gainNode.disconnect();
        } catch (e) {
          // Node already disconnected
        }
      }, releaseTime * 1000 + 50);
    } catch (e) {
      // Fallback: immediate cleanup if audio clock scheduling errors out
      try {
        oscillator.stop();
        oscillator.disconnect();
        gainNode.disconnect();
      } catch (err) {
        // Safe to ignore
      }
    }
  }

  /**
   * Return the current configuration settings
   */
  public getSettings(): AudioEngineSettings {
    return this.settings;
  }
}
