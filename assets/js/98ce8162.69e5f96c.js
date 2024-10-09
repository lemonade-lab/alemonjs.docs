"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[325],{3241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),a=t(8453),l=t(1470),s=t(9365);const i={sidebar_position:3,show_giscus:1},o="\u5feb\u901f\u5f00\u59cb",c={id:"start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u66f4\u591a\u8be6\u7ec6\u63a8\u8350\u524d\u5f80\u73af\u5883\u751f\u6001\u67e5\u770b\u5bf9\u5e94\u5185\u5bb9",source:"@site/docs/start.md",sourceDirName:".",slug:"/start",permalink:"/docs/start",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/alemonjs-docs/docs/start.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,show_giscus:1},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7f6e\u6761\u4ef6",permalink:"/docs/environment"},next:{title:"\u6838\u5fc3\u8bbe\u8ba1",permalink:"/docs/category/\u6838\u5fc3\u8bbe\u8ba1"}},u={},d=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u914d\u7f6e\u73af\u5883",id:"\u914d\u7f6e\u73af\u5883",level:3},{value:"\u5b89\u88c5\u6846\u67b6",id:"\u5b89\u88c5\u6846\u67b6",level:3},{value:"\u521b\u5efa\u6587\u4ef6",id:"\u521b\u5efa\u6587\u4ef6",level:3},{value:"\u5e73\u53f0",id:"\u5e73\u53f0",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"PM2",id:"pm2",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-1",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"})}),"\n",(0,r.jsxs)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/intro",children:"\u66f4\u591a\u8be6\u7ec6\u63a8\u8350\u524d\u5f80\u73af\u5883\u751f\u6001\u67e5\u770b\u5bf9\u5e94\u5185\u5bb9"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/environment",children:"\u5982\u679c\u672a\u8fdb\u884c\u73af\u5883\u90e8\u7f72\uff0c\u8bf7\u8fdb\u884c\u73af\u5883\u51c6\u5907\u5de5\u4f5c"})})]}),"\n","\n",(0,r.jsx)(n.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="\u56fd\u5185\u955c\u50cf\uff0c\u5df2\u5b89\u88c5\u53ef\u5ffd\u89c6"',children:"npm config set registry https://registry.npmmirror.com\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="\u6587\u6863\u7edf\u4e00\u91c7\u7528yarn\u4f9d\u8d56\u5de5\u5177"',children:"npm install yarn@1.19.1 -g\nyarn install\n"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"start-a",label:"\u5feb\u901f\u5f00\u59cb",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="\u521b\u5efa\u6a21\u7248"',children:"npm create alemonjs\ncd alemonb\n"})})}),(0,r.jsxs)(s.A,{value:"start-b",label:"\u91cd\u65b0\u5f00\u59cb",default:!0,children:[(0,r.jsx)(n.h3,{id:"\u914d\u7f6e\u73af\u5883",children:"\u914d\u7f6e\u73af\u5883"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="./tsconfig.json"',children:'{\n  "include": ["src/**/*"],\n  "extends": "alemonjs/tsconfig.json"\n}\n'})}),(0,r.jsx)(n.h3,{id:"\u5b89\u88c5\u6846\u67b6",children:"\u5b89\u88c5\u6846\u67b6"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:'title="\u6dfb\u52a0"',children:"yarn add alemonjs@2 -W\n"})}),(0,r.jsx)(n.h3,{id:"\u521b\u5efa\u6587\u4ef6",children:"\u521b\u5efa\u6587\u4ef6"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="./src/index.ts"',children:"import { defineChildren } from 'alemonjs'\nexport default defineChildren(() => {\n  return {\n    onCreated() {\n      console.log('onCreated')\n    }\n  }\n})\n"})}),(0,r.jsx)(n.h2,{id:"\u5e73\u53f0",children:"\u5e73\u53f0"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'tiitle="\u5b89\u88c5kook"',children:"yarn add @alemonjs/kook\n"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u767b\u5f55\u5e73\u53f0\uff0c\u9700\u8981\u589e\u52a0\u5bf9\u5e94\u5e73\u53f0\u7684\u5173\u8054\u5305"}),"\n"]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="\u5f00\u53d1\u6a21\u5f0f\u542f\u52a8"',children:'npx alemonjs dev --login "kook" --token "xxxx"\n'})}),"\n",(0,r.jsx)(n.p,{children:"--login \u9009\u62e9kook\u5e73\u53f0"}),"\n",(0,r.jsx)(n.p,{children:"--token \u5373KOOK\u767b\u5f55\u9700\u8981\u7684 token"}),"\n",(0,r.jsxs)(n.p,{children:["--input \u9ed8\u8ba4",(0,r.jsx)(n.code,{children:"./src/index.ts"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="lemon.config.yaml"',children:"kook:\n  token: 'xxxx'\n  master_id:\n    - '123456'\n    - '654321'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7f16\u8bd1",children:"\u7f16\u8bd1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'titile="\u7f16\u8bd1\u6a21\u5f0f\u8fd0\u884c"',children:"npx alemonjs build\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\u76ee\u5f55 lib"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pm2",children:"PM2"}),"\n",(0,r.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn add pm2 -D\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="alemon.config.yaml"',children:"pm2:\n  name: 'kook'\n  # \u751f\u4ea7\u6a21\u5f0f\uff0c\u5165\u53e3\u53ef\u9009\u62e9\u53ea\u5411\u6253\u5305\u751f\u4ea7\u540e\u7684\u6587\u4ef6\n  script: 'alemonjs start --input ./lib/index.js --login kook'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e-1",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"pm2.config.cjs"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="pm2.config.cjs"',children:"const fs = require('fs')\nconst yaml = require('yaml')\nconst data = fs.readFileSync('./alemon.config.yaml', 'utf8')\nconst config = yaml.parse(data)\nconst app = config?.pm2 ?? {}\n/**\n * @type {{ apps: import(\"pm2\").StartOptions[] }}\n */\nmodule.exports = {\n  apps: [\n    {\n      ...app,\n      env: {\n        // \u786e\u4fdd\u662f\u751f\u4ea7\u73af\u5883\n        NODE_ENV: 'production',\n        ...(app?.env ?? {})\n      }\n    }\n  ]\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# start\nnpx pm2 startOrRestart pm2.config.cjs\n# stop\nnpx pm2 stop pm2.config.cjs\n# delete\nnpx pm2 delete pm2.config.cjs\n# kill\nnpx pm2 kill\n# logs\nnpx pm2 logs\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var l=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),a=t(4164),l=t(3104),s=t(6347),i=t(205),o=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:t,groupId:a}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),f=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function k(e){const n=(0,g.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);