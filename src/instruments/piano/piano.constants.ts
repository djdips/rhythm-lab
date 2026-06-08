/**
 * The left offsets (as percentage strings) for black keys.
 * Positioned precisely at the intersections of their adjacent white keys.
 * 
 * Total White Keys = 7 (each takes 100% / 7 = 14.2857% width)
 * 
 * Boundaries:
 * - C / D boundary: 1/7 = 14.2857%
 * - D / E boundary: 2/7 = 28.5714%
 * - F / G boundary: 4/7 = 57.1428%
 * - G / A boundary: 5/7 = 71.4285%
 * - A / B boundary: 6/7 = 85.7142%
 * 
 * Using a black key width of 4.5% of the total keyboard width,
 * we center them by subtracting half the width (2.25%) from the boundary.
 */
export const BLACK_KEY_OFFSETS: Readonly<Record<string, string>> = {
  'C#4': 'calc(14.2857% - 2.25%)',
  'D#4': 'calc(28.5714% - 2.25%)',
  'F#4': 'calc(57.1428% - 2.25%)',
  'G#4': 'calc(71.4285% - 2.25%)',
  'A#4': 'calc(85.7142% - 2.25%)'
};

export const BLACK_KEY_WIDTH_PCT = 4.5;
