import type { InstrumentType } from '../../types/music';

export interface Instrument {
  readonly id: InstrumentType;
  readonly name: string;
  readonly icon: string;
  readonly enabled: boolean;
}