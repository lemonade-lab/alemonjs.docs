---
sidebar_position: 1
---

# 自定义平台

:::tip

可以自己定义平台，平台方法很简单，也提供了统一的类型提示

:::

## 导出

```js title="src/index.ts"
import { Text, OnProcessor, AEvents, useParse, At } from 'alemonjs'
import { defineBot } from 'alemonjs';
export default defineBot(() => {
  // 创建实例后。

  // 返回其接口设计。

  // 返回处理标准对象
  return {
    // 接口
    api: {
      // useSend()
      use: {
        send: (event: AEvents['message.create'], data: any[]) => {
          // 数据包 data
          if (data.length < 0) return Promise.all([])
          //
          return Promise.all([])
        }
      }
    }
  }
})
```
