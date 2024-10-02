---
sidebar_position: 1
---

# 如何开始

:::tip 提示

更多详细推荐前往 Ecosystem Status 中的 npm 查看对应内容

:::

## 初始化环境

### 使用 yarn

```shell
npm install yarn@1.19.1 -g
```

### 安装 ts 环境

```shell
yarn add tsx -D
```

### 配置环境

```ts title="./tsconfig.json"
{
  "include": ["src/**/*"],
  "extends": "alemonjs/tsconfig.json"
}
```

> 暂未支持paths别名系统

### 安装AlemonJS

```shell
yarn add alemonjs@2 -W
```

### 创建文件

```ts title="./src/index.ts"
import { defineChildren } from 'alemonjs'
export default defineChildren(config => {
  console.log('本地开发测试启动', config)
  return {
    onCreated() {
      console.log('onCreated')
    }
  }
})
```

### 启动

```shell
npx alemonjs --input src/index.ts --login "xxx"
```

--input 入口文件

--login 即要选择登录的平台

## 登录平台

### 安装平台

```shell
yarn add @alemonjs/kook
```

> 登录平台，需要增加对应平台的关联包

### 启动

```shell
npx tsx index.ts --login "kook" --token "xxxx"
```

--token 即登录需要的 token ，不同平台要求不同

## 热更新配置

```yaml title="lemon.config.yaml"
# @alemonjs/kook

kook:
  token: 'xxxx'
  master_id:
    - '123456'
    - '654321'
# kook end

# 不使用 --login 时将尝试读取此配置内容以启动机器人
login: 'kook'

# pm2
pm2:
  name: 'kook'
  script: 'npx tsx index.ts --login kook'
```

## PM2

### 安装

```shell
yarn add pm2 -D
```

```yaml title="alemon.config.yaml"
pm2:
  name: 'kook'
  script: 'npx tsx index.ts --login kook'
  env:
    NODE_ENV: 'production'
```

### 配置

`pm2.config.cjs`

```js title="pm2.config.cjs"
const fs = require('fs')
const yaml = require('yaml')
const data = fs.readFileSync('./alemon.config.yaml', 'utf8')
const config = yaml.parse(data)
const app = config?.pm2 ?? {}
/**
 * @type {{ apps: import("pm2").StartOptions[] }}
 */
module.exports = {
  apps: [
    {
      ...app,
      env: {
        NODE_ENV: 'production',
        ...(app?.env ?? {})
      }
    }
  ]
}
```

### 启动

```shell
npx pm2 start --config pm2.condig.cjs
```
