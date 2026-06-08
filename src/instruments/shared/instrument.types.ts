import type { InstrumentType, InputMapping } from '@/types/music';
import type { InstrumentHelpContent } from '@/types/help';

export interface Instrument {
  readonly id: InstrumentType;
  readonly name: string;
  readonly icon: string;
  readonly enabled: boolean;
}

export interface InstrumentRegistryItem {
  readonly component: React.ComponentType;
  readonly help: InstrumentHelpContent;

  readonly mappings: readonly InputMapping[];

  readonly keyMap: Record<string, string>;
  readonly targetMap: Record<string, string>;
}