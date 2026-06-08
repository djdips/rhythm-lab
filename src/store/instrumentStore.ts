import { create } from 'zustand';
import type { InstrumentType } from '../types/music';

export interface InstrumentState {
  readonly currentInstrument: InstrumentType;
  
  readonly setInstrument: (instrument: InstrumentType) => void;
}

export const useInstrumentStore = create<InstrumentState>((set) => ({
  currentInstrument: 'piano',

  setInstrument: (instrument) => set({ currentInstrument: instrument }),

}));
export default useInstrumentStore;
