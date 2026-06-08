import type { Drum } from "./drum.types";

export const DRUMS: readonly Drum[] = [
  {
    id: 'kick',
    label: 'Kick',
    key: 'A'
  },
  {
    id: 'snare',
    label: 'Snare',
    key: 'S'
  },
  {
    id: 'closed-hihat',
    label: 'Hi-Hat',
    key: 'D'
  },
  {
    id: 'crash',
    label: 'Crash',
    key: 'F'
  },
];

export const DRUM_TARGETS = new Set([
  'kick',
  'snare',
  'closed-hihat',
  'crash',
]);