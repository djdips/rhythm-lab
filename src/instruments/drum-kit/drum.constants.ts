import type { Drum } from "./drum.types"

export const DRUMS: readonly Drum[] = [
    {
        id: "kick",
        label: "Kick",
        key: "A",
        icon: "🦶",
        gridArea: "kick",
        gain: 0.9,
    },
    {
        id: "snare",
        label: "Snare",
        key: "S",
        gridArea: "snare",
        icon: "⚡",
        gain: 0.8,
    },
    {
        id: "closed-hihat",
        label: "Hi-Hat",
        key: "D",
        gridArea: "hihat",
        icon: "🎵",
        gain: 0.5,
    },
    {
        id: "crash",
        label: "Crash",
        key: "F",
        gridArea: "crash",
        icon: "💥",
        gain: 0.6,
    },
]

export const DRUM_TARGETS = new Set([
    "kick",
    "snare",
    "closed-hihat",
    "crash",
    "pad-1",
    "pad-2",
    "pad-3",
    "pad-4",
])

export const DRUM_BY_ID = Object.fromEntries(DRUMS.map(drum => [drum.id, drum]))
