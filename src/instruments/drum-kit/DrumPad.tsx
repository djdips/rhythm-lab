import type { Drum } from "./drum.types"
import usePlaybackStore from "@/store/playbackStore"
import styles from "./DrumKit.module.css"

interface DrumPadProps {
    drum: Drum
    keyboardLabel?: string
    gridClassName?: string

    onPlay: (target: string) => void
    onRelease: (target: string) => void
}

export const DrumPad: React.FC<DrumPadProps> = ({
    drum,
    keyboardLabel,
    gridClassName,
    onPlay,
    onRelease,
}) => {
    const isPressed = usePlaybackStore(state => !!state.activeTargets[drum.id])

    const handleMouseDown = () => {
        onPlay(drum.id)
    }

    const handleMouseUp = () => {
        onRelease(drum.id)
    }

    const handleMouseLeave = () => {
        onRelease(drum.id)
    }

    return (
        <button
            type="button"
            className={`${styles.pad} ${gridClassName ?? ""} ${
                isPressed ? styles.padActive : ""
            }`}
            onPointerDown={handleMouseDown}
            onPointerUp={handleMouseUp}
            onPointerLeave={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
            aria-label={drum.label}
            aria-pressed={isPressed}
        >
            <span className={styles.icon}>{drum.icon}</span>
            <span className={styles.label}>{drum.label}</span>

            {keyboardLabel && (
                <span className={styles.keyLabel}>{keyboardLabel}</span>
            )}
        </button>
    )
}
