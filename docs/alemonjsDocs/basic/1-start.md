---
sidebar_position: 1
---

# 如何开始

:::tip 提示

更多详细推荐前往 Ecosystem Status 中的 npm 查看对应内容

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 初始化环境

```sh
# 国内镜像，已安装可忽视
npm config set registry https://registry.npmmirror.com
```

<Tabs>
  <TabItem value="start-a" label="快速开始" default>

```sh
npm create alemonjs@latest -y
cd alemonb
```

```sh
npm install yarn@1.19.1 -g
yarn intall
```

  </TabItem>

  <TabItem value="start-b" label="重新开始" default>

### 使用 yarn

```shell
npm install yarn@1.19.1 -g
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

## 平台

```shell
yarn add @alemonjs/kook
```

> 登录平台，需要增加对应平台的关联包

  </TabItem>
</Tabs>

```shell
npx alemonjs dev --login "kook" --token "xxxx"
```

--login 选择kook平台

--token 即KOOK登录需要的 token

```sh
--input "./src/index.ts" #默认
```

## 热更新配置

```yaml title="lemon.config.yaml"
# @alemonjs/kook
kook:
  token: 'xxxx'
  master_id:
    - '123456'
    - '654321'
# kook end
```

## 编译

```sh
npx alemonjs build
```

> 输出目录 lib

## PM2

### 安装

```shell
yarn add pm2 -D
```

```yaml title="alemon.config.yaml"
# pm2
pm2:
  name: 'kook'
  script: 'alemonjs start --input ./lib/index.js --login kook'
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
