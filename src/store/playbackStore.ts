import { create } from 'zustand';

export interface PlaybackState {
  readonly activeNotes: Readonly<Record<string, boolean>>;
  readonly triggerNoteOn: (pitch: string) => void;
  readonly triggerNoteOff: (pitch: string) => void;
  readonly clearAllActiveNotes: () => void;
}

export const usePlaybackStore = create<PlaybackState>((set) => ({
  activeNotes: {},

  triggerNoteOn: (pitch) =>
    set((state) => ({
      activeNotes: {
        ...state.activeNotes,
        [pitch]: true
      }
    })),

  triggerNoteOff: (pitch) =>
    set((state) => ({
      activeNotes: {
        ...state.activeNotes,
        [pitch]: false
      }
    })),

  clearAllActiveNotes: () =>
    set({
      activeNotes: {}
    })
}));
export default usePlaybackStore;
