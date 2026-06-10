import Piano from "@/instruments/piano/Piano"
import { pianoHelp } from "@/instruments/piano/pianoHelp"
import { PianoControls } from "@/instruments/piano/PianoControls"
import {
    PIANO_MAPPINGS,
    PIANO_KEY_MAP,
    PIANO_TARGET_MAP,
} from "@/instruments/piano/pianoMappings"
import type { Instrument, InstrumentRegistryItem } from "./instrument.types"
import type { InstrumentType } from "@/types/music"
import { DrumKit } from "../drum-kit/DrumKit"
import { drumHelp } from "../drum-kit/drumHelp"
import { DrumKitControls } from "../drum-kit/DrumKitControls"
import {
    DRUM_KEY_MAP,
    DRUM_MAPPINGS,
    DRUM_TARGET_MAP,
} from "../drum-kit/drumMappings"
import ElectronicDrumPad from "@/instruments/electronic-drum-pad/ElectronicDrumPad"
import { ElectronicDrumPadControls } from "@/instruments/electronic-drum-pad/ElectronicDrumPadControls"
import { electronicDrumPadHelp } from "@/instruments/electronic-drum-pad/electronicDrumPadHelp"
import {
    ELECTRONIC_DRUM_PAD_KEY_MAP,
    ELECTRONIC_DRUM_PAD_MAPPINGS,
    ELECTRONIC_DRUM_PAD_TARGET_MAP,
} from "@/instruments/electronic-drum-pad/electronicDrumPadMappings"

export const INSTRUMENTS: readonly Instrument[] = [
    {
        id: "piano",
        name: "Piano",
        icon: "🎹",
        enabled: true,
    },
    {
        id: "drum-kit",
        name: "Drum Kit",
        icon: "🥁",
        enabled: true,
    },
    {
        id: "electronic-drum-pad",
        name: "Electronic Drum Pad",
        icon: "🎛️",
        enabled: true,
    },
] as const

export const instrumentRegistry: Record<
    InstrumentType,
    InstrumentRegistryItem
> = {
    piano: {
        component: Piano,
        help: pianoHelp,
        controls: PianoControls,
        mappings: PIANO_MAPPINGS,
        keyMap: PIANO_KEY_MAP,
        targetMap: PIANO_TARGET_MAP,
    },
    "drum-kit": {
        component: DrumKit,
        help: drumHelp,
        controls: DrumKitControls,
        mappings: DRUM_MAPPINGS,
        keyMap: DRUM_KEY_MAP,
        targetMap: DRUM_TARGET_MAP,
    },
    "electronic-drum-pad": {
        component: ElectronicDrumPad,
        help: electronicDrumPadHelp,
        controls: ElectronicDrumPadControls,
        mappings: ELECTRONIC_DRUM_PAD_MAPPINGS,
        keyMap: ELECTRONIC_DRUM_PAD_KEY_MAP,
        targetMap: ELECTRONIC_DRUM_PAD_TARGET_MAP,
    },
}
