---
sidebar_position: 3
---

# 图片

## 安装

```sh
yarn add react-puppeteer -W
```

## 配置

```cjs
/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = require('react-puppeteer/.puppeteerrc')
```

## 组件

```tsx title="src/image/component/Word.tsx"
// src/Word.tsx
import React from 'react'
export default ({ name }) => {
  return (
    <>
      <div> {name} </div>
    </>
  )
}
```

```tsx title="src/image/index.tsx"
import React from 'react'
import { pictureRender, render } from 'react-puppeteer'
import Word from './component/Word'
export const pictureRender = (uid: number, Props: Parameters<typeof Word>[0]) => {
  // 生成 html 地址 或 html字符串
  return render({
    // html/hello/uid.html
    join_dir: 'hello',
    html_name: `${uid}.html`,
    html_body: <Word {...Props} />
  })
}
```

## 发送

```ts title="src/apps/word/res.ts"
import { useSend, Image } from 'alemonjs'
import { pictureRender } from '../../image/index'
export default OnResponse(
  async event => {
    const UID = e.event
    const Send = useSend(event)
    const img: Buffer = await pictureRender(UID, {
      name: 'Hello Word !'
    })
    Send(Image(img))
  },
  'message.create',
  /^(#|\/)?炼丹师学徒$/
)
```

## 热重启

```sh
npx tsxp dev
```

```tsx title="tsxp.config.tsx"
import React from 'react'
import { join } from 'path'
import { defineConfig } from 'react-puppeteer'
import { readFileSync } from 'fs'
import Word from '@src/image/conpomnent/Hello'
export default defineConfig([
  {
    url: '/word',
    options: {
      html_body: <Word />
    }
  }
])
```

```sh
NODE_OPTIONS='--loader alemonjs/loader --no-warnings' npx tsxp dev
```

> 若使用了别名和装载，必须设置loader
