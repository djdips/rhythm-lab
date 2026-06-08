import type { KeyboardMapping } from '../types/music';

export const KEYBOARD_MAPPING: readonly KeyboardMapping[] = [
  // White keys (A S D F G H J -> C4 D4 E4 F4 G4 A4 B4)
  { key: 'KeyA', pitch: 'C4' },
  { key: 'KeyS', pitch: 'D4' },
  { key: 'KeyD', pitch: 'E4' },
  { key: 'KeyF', pitch: 'F4' },
  { key: 'KeyG', pitch: 'G4' },
  { key: 'KeyH', pitch: 'A4' },
  { key: 'KeyJ', pitch: 'B4' },

  // Black keys (W E T Y U -> C#4 D#4 F#4 G#4 A#4)
  { key: 'KeyW', pitch: 'C#4' },
  { key: 'KeyE', pitch: 'D#4' },
  { key: 'KeyT', pitch: 'F#4' },
  { key: 'KeyY', pitch: 'G#4' },
  { key: 'KeyU', pitch: 'A#4' }
];

export const KEY_TO_PITCH: Readonly<Record<string, string>> = KEYBOARD_MAPPING.reduce((acc, mapping) => {
  return { ...acc, [mapping.key]: mapping.pitch };
}, {} as Record<string, string>);

export const PITCH_TO_KEY: Readonly<Record<string, string>> = KEYBOARD_MAPPING.reduce((acc, mapping) => {
  return { ...acc, [mapping.pitch]: mapping.key.replace('Key', '') };
}, {} as Record<string, string>);
