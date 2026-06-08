export type WaveformType = 'sine' | 'square' | 'sawtooth' | 'triangle';

export interface AudioEngineSettings {
  readonly volume: number;      // Master volume (0.0 to 1.0)
  readonly waveform: WaveformType;
}

export interface Voice {
  readonly oscillator: OscillatorNode;
  readonly gainNode: GainNode;
  readonly startTime: number;
}
