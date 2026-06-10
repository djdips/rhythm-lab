import React from "react"
import { DrumPad } from "../drum-kit/DrumPad"
import styles from "../drum-kit/DrumKit.module.css"
import useAudioEngine from "@/hooks/useAudioEngine"
import { useCurrentInstrumentMappings } from "@/hooks/useCurrentInstrumentMappings"
import useKeyboardInput from "@/hooks/useKeyboardInput"

// Electronic drum pad pads with a 4x4 grid layout
const ELECTRONIC_PADS = [
    {
        id: "pad-1",
        label: "Pad 1",
        key: "A",
        icon: "1️⃣",
        gridArea: "kick",
        gain: 0.8,
    },
    {
        id: "pad-2",
        label: "Pad 2",
        key: "S",
        icon: "2️⃣",
        gridArea: "snare",
        gain: 0.8,
    },
    {
        id: "pad-3",
        label: "Pad 3",
        key: "D",
        icon: "3️⃣",
        gridArea: "hihat",
        gain: 0.8,
    },
    {
        id: "pad-4",
        label: "Pad 4",
        key: "F",
        icon: "4️⃣",
        gridArea: "crash",
        gain: 0.8,
    },
] as const

export const ElectronicDrumPad: React.FC = () => {
    const { playTarget, stopTarget } = useAudioEngine()
    const { targetMap } = useCurrentInstrumentMappings()

    useKeyboardInput()

    return (
        <div className={styles.grid}>
            {ELECTRONIC_PADS.map(pad => (
                <DrumPad
                    key={pad.id}
                    drum={pad}
                    gridClassName={styles[pad.gridArea]}
                    keyboardLabel={targetMap[pad.id] ?? ""}
                    onPlay={playTarget}
                    onRelease={stopTarget}
                />
            ))}
        </div>
    )
}

export default ElectronicDrumPad
