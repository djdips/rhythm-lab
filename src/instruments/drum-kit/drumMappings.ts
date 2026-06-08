import type { InputMapping } from "@/types/music";
import { createKeyToTargetMap, createTargetToKeyMap } from "@/instruments/shared/mapping.utils";

export const DRUM_MAPPINGS: readonly InputMapping[] = [
  {
    key: 'KeyA',
    target: 'kick',
  },
  {
    key: 'KeyS',
    target: 'snare',
  },
  {
    key: 'KeyD',
    target: 'closed-hihat',
  },
  {
    key: 'KeyF',
    target: 'crash',
  },
];

export const DRUM_KEY_MAP = createKeyToTargetMap(DRUM_MAPPINGS);
export const DRUM_TARGET_MAP = createTargetToKeyMap(DRUM_MAPPINGS);
