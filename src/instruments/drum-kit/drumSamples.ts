import kick from '@/assets/audio/drum-kits/acoustic/kick.wav';
import snare from '@/assets/audio/drum-kits/acoustic/snare.wav';
import hihat from '@/assets/audio/drum-kits/acoustic/hihat.wav';
import crash from '@/assets/audio/drum-kits/acoustic/crash.wav';

export const DRUM_SAMPLES = {
  kick,
  snare,
  'closed-hihat': hihat,
  crash,
} as const;