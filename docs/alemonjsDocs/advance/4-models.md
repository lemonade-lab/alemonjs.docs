---
sidebar_position: 4
---

# 模块

:::warning

实验性功能

:::

## 使用包

定义apps变量，并添加包

```yaml title="lemon.config.yaml"
apps:
  - '@alemonjs/xiuxian'
```

alemonjs 会根据配置去找对应的 package.json。

并根据 main 信息锁定模块入口文件。

以入口文件的目录为工程目录，收集子目录 apps 内的所有模块

```shell title="目录结构"
node_modules/                 // Node.js 依赖包
 ├── @alemonjs/               // AlemonJS 相关模块
 │    └── xixian/             // xixian 模块
 │         ├── lib/           // 源代码目录
 │         │    ├── apps/     // 开发应用
 │         │    └── index.ts  // 文件入口
 │         └── package.json   // 工程配置文件
 └── alemon.config.yaml       // 机器运行配置文件
```

## 配置

```yaml title=".npmignore"
# 依赖
node_modules
/*
!/lib
!/public
```

```json title="package.json"
{
  "name": "@alemonjs/xiuxian",
  "version": "0.0.1",
  "description": "xiuxian",
  "author": "ningmengchongshui",
  "type": "module",
  "main": "lib/index.js", // 必须的
  "types": "lib",
  "exports": {
    ".": {
      "import": "./lib/index.js",
      "types": "./lib/index.d.ts"
    }
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  }
}
```

```js title="src/index.ts"
import { defineChildren } from 'alemonjs'
export default defineChildren(() => {
  return {
    onCreated() {
      console.log('onCreated')
    }
  }
})
```
