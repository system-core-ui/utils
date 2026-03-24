import { describe, it, expect } from 'vitest';
import { textToColor } from '../../src/lib/functions/textToColor';

describe('textToColor()', () => {
  it('returns a valid HSL string', () => {
    const result = textToColor('Hello');
    expect(result).toMatch(/^hsl\(\d+, 65%, 45%\)$/);
  });

  it('is deterministic — same input always produces same output', () => {
    const a = textToColor('Quốc Thành');
    const b = textToColor('Quốc Thành');
    expect(a).toBe(b);
  });

  it('produces different colors for different names', () => {
    const a = textToColor('Alice');
    const b = textToColor('Bob');
    expect(a).not.toBe(b);
  });

  it('handles empty string', () => {
    const result = textToColor('');
    expect(result).toMatch(/^hsl\(\d+, 65%, 45%\)$/);
  });

  it('handles single character', () => {
    const result = textToColor('A');
    expect(result).toMatch(/^hsl\(\d+, 65%, 45%\)$/);
  });

  it('produces hue in [0, 360) range', () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Quốc Thành', '日本語'];
    for (const name of names) {
      const match = textToColor(name).match(/^hsl\((\d+),/);
      expect(match).not.toBeNull();
      const hue = parseInt((match as RegExpMatchArray)[1], 10);
      expect(hue).toBeGreaterThanOrEqual(0);
      expect(hue).toBeLessThan(360);
    }
  });
});
