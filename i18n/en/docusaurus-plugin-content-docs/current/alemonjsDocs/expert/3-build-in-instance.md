---
sidebar_position: 3
---

# Built-in Instance Methods

:::warning

Experimental Function

:::

### Data `Buffer`

```ts title="apps/**/*/res.ts"
import { BufferData } from 'chat-space'
const BufferDB = new BufferData()
```

- Convert string address to QR code

```ts title="apps/**/*/res.ts"
const img: Buffer | false = await BufferDB.qrcode('www.baidu.com')
```

- Read the image at the specified path

```ts title="apps/**/*/res.ts"
const img: Buffer | false = await BufferDB.getPath('xxx.png')
```

- Read the image at the specified URL

```ts title="apps/**/*/res.ts"
const img: Buffer | false = await BufferDB.getUrl('https://xxxx.com/xxx.png')
```

- Write data and store it as a file

```ts title="apps/**/*/res.ts"
BufferDB.set('/public/buffer.ini')
```

- Read file data

```ts title="apps/**/*/res.ts"
const img: Buffer | false = await BufferDB.get('/public/buffer.ini')
```

### Client

Client object for directly calling APIs

Ensures that the development framework does not lose API compatibility

While retaining platform-specific features

```ts title="apps/**/*/res.ts"
import { FilesServer } from 'chat-space'
const ClientFile = new FilesServer()
```

- Fixed file exposure

```ts title="apps/**/*/res.ts"
const url = await ClientFile.getLocalFileUrl('/plugins/point/public/img/ionc.png')

// url   http://[::]:port/api/xxx?address=/plugins/point/public/img/ionc.png
```

- Dynamic file exposure

```ts title="apps/**/*/res.ts"
const img: Buffer = '<buffer-img xxx >'
const url = await ClientFile.getFileUrl(img)

// url   http://[::]:port/api/xxx/1234567890.png
```

### IP Address

> If the device has a public IP address, it can be obtained as follows:

```ts title="apps/**/*/res.ts"
import { IP } from 'chat-space'
const ip:string : false = await IP.get()
```
