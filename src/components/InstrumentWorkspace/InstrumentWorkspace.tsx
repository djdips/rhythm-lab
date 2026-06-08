import { useCurrentInstrumentMappings } from "@/hooks/useCurrentInstrumentMappings";

export function InstrumentWorkspace() {

  const { component: Instrument } = useCurrentInstrumentMappings();

  if (!Instrument) {
    return null;
  }

  return <Instrument />;
}