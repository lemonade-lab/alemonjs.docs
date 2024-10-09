---
sidebar_position: 2
---

# Special interface

:::warning

Experimental function

:::

> (Card|Reaction) differs from other interfaces in that it generally only requires common subfields.

> The data format varies for each platform.

### 一、qq-group

- embed

```js title="apps/**/*/res.ts"
import { QQGroupBotAPI } from 'chat-space'
const Client = new QQGroupBotAPI()
const cards = [
  {
    embed: {
      title: 'Newcomer Task',
      prompt: 'Newcomer Task',
      thumbnail: {
        url: 'http://tva1.sinaimg.cn/bmiddle/6af89bc8gw1f8ub7pm00oj202k022t8i.jpg'
      },
      fields: [
        {
          name: 'Go go go'
        },
        {
          name: '😁Keep it up'
        }
      ]
    }
  }
]
```

- emoji

```js title="apps/**/*/res.ts"
import { QQGroupBotAPI } from 'chat-space'
const Client = new QQGroupBotAPI()
```

### 二、qq-guild-bot

- Markdown Template Function

:::warning

Markdown universal message templates are no longer allowed for application.

:::
