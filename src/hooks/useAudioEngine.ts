import { useCallback } from 'react';
import { AudioEngine } from '../audio/AudioEngine';
import { NOTE_MAP } from '../constants/notes';
import type { WaveformType } from '../audio/types';
import usePlaybackStore from '../store/playbackStore';

export const useAudioEngine = () => {
  const audioEngine = AudioEngine.getInstance();
  const triggerNoteOn = usePlaybackStore((state) => state.triggerNoteOn);
  const triggerNoteOff = usePlaybackStore((state) => state.triggerNoteOff);

  const playNote = useCallback(
    (pitch: string) => {
      const note = NOTE_MAP[pitch];
      if (!note) return;

      // Update Zustand visual state
      triggerNoteOn(pitch);
      // Synthesize audio
      audioEngine.startNote(pitch, note.frequency);
    },
    [triggerNoteOn, audioEngine]
  );

  const stopNote = useCallback(
    (pitch: string) => {
      // Update Zustand visual state
      triggerNoteOff(pitch);
      // Dampen audio oscillator
      audioEngine.stopNote(pitch);
    },
    [triggerNoteOff, audioEngine]
  );

  const setVolume = useCallback(
    (volume: number) => {
      audioEngine.setVolume(volume);
    },
    [audioEngine]
  );

  const setWaveform = useCallback(
    (waveform: WaveformType) => {
      audioEngine.setWaveform(waveform);
    },
    [audioEngine]
  );

  const getSettings = useCallback(() => {
    return audioEngine.getSettings();
  }, [audioEngine]);

  return {
    playNote,
    stopNote,
    setVolume,
    setWaveform,
    getSettings
  };
};

export default useAudioEngine;
