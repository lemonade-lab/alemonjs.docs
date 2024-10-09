"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[461],{8534:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=s(4848),t=s(8453);const o={sidebar_position:3},i="Hook",c={id:"alemonjsDocs/basic/hook",title:"Hook",description:"Demanding in specific events or status, allowing developers to insert custom behavior when a specific life cycle or event occurs.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/alemonjsDocs/basic/3-hook.md",sourceDirName:"alemonjsDocs/basic",slug:"/alemonjsDocs/basic/hook",permalink:"/en/docs/alemonjsDocs/basic/hook",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/alemonjs-docs/docs/alemonjsDocs/basic/3-hook.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Type",permalink:"/en/docs/alemonjsDocs/basic/message-type"},next:{title:"Data",permalink:"/en/docs/alemonjsDocs/basic/db"}},a={},d=[{value:"<code>useSend</code>",id:"usesend",level:3},{value:"<code>usePrase</code>",id:"useprase",level:3},{value:"<code>useObserver</code>",id:"useobserver",level:2}];function l(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"hook",children:"Hook"})}),"\n",(0,r.jsx)(n.admonition,{title:"Hook",type:"info",children:(0,r.jsx)(n.p,{children:"Demanding in specific events or status, allowing developers to insert custom behavior when a specific life cycle or event occurs."})}),"\n",(0,r.jsx)(n.p,{children:"Alemonjs provides the following hooks:"}),"\n",(0,r.jsx)(n.h3,{id:"usesend",children:(0,r.jsx)(n.code,{children:"useSend"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Allow developers to send messages when responding to specific events (such as receiving messages)."}),"\n",(0,r.jsx)(n.p,{children:"This acquisition is usually performed in a specific event processing context."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"import { useSend, Text, At, Image } from 'alemonjs'\r\nexport default OnResponse(\r\n  event => {\r\n    const Send = useSend(event)\r\n\r\n    // Send text\r\n    Send(Text('Hello World!'))\r\n\r\n    // Send @ mension\r\n    Send(At('123456'))\r\n\r\n    // Send multiple types of messages\r\n    Send(Text('Hello '), At('123456'), Text(', How are things going?'))\r\n\r\n    // Send pictures\r\n    const img: Buffer = null // You need to properly initialize the buffer here\r\n    Send(Image(img))\r\n\r\n    // Send local picture files\r\n    Send(Image('src/assets/img/test.jpg', 'file'))\r\n  },\r\n  'message.create',\r\n  /^(#|\\/)?Hello$/\r\n)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"useprase",children:(0,r.jsx)(n.code,{children:"usePrase"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Utilized and extract the receiving message content,"}),"\n",(0,r.jsx)(n.p,{children:"during a specific event processing (e.g. when receiving a message),"}),"\n",(0,r.jsx)(n.p,{children:"Developers can get the specific content of the message."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"import { useParse } from 'alemonjs'\r\nexport default OnResponse(\r\n  event => {\r\n    // Parse user messages\r\n    const text = useParse(event.Msgs, 'Text')\r\n    if (!text) {\r\n      return // Massage content is empty\r\n    }\r\n\r\n    const ats = useParse(event.Msgs, 'At')\r\n    if (!ats || ats.length === 0) {\r\n      return // @ Mention not found\r\n    }\r\n\r\n    // Find the user type @ mension, and not BOT\r\n    const UserID = ats.find(item => item.typing === 'user' && !item.bot)?.value\r\n    if (!UserID) {\r\n      return // No user ID is found\r\n    }\r\n\r\n    // Processing users who are AT...\r\n  },\r\n  'message.create',\r\n  /^(#|\\/)?Hello$/\r\n)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"useobserver",children:(0,r.jsx)(n.code,{children:"useObserver"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Observer mode, monitor and respond to an event. Observation event example"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"import { Text, useObserver, useParse, useSend } from 'alemonjs'\r\nexport default OnResponse(\r\n  event => {\r\n    // create\r\n    const Send = useSend(event)\r\n    Send(Text('Please enter the password'))\r\n\r\n    // Create an Observer\r\n    const Observer = useObserver(event, 'message.create')\r\n\r\n    Observer(\r\n      (event, { next }) => {\r\n        // Create\r\n        const Send = useSend(event)\r\n        const text = useParse(event.Megs, 'Text')\r\n        // Check\r\n        if (text === '123456') {\r\n          Send(Text('The password is correct'))\r\n          // finish\r\n        } else if (text == 'close') {\r\n          // finish\r\n          Send(Text('Cancel login'))\r\n        } else {\r\n          Send(Text('The password is incorrect'))\r\n          // Continue to listen to the next message\r\n          next()\r\n        }\r\n      },\r\n      ['UserId'] // Supervise the next news of the current user\r\n    )\r\n\r\n    //\r\n  },\r\n  'message.create',\r\n  /Login/\r\n)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(6540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);