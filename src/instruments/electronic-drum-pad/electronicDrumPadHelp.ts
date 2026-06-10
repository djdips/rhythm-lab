import type { InstrumentHelpContent } from "@/types/help"

export const electronicDrumPadHelp: InstrumentHelpContent = {
    icon: "🎛️",
    title: "Electronic Drum Pad",
    description: "Trigger drum pad samples and synth voices with the pad grid.",
    groups: [
        {
            keys: "A",
            description: "Pad 1",
        },
        {
            keys: "S",
            description: "Pad 2",
        },
        {
            keys: "D",
            description: "Pad 3",
        },
        {
            keys: "F",
            description: "Pad 4",
        },
    ],
}
