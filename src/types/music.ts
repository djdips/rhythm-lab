export type InstrumentType = "piano" | "drum-kit" | "electronic-drum-pad"

export interface Note {
    readonly pitch: string // e.g. "C4", "C#4"
    readonly name: string // e.g. "C", "C#"
    readonly frequency: number // e.g. 261.63
    readonly isAccidental: boolean // true if sharp/flat (black key)
    readonly octave: number // e.g. 4
}

export interface PianoKeyState {
    readonly note: Note
    readonly isPressed: boolean
    readonly isFocused: boolean
}

export interface InputMapping {
    readonly key: string
    readonly target: string
}
