import type { ComponentType } from "react"
import type { InstrumentType, InputMapping } from "@/types/music"
import type { InstrumentHelpContent } from "@/types/help"

export interface Instrument {
    readonly id: InstrumentType
    readonly name: string
    readonly icon: string
    readonly enabled: boolean
}

export interface InstrumentRegistryItem {
    readonly component: ComponentType
    readonly help: InstrumentHelpContent
    readonly controls?: ComponentType

    readonly mappings: readonly InputMapping[]

    readonly keyMap: Record<string, string>
    readonly targetMap: Record<string, string>
}
