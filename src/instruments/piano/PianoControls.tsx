import React, { useEffect, useState } from "react"
import { useAudioEngine } from "@/hooks/useAudioEngine"
import type { WaveformType } from "@/audio/types"

const waveforms: readonly {
    type: WaveformType
    label: string
    icon: string
}[] = [
    { type: "sine", label: "Sine", icon: "∿" },
    { type: "triangle", label: "Triangle", icon: "▲" },
    { type: "sawtooth", label: "Sawtooth", icon: "⚡" },
    { type: "square", label: "Square", icon: "■" },
]

export const PianoControls: React.FC = () => {
    const { setWaveform, getSettings } = useAudioEngine()
    const [waveform, setWave] = useState<WaveformType>("triangle")

    useEffect(() => {
        const settings = getSettings()
        setWave(settings.waveform)
    }, [getSettings])

    const handleWaveformChange = (newWaveform: WaveformType) => {
        setWave(newWaveform)
        setWaveform(newWaveform)
    }

    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Synth Waveform
            </label>
            <div className="flex flex-wrap gap-2 bg-bg-dark/80 p-2 rounded-xl border border-border-muted/60">
                {waveforms.map(item => (
                    <button
                        key={item.type}
                        type="button"
                        onClick={() => handleWaveformChange(item.type)}
                        className={`px-3 py-2 rounded-lg text-xs font-bold transition-all duration-150 flex items-center gap-2 ${
                            waveform === item.type
                                ? "bg-gradient-to-r from-brand-primary to-indigo-600 text-white shadow-md shadow-brand-primary/25"
                                : "text-text-muted hover:text-text-primary bg-bg-card"
                        }`}
                        aria-label={`Select ${item.label} waveform`}
                    >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
