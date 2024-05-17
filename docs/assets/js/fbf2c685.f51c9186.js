"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[993],{4653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(4848),s=n(8453);const i={title:"Overview"},a="Task Flows",r={id:"task-flows/overview",title:"Overview",description:"Task Flow templates in STRUDEL Kit are UI flows built out as React components that plug directly into your base app. They are based on the Task Flows in the STRUDEL Design System which offer user-friendly methods for implementing common patterns seen in scientific and data-intensive UIs. Task Flow templates can be generated using the strudel-cli and the add-taskflow command.",source:"@site/docs/task-flows/overview.mdx",sourceDirName:"task-flows",slug:"/task-flows/overview",permalink:"/strudel-kit/docs/task-flows/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/strudel-science/strudel-kit/tree/main/docs/docs/task-flows/overview.mdx",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"mainSidebar",previous:{title:"Set Up Your Development Environment",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/setup"},next:{title:"Compare Data",permalink:"/strudel-kit/docs/task-flows/compare-data"}},l={},c=[{value:"Confguration file",id:"confguration-file",level:2},{value:"Page components",id:"page-components",level:2},{value:"Layout components",id:"layout-components",level:2},{value:"Inner page components",id:"inner-page-components",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"task-flows",children:"Task Flows"}),"\n",(0,o.jsxs)(t.p,{children:["Task Flow templates in STRUDEL Kit are UI flows built out as React components that plug directly into your base app. They are based on the ",(0,o.jsx)(t.a,{href:"https://strudel.science/design-system/task-flows/overview/",children:"Task Flows in the STRUDEL Design System"})," which offer user-friendly methods for implementing common patterns seen in scientific and data-intensive UIs. Task Flow templates can be generated using the strudel-cli and the ",(0,o.jsx)(t.code,{children:"add-taskflow"})," command."]}),"\n",(0,o.jsx)(t.p,{children:"Every Task Flow template consists of four main pieces:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Confguration file"}),"\n",(0,o.jsx)(t.li,{children:"Page components"}),"\n",(0,o.jsx)(t.li,{children:"Layout components"}),"\n",(0,o.jsx)(t.li,{children:"Inner page components"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"confguration-file",children:"Confguration file"}),"\n",(0,o.jsxs)(t.p,{children:["Every Task Flow template has a ",(0,o.jsx)(t.code,{children:"taskflow.config.ts"})," file inside its ",(0,o.jsx)(t.code,{children:"_config"})," directory. This file contains the ",(0,o.jsx)(t.code,{children:"taskflow"})," object which contains all of the configurable properties for that particular Task Flow. The values supplied in the config determine how different parts of the UI are rendered. In some cases this is simple like rendering a page title but in other cases it is more complex like rendering columns or filters. Each Task Flow has its own unique configuration but they all follow very similar patterns. Be sure to check out the Task Flow page for the particular template you are using to see the details for how to configure that UI."]}),"\n",(0,o.jsx)(t.h2,{id:"page-components",children:"Page components"}),"\n",(0,o.jsxs)(t.p,{children:["A Task Flow template is made up of a series of pages that are built out as React components. Any file that is not prefixed by an underscore (",(0,o.jsx)(t.code,{children:"_"}),") or nested in a directory that is prefixed with an underscore is a page. The name of the file maps directly to the name of the path in the URL to render that page. Note that the URL path includes the full path starting from the ",(0,o.jsx)(t.code,{children:"pages"})," directory. So a the file ",(0,o.jsx)(t.code,{children:"/src/pages/my-taskflow/new.tsx"})," will be accessible at the URL route ",(0,o.jsx)(t.code,{children:"/my-taskflow/new"}),". STRUDEL Kit uses the Generouted library to autogenerate routes based on the file structure. Check out their ",(0,o.jsx)(t.a,{href:"https://github.com/oedotme/generouted?tab=readme-ov-file#conventions",children:"documentation"})," to understand all the conventions around file naming and page routing."]}),"\n",(0,o.jsx)(t.h2,{id:"layout-components",children:"Layout components"}),"\n",(0,o.jsxs)(t.p,{children:["Most Task Flow templates have at least one ",(0,o.jsx)(t.code,{children:"_layout.tsx"})," file. These files are wrapper components that wrap around all of the pages in their current level of nesting or lower. These are used for layout elements that are common to multiple pages in a Task Flow like navigation or header elements."]}),"\n",(0,o.jsx)(t.h2,{id:"inner-page-components",children:"Inner page components"}),"\n",(0,o.jsxs)(t.p,{children:["On top of their page components, most Task Flows also have inner page components that separated into their own files. These are housed in the ",(0,o.jsx)(t.code,{children:"_components"})," directory and are used within page components."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);