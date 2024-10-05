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

## CSS扩展

### 安装

```sh
yarn add postcss postcss-cli tailwindcss cssnano autoprefixer -D
```

### 入口

```css title="src/input.css"
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
}
```

### postcss

```cjs title="postcss.config.cjs"
const args = [...process.argv.slice(2)]
const plugins = args.includes('--css-minify') ? { cssnano: { preset: 'default' } } : {}
module.exports = {
  plugins: {
    'autoprefixer': {},
    // 允许使用import导入css文件
    'postcss-import': {},
    // tailwindcss
    'tailwindcss': {},
    // ...
    ...plugins
  }
}
```

### tailwind

```js title="tailwind.config.js"
/**
 *  @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}']
}
```

### 启动

```ts title="src/postcss.ts"
import { spawn } from 'child_process'
const args = [...process.argv.slice(2)]

const startCssPost = (input, output) => {
  // 如果命令行参数中包含 --css-server
  // 启动 CSS 服务进程
  if (args.includes('--css-server')) {
    console.log('Starting CSS server...')
    const cssServerProcess = spawn('npx', ['tsxp', 'dev'], {
      stdio: 'inherit',
      // 确保server服务器使用alemonjs/loader
      env: Object.assign({}, process.env, {
        NODE_OPTIONS: '--loader alemonjs/loader --no-warnings'
      })
    })
    cssServerProcess.on('error', err => {
      console.error('Failed to start CSS server:', err)
    })
  }

  //
  console.log('Starting Tailwind process...')

  const run = ['postcss', input, '-o', output]

  // 如果命令行参数中包含 --css-server 或 --css-watch
  // 启动键监听

  if (args.includes('--css-server') || args.includes('--css-watch')) {
    run.push('--watch')
  }
  if (args.includes('--css-minify')) {
    run.push('--css-minify')
  }
  // 启动 Tailwind 进程
  const cssPostProcess = spawn('npx', run, {
    stdio: 'inherit'
  })
  cssPostProcess.on('error', err => {
    console.error('Failed to start Tailwind process:', err)
  })
}

// 执行生产
startCssPost('src/input.css', 'public/output.css')
```

```ts
import React from 'react'
import { render, LinkCSS } from 'react-puppeteer'
// 引入生产文件。
import css_output from '@public/output.css'
// 导出
export const PictureOptions = {
  html_head: (<LinkCSS src={css_output} />)
}
// 截图函数
export const pictureRender = () => {
  // 截图
  return render({
    ...PictureOptions,
    // ... 其他配置
  })
}

```

- 浏览器服务器

```sh
npx tsx src/postcss.ts --css-server
```

- 开发/构建时

```ts title="alemon.config.ts"
//
import './src/postcss.js'
export default defineConfig({
  build: {
    plugins: []
  }
})
```

```sh
npx alemonjs build --css-watch # 监听
```

```sh
npx alemonjs build --css-minify # 压缩
```
