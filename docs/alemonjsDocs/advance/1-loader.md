---
sidebar_position: 1
---

# 装载

:::info

了解如何在模块中引用非模块文件

:::

## 类型

```ts title="src/end.d.ts"
/// <reference types="alemonjs/env" />
```

## 示例

```ts
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '../logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## 编译

```ts title="alemon.config.ts"
import { defineConfig } from 'alemonjs'
import { files } from 'alemonjs/plugins'
export default defineConfig({
  build: {
    plugins: [files({ filter: /\.(png|jpg|css)$/ })]
  }
})
```

## loader

```sh title="支持在非alemonjs环境中使用本文功能"
NODE_OPTIONS='--loader alemonjs/loader --no-warnings' node index.js
```

```sh title="支持在非alemonjs环境中使用本文功能"
node --loader alemonjs/loader --no-warnings index.js
```

```sh title="禁用非模块文件加载"
nxp alemonjs dev --esms-no-import
```

```sh title="覆盖配置"
nxp alemonjs dev --esms-image-import “/.(png|jpg|ico)/”
nxp alemonjs dev --esms-css-import “/.(css|scss)/”
nxp alemonjs dev --esms-vidoe-import “/.(mp4|webm)/”
nxp alemonjs dev --esms-aodio-import “/.(mp4|webm)/”
nxp alemonjs dev --esms-font-import “/.(woff|ttf)/”
nxp alemonjs dev --esms-files-import “/.(ma)/”
```
