import { useCallback } from "react"
import { AudioEngine } from "../audio/AudioEngine"
import { NOTE_MAP } from "../constants/notes"
import type { WaveformType } from "../audio/types"
import usePlaybackStore from "../store/playbackStore"
import { DRUM_TARGETS } from "@/instruments/drum-kit/drum.constants"

export const useAudioEngine = () => {
    const audioEngine = AudioEngine.getInstance()
    const triggerTargetOn = usePlaybackStore(state => state.triggerTargetOn)
    const triggerTargetOff = usePlaybackStore(state => state.triggerTargetOff)

    const playTarget = useCallback(
        (target: string, velocity: number = 1) => {
            const note = NOTE_MAP[target]
            if (note) {
                // Update Zustand visual state
                triggerTargetOn(target)
                // Synthesize audio
                audioEngine.startNote(target, note.frequency)

                return
            }

            if (DRUM_TARGETS.has(target)) {
                // Update Zustand visual state
                triggerTargetOn(target)
                // Play drum
                audioEngine.playDrum(target, velocity)

                setTimeout(() => {
                    triggerTargetOff(target)
                }, 300)

                return
            }
        },
        [triggerTargetOn, audioEngine, triggerTargetOff]
    )

    const stopTarget = useCallback(
        (target: string) => {
            // Update Zustand visual state
            triggerTargetOff(target)
            // Dampen audio oscillator
            audioEngine.stopNote(target)
        },
        [triggerTargetOff, audioEngine]
    )

    const setVolume = useCallback(
        (volume: number) => {
            audioEngine.setVolume(volume)
        },
        [audioEngine]
    )

    const setWaveform = useCallback(
        (waveform: WaveformType) => {
            audioEngine.setWaveform(waveform)
        },
        [audioEngine]
    )

    const setDrumPlaybackMode = useCallback(
        (mode: import("../audio/types").DrumPlaybackMode) => {
            audioEngine.setDrumPlaybackMode(mode)
        },
        [audioEngine]
    )

    const getSettings = useCallback(() => {
        return audioEngine.getSettings()
    }, [audioEngine])

    return {
        playTarget,
        stopTarget,
        setVolume,
        setWaveform,
        setDrumPlaybackMode,
        getSettings,
    }
}

export default useAudioEngine
