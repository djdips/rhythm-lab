import Piano from '@/instruments/piano/Piano';
import { pianoHelp } from '@/instruments/piano/pianoHelp';
import { PIANO_MAPPINGS, PIANO_KEY_MAP, PIANO_TARGET_MAP } from '@/instruments/piano/pianoMappings';
import type { Instrument, InstrumentRegistryItem } from './instrument.types';
import type { InstrumentType } from '@/types/music';
import { DrumKit } from '../drum-kit/DrumKit';
import { drumHelp } from '../drum-kit/drumHelp';
import { DRUM_KEY_MAP, DRUM_MAPPINGS, DRUM_TARGET_MAP } from '../drum-kit/drumMappings';


export const INSTRUMENTS: readonly Instrument[] = [
  {
    id: 'piano',
    name: 'Piano',
    icon: '🎹',
    enabled: true
  },
  {
    id: 'drum-kit',
    name: 'Drum Kit',
    icon: '🥁',
    enabled: true
  },
  {
    id: 'drum-pad',
    name: 'Drum Pad',
    icon: '🎛️',
    enabled: false
  },
] as const;

export const instrumentRegistry: Record<InstrumentType, InstrumentRegistryItem> = {
  'piano': {
    component: Piano,
    help: pianoHelp,
    mappings: PIANO_MAPPINGS,
    keyMap: PIANO_KEY_MAP,
    targetMap: PIANO_TARGET_MAP,
  },
  'drum-kit': {
    component: DrumKit,
    help: drumHelp,
    mappings: DRUM_MAPPINGS,
    keyMap: DRUM_KEY_MAP,
    targetMap: DRUM_TARGET_MAP,
  },
  'drum-pad': {
    component: Piano,
    help: pianoHelp,
    mappings: PIANO_MAPPINGS,
    keyMap: PIANO_KEY_MAP,
    targetMap: PIANO_TARGET_MAP,
  }
}