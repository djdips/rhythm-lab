import type { InputMapping } from "@/types/music";
import { createKeyToTargetMap, createTargetToKeyMap } from "@/instruments/shared/mapping.utils";

export const PIANO_MAPPINGS: readonly InputMapping[] = [
  // White keys (A S D F G H J -> C4 D4 E4 F4 G4 A4 B4)
  { key: 'KeyA', target: 'C4' },
  { key: 'KeyS', target: 'D4' },
  { key: 'KeyD', target: 'E4' },
  { key: 'KeyF', target: 'F4' },
  { key: 'KeyG', target: 'G4' },
  { key: 'KeyH', target: 'A4' },
  { key: 'KeyJ', target: 'B4' },

  // Black keys (W E T Y U -> C#4 D#4 F#4 G#4 A#4)
  { key: 'KeyW', target: 'C#4' },
  { key: 'KeyE', target: 'D#4' },
  { key: 'KeyT', target: 'F#4' },
  { key: 'KeyY', target: 'G#4' },
  { key: 'KeyU', target: 'A#4' }
];

export const PIANO_KEY_MAP = createKeyToTargetMap(PIANO_MAPPINGS);
export const PIANO_TARGET_MAP = createTargetToKeyMap(PIANO_MAPPINGS);