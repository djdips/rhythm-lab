import type { Instrument } from './instrument.types';

export const INSTRUMENTS: readonly Instrument[] = [
  {
    id: 'piano',
    name: 'Piano',
    icon: '🎹',
    enabled: true,
  },
  {
    id: 'drum-kit',
    name: 'Drum Kit',
    icon: '🥁',
    enabled: true,
  },
  {
    id: 'drum-pad',
    name: 'Drum Pad',
    icon: '🎛️',
    enabled: false,
  },
] as const;