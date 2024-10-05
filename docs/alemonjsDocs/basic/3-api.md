---
sidebar_position: 3
---

# 事件接口

### `OnResponse`

- 一种用于处理特定事件的功能，它允许开发者定义在事件发生时应执行的操作。

```ts title="apps/**/*/res.ts"
export default OnResponse(
  (_, { next }) => {
    // 即使完成了，也继续执行匹配
    next()
  },
  'message.create', // 监听的事件类型
  /^你好$/ // 匹配的正则表达式
)
```
