import type { InputMapping } from "@/types/music"
import {
    createKeyToTargetMap,
    createTargetToKeyMap,
} from "@/instruments/shared/mapping.utils"

export const ELECTRONIC_DRUM_PAD_MAPPINGS: readonly InputMapping[] = [
    {
        key: "KeyA",
        target: "pad-1",
    },
    {
        key: "KeyS",
        target: "pad-2",
    },
    {
        key: "KeyD",
        target: "pad-3",
    },
    {
        key: "KeyF",
        target: "pad-4",
    },
]

export const ELECTRONIC_DRUM_PAD_KEY_MAP = createKeyToTargetMap(
    ELECTRONIC_DRUM_PAD_MAPPINGS
)
export const ELECTRONIC_DRUM_PAD_TARGET_MAP = createTargetToKeyMap(
    ELECTRONIC_DRUM_PAD_MAPPINGS
)
