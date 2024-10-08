---
sidebar_position: 1
---

# 如何开始

:::tip 提示

[更多详细推荐前往环境生态查看对应内容](/docs/intro)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 初始化环境

```sh title="国内镜像，已安装可忽视"
npm config set registry https://registry.npmmirror.com
```

<Tabs>
  <TabItem value="start-a" label="快速开始" default>

```sh title="创建模版"
npm create alemonjs@latest -y
cd alemonb
```

```sh title="加载依赖"
npm install yarn@1.19.1 -g
yarn install
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

```sh tiitle="安装kook"
yarn add @alemonjs/kook
```

> 登录平台，需要增加对应平台的关联包

  </TabItem>
</Tabs>

```sh title="开发模式启动"
npx alemonjs dev --login "kook" --token "xxxx"
```

--login 选择kook平台

--token 即KOOK登录需要的 token

--input 默认`./src/index.ts`

## 热更新配置

```yaml title="lemon.config.yaml"
kook:
  token: 'xxxx'
  master_id:
    - '123456'
    - '654321'
```

## 编译

```sh titile="编译模式运行"
npx alemonjs build
```

> 输出目录 lib

## PM2

### 安装

```shell
yarn add pm2 -D
```

```yaml title="alemon.config.yaml"
pm2:
  name: 'kook'
  # 生产模式，入口可选择只向打包生产后的文件
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
        // 确保是生产环境
        NODE_ENV: 'production',
        ...(app?.env ?? {})
      }
    }
  ]
}
```

### 启动

```sh
# start
npx pm2 startOrRestart pm2.config.cjs
# stop
npx pm2 stop pm2.config.cjs
# delete
npx pm2 delete pm2.config.cjs
# kill
npx pm2 kill
# logs
npx pm2 logs
```
