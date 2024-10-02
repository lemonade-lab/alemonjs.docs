---
sidebar_position: 2
---

# 应用示例

:::tip

V2 的响应基于文件系统，是运行时特性。

即当 `res` 没有匹配时，不会加载该模块。

仅在路由到 `res` 时进行加载，并通过内部算法优化匹配速度。

:::

## 响应内容定义

```ts title="apps/**/*/res.ts"
export default OnResponse(
  event => {
    // 执行内容
  },
  'message.create', // 匹配类型
  /^你好$/ // 该类型下可使用正则匹配
)
```

## 消息发送示例

```ts title="apps/**/*/res.ts"
import { Text, useSend } from 'alemonjs'
// ...
// 使用消息接口
const Send = useSend(event)
// 发送消息 - 文本 Hello Word !
Send(Text('Hello Word !'))
// ...
```

## 完整示例

```ts title="apps/**/*/res.ts"
import { Text, useSend } from 'alemonjs'
// ...
// 使用消息接口
const Send = useSend(event)
// 发送消息 - 文本 Hello Word !
Send(Text('Hello Word !'))
// ...
```
