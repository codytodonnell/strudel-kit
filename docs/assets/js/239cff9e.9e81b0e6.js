"use strict";(self.webpackChunkstrudel_docs=self.webpackChunkstrudel_docs||[]).push([[604],{2485:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=t(4848),n=t(8453),o=t(4110);const l='import { MonitorActivitiesConfig } from "./taskflow.types";\n\nexport const taskflow: MonitorActivitiesConfig = {\n  data: {\n    items: {\n      /**\n       * Source of the data for the initial list of items. \n       */\n      source: "default/monitor-activities/experiments.json",\n      /**\n       * Field name for the unique ID in the data source.\n       */\n      idField: "id"\n    },\n    detail: {\n      /**\n       * Source of the data for the detail view of a single item. \n       */\n      source: "default/monitor-activities/experiment_detail.json",\n      /**\n       * Field name for the unique ID in the data source.\n       */\n      idField: "id"\n    }\n  },\n}',r={title:"Monitor Activities"},a="Monitor Activities",d={id:"task-flows/monitor-activities",title:"Monitor Activities",description:"Links",source:"@site/docs/task-flows/monitor-activities.mdx",sourceDirName:"task-flows",slug:"/task-flows/monitor-activities",permalink:"/strudel-kit/docs/task-flows/monitor-activities",draft:!1,unlisted:!1,editUrl:"https://github.com/strudel-science/strudel-kit/tree/main/docs/docs/task-flows/monitor-activities.mdx",tags:[],version:"current",frontMatter:{title:"Monitor Activities"},sidebar:"mainSidebar",previous:{title:"Explore Data",permalink:"/strudel-kit/docs/task-flows/explore-data"},next:{title:"Run Computation",permalink:"/strudel-kit/docs/task-flows/run-computation"}},c={},h=[{value:"Links",id:"links",level:2},{value:"Use this Task Flow",id:"use-this-task-flow",level:2},{value:"Generated Files",id:"generated-files",level:2},{value:"Pages",id:"pages",level:2},{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>detail.tsx</code>",id:"detailtsx",level:4},{value:"<code>calendar.tsx</code>",id:"calendartsx",level:4},{value:"Configuration",id:"configuration",level:2}];function u(e){const i={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"monitor-activities",children:"Monitor Activities"}),"\n",(0,s.jsx)(i.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://strudel.science/design-system/task-flows/monitor-activities/",children:"Description and guidelines"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://strudel.science/strudel-kit/#/monitor-activities",children:"Live example"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/strudel-science/strudel-kit/tree/main/strudel-taskflows/src/pages/monitor-activities",children:"Source code"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"use-this-task-flow",children:"Use this Task Flow"}),"\n",(0,s.jsxs)(i.p,{children:["Before continuing, make sure you have followed the instructions to ",(0,s.jsx)(i.a,{href:"/strudel-kit/docs/getting-started/installation",children:"install the strudel-cli"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"From the root of your app, run the following on the command line:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"strudel add-taskflow my-taskflow --template monitor-activities\n"})}),"\n",(0,s.jsx)(i.h2,{id:"generated-files",children:"Generated Files"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"my-taskflow\n\u251c\u2500\u2500 _config\n\u2502  \u251c\u2500\u2500 taskflow.config.ts\n\u2502  \u2514\u2500\u2500 taskflow.types.ts\n\u251c\u2500\u2500 _layout.tsx\n\u251c\u2500\u2500 calendar.tsx\n\u251c\u2500\u2500 detail.tsx\n\u2514\u2500\u2500 index.tsx\n"})}),"\n",(0,s.jsx)(i.h2,{id:"pages",children:"Pages"}),"\n",(0,s.jsx)(i.h4,{id:"indextsx",children:(0,s.jsx)(i.code,{children:"index.tsx"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"URL Route"}),": ",(0,s.jsx)(i.code,{children:"/"}),(0,s.jsx)(i.br,{}),"\n","First page of the Monitor Activities Task Flow. Displays a list of records that a user can drill into."]}),"\n",(0,s.jsx)(i.h4,{id:"detailtsx",children:(0,s.jsx)(i.code,{children:"detail.tsx"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"URL Route"}),": ",(0,s.jsx)(i.code,{children:"/detail"}),(0,s.jsx)(i.br,{}),"\n","Detail page of the Monitor Activities Task Flow. When a user drills into a record, this page displays a more data about that particular activity."]}),"\n",(0,s.jsx)(i.h4,{id:"calendartsx",children:(0,s.jsx)(i.code,{children:"calendar.tsx"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"URL Route"}),": ",(0,s.jsx)(i.code,{children:"/calendar"}),(0,s.jsx)(i.br,{}),"\n","(Work in progress) Calendar page of the Monitor Activities Task Flow. Displays all activities by date in a calendar visualization."]}),"\n",(0,s.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(i.p,{children:["This Task Flow can be configured from the ",(0,s.jsx)(i.code,{children:"taskflow.config.ts"})," file in the ",(0,s.jsx)(i.code,{children:"_config"})," directory of the generated template files."]}),"\n",(0,s.jsx)(o.A,{language:"ts",title:"taskflow.config.ts",children:l})]})}function x(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9777:(e,i,t)=>{t.d(i,{A:()=>n});var s=t(6540);const n={React:s,...s}}}]);