---
sidebar_position: 5
---

# 数据

```yaml title="lemon.config.yaml"
redis:
  host: 'localhost'
  port: 6379
  password: ''
  db: 0
```

```ts title="src/index.ts"
import { getIoRedis } from 'alemonjs'
const ioRedis = getIoRedis()
// ioRedis.set("alemonjs:user","xxx")
```
