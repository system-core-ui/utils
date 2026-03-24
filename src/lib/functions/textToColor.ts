/**
 * Convert a string to a consistent HSL color.
 *
 * Uses djb2 hash to generate a deterministic hue from any string.
 * Saturation and lightness are fixed for pleasant, readable colors.
 *
 * @param str — Input string (e.g. a person's name)
 * @returns HSL color string, e.g. `hsl(210, 65%, 45%)`
 *
 * @example
 * ```ts
 * textToColor('Quốc Thanh'); // => 'hsl(142, 65%, 45%)'
 * textToColor('John Doe');   // => 'hsl(27, 65%, 45%)'
 * ```
 */
export const textToColor = (str: string): string => {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  const hue = ((hash >>> 0) % 360);
  return `hsl(${hue}, 65%, 45%)`;
};
