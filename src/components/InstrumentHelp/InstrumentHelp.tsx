import { HelpSheet } from "./HelpSheet";
import { useCurrentInstrumentMappings } from "@/hooks/useCurrentInstrumentMappings";

export function InstrumentHelp() {

  const { help } = useCurrentInstrumentMappings();

  if (!help) {
    return null;
  }

  return <HelpSheet content={help} />;
}