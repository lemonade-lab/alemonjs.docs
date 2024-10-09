---
sidebar_position: 1
---

# Loading

:::info

Learn how to reference non-module files in a module

:::

## Type

```ts title="src/end.d.ts"
/// <reference types="alemonjs/env" />
```

## Example

```ts
import { readFileSync } from 'fs'
// Get the absolute path of the file, type string.
import img_logo from '../logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## Compile

```ts title="alemon.config.ts"
import { defineConfig } from 'alemonjs'
import { files } from 'alemonjs/plugins'
export default defineConfig({
  build: {
    // Please do not intercept CSS and SCSS files. Alemonjs has built -in processing
    plugins: [files({ filter: /\.(png|jpg)$/ })]
  }
})
```

## loader

```sh title="Support using this feature in non-alemonjs environments"
node --loader alemonjs/loader --no-warnings index.js
# or
NODE_OPTIONS='--loader alemonjs/loader --no-warnings' node index.js
```

```sh title="Disable non-module file loading"
nxp alemonjs dev --no-import-assets
```

```sh title="Replace the assets matching rules"
nxp alemonjs dev --import-assets "/.(pm3|jpg|png|svg|icon)$/"
```

```sh title="Disable postcss preprocessing"
nxp alemonjs dev --no-import-css
```

```sh title="Replace the css matching rules"
nxp alemonjs dev --import-css "/.(css|scss|less)$/"
```
