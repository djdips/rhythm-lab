import type { InstrumentHelpContent } from '@/types/help';

export const drumHelp: InstrumentHelpContent = {
  icon: '🥁',
  title: 'Drum Controls',
  description:
    'Trigger drum pads from your keyboard.',
  groups: [
    {
      keys: 'A',
      description: 'Kick',
    },
    {
      keys: 'S',
      description: 'Snare',
    },
    {
      keys: 'D',
      description: 'Hi-Hat',
    },
    {
      keys: 'F',
      description: 'Crash',
    },
  ]
};