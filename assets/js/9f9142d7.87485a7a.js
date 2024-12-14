"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["15754"],{805:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/social-card-99fd18bd61fee0f631b8c820ef873dd5.png"},9864:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/crawler-overview-6224cc4c7b20511010652f3f4ed5904e.png"},30569:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/editor-823e50dbed8e508bd5a69c708bab8928.png"},49915:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/index-analytics-f9c27da3900de6206e949736b1cd8101.png"},47248:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/index-overview-ca216346e6eee6881443644b6d7d8fe8.png"},22:function(e,i,a){a.r(i),a.d(i,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return n},toc:function(){return l}});var n=a(47575),t=a(24246),r=a(80980);let o={title:"DocSearch migration",authors:["shortcuts","slorber"],tags:["search"],image:"./img/social-card.png"},s=void 0,c={image:a(805).Z,authorsImageUrls:[void 0,void 0]},l=[{value:"Upgrading your Docusaurus site",id:"upgrading-your-docusaurus-site",level:2},{value:"DocSearch has a new home!",id:"docsearch-has-a-new-home",level:2},{value:"What is DocSearch?",id:"what-is-docsearch",level:3},{value:"What is this migration about?",id:"what-is-this-migration-about",level:2},{value:"Motivation",id:"motivation",level:3},{value:"What&#39;s new?",id:"whats-new",level:3},{value:"FAQ",id:"faq",level:2},{value:"I&#39;m using Docusaurus and DocSearch, can I migrate?",id:"im-using-docusaurus-and-docsearch-can-i-migrate",level:3},{value:"Where can I read more about this?",id:"where-can-i-read-more-about-this",level:3},{value:"I received the migration email but the invite expired",id:"i-received-the-migration-email-but-the-invite-expired",level:3},{value:"I have feedback!",id:"i-have-feedback",level:3},{value:"Can I still run my own DocSearch instance?",id:"can-i-still-run-my-own-docsearch-instance",level:3}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://docsearch.algolia.com/",children:"DocSearch"})," is migrating to a new, more powerful system, which gives users their own Algolia application and new credentials."]}),"\n",(0,t.jsxs)(i.p,{children:["Docusaurus site owners should upgrade their configuration with their new credentials ",(0,t.jsx)(i.strong,{children:"by February 1, 2022"}),", existing search indexes will be frozen and become read-only after this date."]}),"\n",(0,t.jsx)(i.h2,{id:"upgrading-your-docusaurus-site",children:"Upgrading your Docusaurus site"}),"\n",(0,t.jsx)(i.p,{children:"In the next few weeks, Docusaurus site owners will receive an email inviting them to join their personal Algolia application."}),"\n",(0,t.jsxs)(i.p,{children:["This email will include a new ",(0,t.jsx)(i.code,{children:"appId"})," and ",(0,t.jsx)(i.code,{children:"apiKey"})," to use in your Docusaurus configuration."]}),"\n",(0,t.jsx)(i.p,{children:"The only things you have to do:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Join the Algolia application (eventually creating a new Algolia account)"}),"\n",(0,t.jsx)(i.li,{children:"Update your site configuration."}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"const config = {\n  themeConfig: {\n    algolia: {\n      // highlight-start\n      appId: '<NEW_APP_ID>',\n      apiKey: '<NEW_SEARCH_API_KEY>',\n      // highlight-end\n    },\n  },\n};\n\nmodule.exports = config;\n"})}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"appId"})," is now ",(0,t.jsx)(i.strong,{children:"required"}),"."]}),(0,t.jsx)(i.p,{children:"These keys are not secrets and can be added to your Git repository."})]}),"\n",(0,t.jsx)(i.h2,{id:"docsearch-has-a-new-home",children:"DocSearch has a new home!"}),"\n",(0,t.jsx)(i.h3,{id:"what-is-docsearch",children:"What is DocSearch?"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://docsearch.algolia.com/",children:"DocSearch"})," is a program created by ",(0,t.jsx)(i.a,{href:"http://algolia.com/",children:"Algolia"}),", which offers search to technical documentation of Open Source projects and technical blogs ",(0,t.jsx)(i.strong,{children:"for free"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["You can ",(0,t.jsx)(i.a,{href:"https://docsearch.algolia.com/docs/what-is-docsearch/",children:"read more here"}),", and ",(0,t.jsx)(i.a,{href:"https://docsearch.algolia.com/apply",children:"apply"})," if you'd like to give it a try!"]}),"\n",(0,t.jsx)(i.h2,{id:"what-is-this-migration-about",children:"What is this migration about?"}),"\n",(0,t.jsx)(i.h3,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsxs)(i.p,{children:["With the upcoming stable release of ",(0,t.jsx)(i.a,{href:"https://docsearch.algolia.com/docs/DocSearch-v3",children:"DocSearch UI"}),", we wanted to go further and provide better tooling for our users to improve their search, but also leverage the full potential of Algolia."]}),"\n",(0,t.jsx)(i.h3,{id:"whats-new",children:"What's new?"}),"\n",(0,t.jsxs)(i.p,{children:["DocSearch now leverages the ",(0,t.jsx)(i.a,{href:"https://www.algolia.com/products/search-and-discovery/crawler/",children:"Algolia Crawler"}),", which includes a web interface that will allow you to:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Start, schedule and monitor your crawls"}),"\n",(0,t.jsx)(i.li,{children:"Edit your config file from a live editor"}),"\n",(0,t.jsx)(i.li,{children:"Test your results with DocSearch v3"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"The Algolia crawler front page showing the project&#39;s overview, such as last complete crawl and indices",src:a(9864).Z+"",width:"3832",height:"1882"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"The Algolia config editor opened to the docusaurus-2 config. The right pane shows the results for index and various facet filters.",src:a(30569).Z+"",width:"3832",height:"1880"})}),"\n",(0,t.jsxs)(i.p,{children:["But also, more Algolia features in ",(0,t.jsx)(i.strong,{children:"your own Algolia app"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Team management"}),"\n",(0,t.jsx)(i.li,{children:"Browse and see how your records are indexed in Algolia"}),"\n",(0,t.jsx)(i.li,{children:"Try other Algolia features with free trials"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"The Algolia index overview page, showing various filters and the details of every single index",src:a(47248).Z+"",width:"3834",height:"1882"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"The Algolia index analytics page, showing trends for total users, total searches, etc.",src:a(49915).Z+"",width:"3810",height:"1876"})}),"\n",(0,t.jsxs)(i.p,{children:["And of course, ",(0,t.jsx)(i.strong,{children:"a lot more, for free"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(i.h3,{id:"im-using-docusaurus-and-docsearch-can-i-migrate",children:"I'm using Docusaurus and DocSearch, can I migrate?"}),"\n",(0,t.jsx)(i.p,{children:"At the time we are writing this, we are still at an early stage of the migration. We are doing small batches every week but will increase the load shortly, so please be patient and keep an eye out in your mailbox, you'll be contacted as soon as your Algolia app is ready!"}),"\n",(0,t.jsx)(i.h3,{id:"where-can-i-read-more-about-this",children:"Where can I read more about this?"}),"\n",(0,t.jsxs)(i.p,{children:["We wrote a small ",(0,t.jsx)(i.a,{href:"https://docsearch.algolia.com/docs/migrating-from-legacy",children:"migration guide"})," but you'll have more detailed information in the migration email."]}),"\n",(0,t.jsx)(i.h3,{id:"i-received-the-migration-email-but-the-invite-expired",children:"I received the migration email but the invite expired"}),"\n",(0,t.jsxs)(i.p,{children:["Please contact us via either ",(0,t.jsx)(i.a,{href:"mailto:docsearch@algolia.com",children:"email"})," or ",(0,t.jsx)(i.a,{href:"https://discord.gg/bRTacwYrfX",children:"DocSearch's Discord"})," or on ",(0,t.jsx)(i.a,{href:"https://discordapp.com/invite/docusaurus",children:"Docusaurus's Discord #algolia channel"})]}),"\n",(0,t.jsx)(i.h3,{id:"i-have-feedback",children:"I have feedback!"}),"\n",(0,t.jsxs)(i.p,{children:["For any feedback regarding our documentation or the DocSearch UI component, you can open an issue ",(0,t.jsx)(i.a,{href:"https://github.com/algolia/docsearch/issues",children:"on our GitHub repository"}),", but also contact us via the methods above."]}),"\n",(0,t.jsx)(i.h3,{id:"can-i-still-run-my-own-docsearch-instance",children:"Can I still run my own DocSearch instance?"}),"\n",(0,t.jsxs)(i.p,{children:["In favor of the new infrastructure and DocSearch v3, we will no longer maintain our beloved ",(0,t.jsx)(i.a,{href:"https://github.com/algolia/docsearch-scraper",children:"DocSearch scraper"})," and ",(0,t.jsx)(i.a,{href:"https://github.com/algolia/docsearch/tree/master",children:"DocSearch v2"}),", but the repositories will still be available and open to pull requests."]}),"\n",(0,t.jsxs)(i.p,{children:["The previous documentation (now called ",(0,t.jsx)(i.code,{children:"legacy"}),") remains available as well as our ",(0,t.jsx)(i.a,{href:"https://docsearch.algolia.com/docs/legacy/run-your-own",children:(0,t.jsx)(i.code,{children:"run your own"})})," guide."]})]})}function d(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},80980:function(e,i,a){a.d(i,{Z:function(){return s},a:function(){return o}});var n=a(27378);let t={},r=n.createContext(t);function o(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:i},e.children)}},47575:function(e){e.exports=JSON.parse('{"permalink":"/blog/2021/11/21/algolia-docsearch-migration","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2021/11-21-algolia-docsearch-migration/index.mdx","source":"@site/blog/2021/11-21-algolia-docsearch-migration/index.mdx","title":"DocSearch migration","description":"DocSearch is migrating to a new, more powerful system, which gives users their own Algolia application and new credentials.","date":"2021-11-21T00:00:00.000Z","tags":[{"inline":false,"label":"Search","permalink":"/blog/tags/search"}],"readingTime":2.96,"hasTruncateMarker":true,"authors":[{"name":"Cl\xe9ment Vannicatte","title":"Software Engineer @ Algolia","url":"https://github.com/shortcuts","socials":{"x":"https://x.com/sh0rtcts","github":"https://github.com/shortcuts"},"imageURL":"https://github.com/shortcuts.png","key":"shortcuts","page":null},{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.\\n","socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"DocSearch migration","authors":["shortcuts","slorber"],"tags":["search"],"image":"./img/social-card.png"},"unlisted":false,"lastUpdatedAt":1734100074000,"lastUpdatedBy":"Zen","prevItem":{"title":"Docusaurus 2021 Recap","permalink":"/blog/2022/01/24/docusaurus-2021-recap"},"nextItem":{"title":"Announcing Docusaurus 2 Beta","permalink":"/blog/2021/05/12/announcing-docusaurus-two-beta"}}')}}]);