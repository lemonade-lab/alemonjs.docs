---
sidebar_position: 1
---

# 装载

:::info

AlemonJS已内置,且非该框架应用也能通过参数配置使用该功能

:::

## 非模块导入

```ts
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '../logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## 你的应用

```sh
NODE_OPTIONS='--loader alemonjs/loader --no-warnings' node index.js
```

```sh
node --loader alemonjs/loader --no-warnings index.js
```
