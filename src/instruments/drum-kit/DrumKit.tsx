import { DRUMS } from "./drum.constants"
import { DrumPad } from "./DrumPad"
import styles from "./DrumKit.module.css"
import useAudioEngine from "@/hooks/useAudioEngine"
import { useCurrentInstrumentMappings } from "@/hooks/useCurrentInstrumentMappings"
import useKeyboardInput from "@/hooks/useKeyboardInput"

export const DrumKit: React.FC = () => {
    const { playTarget, stopTarget } = useAudioEngine()
    const { targetMap } = useCurrentInstrumentMappings()

    useKeyboardInput()

    return (
        <div className={styles.grid}>
            {DRUMS.map(drum => (
                <DrumPad
                    key={drum.id}
                    drum={drum}
                    gridClassName={styles[drum.gridArea]}
                    keyboardLabel={targetMap[drum.id] ?? ""}
                    onPlay={playTarget}
                    onRelease={stopTarget}
                />
            ))}
        </div>
    )
}
