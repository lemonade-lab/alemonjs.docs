---
sidebar_position: 2
---

# 别名

## 创建配置

```ts title="alemon.config.ts"
import { defineConfig } from 'alemonjs'
import { alias } from 'alemonjs/plugins'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    plugins: [
      alias({
        entries: [
          { find: '@public', replacement: join(__dirname, 'public') },
          { find: '@src', replacement: join(__dirname, 'src') }
        ]
      })
    ]
  }
})
```

## 提示

```json title="ts.config.json"
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"],
      "@public/*": ["public/*"]
    }
  },
  "include": ["src/**/*", "public/**/*"],
  "extends": "alemonjs/tsconfig.json"
}
```

## 使用

```ts
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '@public/img/logo.png'
const data = readFileSync(img_logo, 'utf-8')
```
