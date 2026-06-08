import { instrumentRegistry } from "@/instruments/shared/instrument.constants";
import useInstrumentStore from "@/store/instrumentStore";

export const useCurrentInstrumentMappings = () => {
  const instrument = useInstrumentStore(
    (state) => state.currentInstrument,
  );

  return instrumentRegistry[instrument];
};