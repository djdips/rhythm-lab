import type { InputMapping } from '@/types/music';

export const createKeyToTargetMap = (
  mappings: readonly InputMapping[],
): Readonly<Record<string, string>> =>
  Object.fromEntries(
    mappings.map((mapping) => [
      mapping.key,
      mapping.target,
    ]),
  );

export const createTargetToKeyMap = (
  mappings: readonly InputMapping[],
): Readonly<Record<string, string>> =>
  Object.fromEntries(
    mappings.map((mapping) => [
      mapping.target,
      mapping.key.replace('Key', ''),
    ]),
  );