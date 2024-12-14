"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6408"],{20653:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>u,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>i});var n=JSON.parse('{"id":"api/themes/theme-live-codeblock","title":"\uD83D\uDCE6 theme-live-codeblock","description":"This theme provides a @theme/CodeBlock component that is powered by react-live. You can read more on interactive code editor documentation.","source":"@site/docs/api/themes/theme-live-codeblock.mdx","sourceDirName":"api/themes","slug":"/api/themes/@docusaurus/theme-live-codeblock","permalink":"/docs/api/themes/@docusaurus/theme-live-codeblock","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-live-codeblock.mdx","tags":[],"version":"current","lastUpdatedBy":"Zen","lastUpdatedAt":1734100074000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"slug":"/api/themes/@docusaurus/theme-live-codeblock"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 theme-classic","permalink":"/docs/api/themes/@docusaurus/theme-classic"},"next":{"title":"\uD83D\uDCE6 theme-search-algolia","permalink":"/docs/api/themes/@docusaurus/theme-search-algolia"}}'),a=r("24246"),o=r("80980"),l=r("46291"),s=r("67860");let i={sidebar_position:3,slug:"/api/themes/@docusaurus/theme-live-codeblock"},u="\uD83D\uDCE6 theme-live-codeblock",c={},d=[{value:"Configuration",id:"configuration",level:3}];function h(e){let t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-theme-live-codeblock",children:"\uD83D\uDCE6 theme-live-codeblock"})}),"\n",(0,a.jsxs)(t.p,{children:["This theme provides a ",(0,a.jsx)(t.code,{children:"@theme/CodeBlock"})," component that is powered by react-live. You can read more on ",(0,a.jsx)(t.a,{href:"/docs/markdown-features/code-blocks#interactive-code-editor",children:"interactive code editor"})," documentation."]}),"\n",(0,a.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-live-codeblock\n"})})}),(0,a.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/theme-live-codeblock\n"})})}),(0,a.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-live-codeblock\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: ['@docusaurus/theme-live-codeblock'],\n  themeConfig: {\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: \"top\" | \"bottom\"\n       */\n      playgroundPosition: 'bottom',\n    },\n  },\n};\n"})})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},67860:function(e,t,r){r.d(t,{Z:()=>l});var n=r("24246");r("27378");var a=r("90496");let o="tabItem_pnkT";function l(e){let{children:t,hidden:r,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r,children:t})}},46291:function(e,t,r){r.d(t,{Z:()=>k});var n=r("24246"),a=r("27378"),o=r("90496"),l=r("12451"),s=r("3620"),i=r("89637"),u=r("74417"),c=r("46918"),d=r("58247");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var p=r("8903");let f="tabList_Qoir",b="tabItem_AQgk";function v(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:i}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let t=e.currentTarget,r=i[u.indexOf(t)].value;r!==a&&(c(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t),children:i.map(e=>{let{value:t,label:r,attributes:l}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...l,className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":a===t}),children:r??t},t)})})}function g(e){let{lazy:t,children:r,selectedValue:l}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=s.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function x(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,o=function(e){let{values:t,children:r}=e;return(0,a.useMemo)(()=>{let e=t??h(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[l,p]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:o})),[f,b]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r}),l=(0,u._X)(o);return[l,(0,a.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})},[o,n])]}({queryString:r,groupId:n}),[v,g]=function(e){var t;let{groupId:r}=e;let n=(t=r)?`docusaurus.tab.${t}`:null,[o,l]=(0,d.Nk)(n);return[o,(0,a.useCallback)(e=>{if(!!n)l.set(e)},[n,l])]}({groupId:n}),x=(()=>{let e=f??v;return m({value:e,tabValues:o})?e:null})();return(0,i.Z)(()=>{x&&p(x)},[x]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);p(e),b(e),g(e)},[b,g,o]),tabValues:o}}(e);return(0,n.jsxs)("div",{className:(0,o.Z)("tabs-container",f),children:[(0,n.jsx)(v,{...t,...e}),(0,n.jsx)(g,{...t,...e})]})}function k(e){let t=(0,p.Z)();return(0,n.jsx)(x,{...e,children:h(e.children)},String(t))}},80980:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return l}});var n=r(27378);let a={},o=n.createContext(a);function l(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);