import type { InstrumentHelpContent } from "@/types/help";

export const pianoHelp: InstrumentHelpContent = {
  icon: '🎹',
  title: 'Piano Controls',
  description:
    'Use physical keys to play notes dynamically.',
  groups: [
    {
      keys: 'A S D F G H J',
      description: 'White Keys (C D E F G A B)',
    },
    {
      keys: 'W E T Y U',
      description: 'Black Keys (C# D# F# G# A#)',
    },
  ],
};