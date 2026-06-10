import React, { useEffect, useState } from "react"
import { useAudioEngine } from "@/hooks/useAudioEngine"
import type { DrumPlaybackMode } from "@/audio/types"

const modes: readonly {
    mode: DrumPlaybackMode
    label: string
    icon: string
}[] = [
    { mode: "auto", label: "Auto", icon: "🔄" },
    { mode: "sample", label: "Sample", icon: "📀" },
    { mode: "synth", label: "Synth", icon: "⚙️" },
]

export const DrumKitControls: React.FC = () => {
    const { setDrumPlaybackMode, getSettings } = useAudioEngine()
    const [playbackMode, setMode] = useState<DrumPlaybackMode>("auto")

    useEffect(() => {
        const settings = getSettings()
        setMode(settings.drumPlaybackMode)
    }, [getSettings])

    const handleModeChange = (newMode: DrumPlaybackMode) => {
        setMode(newMode)
        setDrumPlaybackMode(newMode)
    }

    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Drum Playback Mode
            </label>
            <div className="flex flex-wrap gap-2 bg-bg-dark/80 p-2 rounded-xl border border-border-muted/60">
                {modes.map(item => (
                    <button
                        key={item.mode}
                        type="button"
                        onClick={() => handleModeChange(item.mode)}
                        className={`px-3 py-2 rounded-lg text-xs font-bold transition-all duration-150 flex items-center gap-2 ${
                            playbackMode === item.mode
                                ? "bg-gradient-to-r from-brand-primary to-indigo-600 text-white shadow-md shadow-brand-primary/25"
                                : "text-text-muted hover:text-text-primary bg-bg-card"
                        }`}
                        aria-label={`Select ${item.label} drum playback mode`}
                    >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
