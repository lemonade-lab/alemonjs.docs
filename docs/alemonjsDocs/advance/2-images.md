---
sidebar_position: 2
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
import Word from './component/Word.tsx'
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
import { pictureRender } from '../../image/index.js'
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
