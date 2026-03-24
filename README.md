# @thanh-libs/utils

Shared utility functions and hooks for System Core UI.

## Installation

```bash
npm install @thanh-libs/utils
# or
yarn add @thanh-libs/utils
```

## Functions

### `pxToRem(px, htmlFontSize?)`

Convert pixel values to rem units.

```ts
import { pxToRem } from '@thanh-libs/utils';

pxToRem(16);       // => '1.143rem'  (16 / 14)
pxToRem(16, 16);   // => '1rem'      (16 / 16)
pxToRem(0);        // => '0rem'
```

| Param          | Type     | Default | Description                          |
| -------------- | -------- | ------- | ------------------------------------ |
| `px`           | `number` | —       | Pixel value to convert               |
| `htmlFontSize` | `number` | `14`    | Root `<html>` font size for the calc |

---

### `alpha(hex, opacity)`

Apply alpha transparency to a hex color, returning an `rgba()` string.

```ts
import { alpha } from '@thanh-libs/utils';

alpha('#1890ff', 0.2);  // => 'rgba(24, 144, 255, 0.2)'
alpha('FF4D4F', 0.5);   // => 'rgba(255, 77, 79, 0.5)'
```

| Param     | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| `hex`     | `string` | 3 or 6 digit hex color (with/without `#`) |
| `opacity` | `number` | Alpha value between 0 and 1              |

---

### `textToColor(str)`

Convert any string to a deterministic, pleasant HSL color. Useful for generating consistent avatar background colors from user names.

```ts
import { textToColor } from '@thanh-libs/utils';

textToColor('Quốc Thanh');  // => 'hsl(142, 65%, 45%)'
textToColor('John Doe');    // => 'hsl(27, 65%, 45%)'
```

| Param | Type     | Description                          |
| ----- | -------- | ------------------------------------ |
| `str` | `string` | Input string (e.g. a person's name)  |

> Uses the djb2 hash algorithm. Saturation (65%) and lightness (45%) are fixed for readable, vibrant colors.

## Hooks

*(coming soon)*

## Running unit tests

```bash
nx test @thanh-libs/utils
```
