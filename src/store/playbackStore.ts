import { create } from 'zustand';

export interface PlaybackState {
  readonly activeTargets: Readonly<Record<string, boolean>>;
  readonly triggerTargetOn: (target: string) => void;
  readonly triggerTargetOff: (target: string) => void;
  readonly clearAllActiveTargets: () => void;
}

export const usePlaybackStore = create<PlaybackState>((set) => ({
  activeTargets: {},

  triggerTargetOn: (target) =>
    set((state) => ({
      activeTargets: {
        ...state.activeTargets,
        [target]: true
      }
    })),

  triggerTargetOff: (target) =>
    set((state) => ({
      activeTargets: {
        ...state.activeTargets,
        [target]: false
      }
    })),

  clearAllActiveTargets: () =>
    set({
      activeTargets: {}
    })
}));
export default usePlaybackStore;
