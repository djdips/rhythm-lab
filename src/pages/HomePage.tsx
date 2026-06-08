import React, { useState, useEffect } from 'react';
import { useAudioEngine } from '@/hooks/useAudioEngine';
import type { WaveformType } from '@/audio/types';
import { InstrumentSelector } from '@/components/InstrumentSelector/InstrumentSelector';
import { InstrumentWorkspace } from '@/components/InstrumentWorkspace/InstrumentWorkspace';
import { InstrumentHelp } from '@/components/InstrumentHelp/InstrumentHelp';

export const HomePage: React.FC = () => {
  const { setVolume, setWaveform, getSettings } = useAudioEngine();
  const [volume, setVol] = useState(30);
  const [waveform, setWave] = useState<WaveformType>('triangle');

  // Load initial settings from AudioEngine
  useEffect(() => {
    const settings = getSettings();
    setVol(Math.round(settings.volume * 100));
    setWave(settings.waveform);
  }, [getSettings]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseInt(e.target.value, 10);
    setVol(newVol);
    setVolume(newVol / 100);
  };

  const handleWaveformChange = (newWave: WaveformType) => {
    setWave(newWave);
    setWaveform(newWave);
  };

  const waveforms: readonly { type: WaveformType; label: string; icon: string }[] = [
    { type: 'sine', label: 'Sine', icon: '∿' },
    { type: 'triangle', label: 'Triangle', icon: '▲' },
    { type: 'sawtooth', label: 'Sawtooth', icon: '⚡' },
    { type: 'square', label: 'Square', icon: '■' }
  ];

  return (
    <div className="relative min-h-screen bg-bg-dark text-text-primary overflow-hidden flex flex-col justify-between">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-6xl mx-auto px-6 pt-8 pb-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-indigo-500 flex items-center justify-center shadow-lg shadow-brand-primary/20">
            <span className="text-white font-black text-xl tracking-tighter">RL</span>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-text-primary to-text-muted bg-clip-text text-transparent">
              Rhythm Lab
            </h1>
            <p className="text-xs text-text-muted font-medium uppercase tracking-widest">
              Audio Workstation
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-border-muted text-xs text-text-muted font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Web Audio Engine Active
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-6 flex flex-col justify-center items-center gap-8 z-10">
        {/* Workstation Console Wrapper */}
        <div className="w-full bg-bg-card/30 backdrop-blur-xl border border-border-muted/40 rounded-2xl p-6 md:p-8 shadow-2xl">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center pb-6 border-b border-border-muted/40 mb-6">
            {/* Waveform Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Synth Waveform
              </label>
              <div className="flex bg-bg-dark/80 p-1 rounded-xl border border-border-muted/60">
                {waveforms.map((item) => (
                  <button
                    key={item.type}
                    onClick={() => handleWaveformChange(item.type)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                      waveform === item.type
                        ? 'bg-gradient-to-r from-brand-primary to-indigo-600 text-white shadow-md shadow-brand-primary/25'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                    aria-label={`Select ${item.label} waveform`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Master Volume Slider */}
            <div className="flex flex-col gap-2 min-w-[200px]">
              <div className="flex justify-between items-center text-xs font-semibold text-text-muted uppercase tracking-wider">
                <span>Master Volume</span>
                <span className="font-mono text-brand-primary-light">{volume}%</span>
              </div>
              <div className="flex items-center gap-3 h-10">
                <span className="text-text-muted">🔈</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-bg-dark rounded-lg appearance-none cursor-pointer accent-brand-primary border border-border-muted"
                  aria-label="Master volume slider"
                />
                <span className="text-text-muted">🔊</span>
              </div>
            </div>
          </div>

          {/* Instrument Selector */}
          <div className="mb-6 flex justify-center">
            <InstrumentSelector />
          </div>

          {/* Instrument Workspace */}
          <div className="py-4 bg-bg-dark/40 rounded-xl border border-border-muted/30">
            <InstrumentWorkspace />
          </div>

          {/* Quick Start / Help Sheet */}
          {/* <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-bg-dark/50 border border-border-muted/40 rounded-xl text-sm">
            <div className="flex items-center gap-3">
              <span className="text-xl">⌨️</span>
              <div>
                <h2 className="font-bold text-text-primary">QWERTY Keyboard Playing Enabled</h2>
                <p className="text-xs text-text-muted">Use physical keys to play notes dynamically.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="flex items-center gap-1 bg-bg-card px-2.5 py-1.5 rounded-lg border border-border-muted text-xs">
                <span className="font-mono bg-bg-dark px-1.5 py-0.5 rounded border border-border-muted text-brand-primary-light">A S D F G H J</span>
                <span className="text-text-muted">→</span>
                <span className="font-bold">White Keys (C D E F G A B)</span>
              </div>
              <div className="flex items-center gap-1 bg-bg-card px-2.5 py-1.5 rounded-lg border border-border-muted text-xs">
                <span className="font-mono bg-bg-dark px-1.5 py-0.5 rounded border border-border-muted text-brand-primary-light">W E  T Y U</span>
                <span className="text-text-muted">→</span>
                <span className="font-bold">Black Keys (C# D# F# G# A#)</span>
              </div>
            </div>
          </div> */}
          <InstrumentHelp />

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-muted border-t border-border-muted/30 mt-6 z-10">
        <div>
          © 2026 Rhythm Lab Project. Built with Web Audio API.
        </div>
        <div className="flex gap-4">
          <span className="hover:text-text-primary transition-colors cursor-pointer">Phase 1: Piano MVP</span>
          <span>•</span>
          <span className="hover:text-text-primary transition-colors cursor-pointer">Next: Drum Kit</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
