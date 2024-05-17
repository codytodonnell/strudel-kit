"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[767],{4319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=n(4848),a=n(8453),i=n(4110);const o='import { SearchDataRepositoriesConfig } from "./taskflow.types";\n\nexport const taskflow: SearchDataRepositoriesConfig = {\n  data: {\n    items: {\n      /**\n       * Source of the data for the initial list of items on the main page.\n       */\n      source: "default/search-data-repositories/datasets.json",\n      /**\n       * Field name for the unique ID in the data source.\n       */\n      idField: "id"\n    }\n  },\n  pages: {\n    index: {\n      /**\n       * Title to appear at the top of the main page.\n       */\n      title: "Search Data Repositories App",\n      /**\n       * Text to appear underneath the title at the top of the main page.\n       */\n      description: "Description of this app section",\n      /**\n       * Map of card sections to property names in the data source. \n       * This determines the content of the cards on the main page.\n       */\n      cardFields: {\n        title: "title",\n        content: "summary",\n        tags: "tags"\n      },\n      /**\n       * List of filters to display on the main page and use to filter the main data cards. \n       * Each filter has a definition object to determine how it renders and functions.\n       */\n      cardFilters: [\n        {\n          /**\n           * Exact name of the property field in the data to filter on. \n           */\n          field: "category",\n          /**\n           * Text to display in the label for the filter.\n           */\n          displayName: "Category",\n          /**\n           * The kind of filter component and function to use. Must be "CheckboxList", "Slider", or "data range".\n           */\n          filterType: "CheckboxList",\n          /**\n           * Extra options to pass to the filter based on the filter type.\n           */\n          props: {\n            options: [\n              {\n                label: "Groundwater",\n                value: "Groundwater"\n              },\n              {\n                label: "Fires",\n                value: "Fires"\n              },\n              {\n                label: "Floods",\n                value: "Floods"\n              },\n              {\n                label: "Earthquakes",\n                value: "Earthquakes"\n              }\n            ]\n          }\n        },\n        {\n          field: "tags",\n          displayName: "Tags",\n          filterType: "CheckboxList",\n          props: {\n            options: [\n              {\n                label: "Boreal forest",\n                value: "Boreal forest"\n              },\n              {\n                label: "Carbon and greenhouse gas emissions",\n                value: "Carbon and greenhouse gas emissions"\n              },\n              {\n                label: "Ecology",\n                value: "Ecology"\n              }\n            ]\n          }\n        },\n        {\n          field: "publication_date",\n          displayName: "Publication Date",\n          filterType: "date range"\n        }\n      ]\n    }\n  }\n}',r={title:"Search Data Repositories"},l="Search Data Repositories",d={id:"task-flows/search-data-repositories",title:"Search Data Repositories",description:"Links",source:"@site/docs/task-flows/search-data-repositories.mdx",sourceDirName:"task-flows",slug:"/task-flows/search-data-repositories",permalink:"/strudel-kit/docs/task-flows/search-data-repositories",draft:!1,unlisted:!1,editUrl:"https://github.com/strudel-science/strudel-kit/tree/main/docs/docs/task-flows/search-data-repositories.mdx",tags:[],version:"current",frontMatter:{title:"Search Data Repositories"},sidebar:"mainSidebar",previous:{title:"Run Computation",permalink:"/strudel-kit/docs/task-flows/run-computation"},next:{title:"Overview",permalink:"/strudel-kit/docs/components/overview"}},c={},h=[{value:"Links",id:"links",level:2},{value:"Use this Task Flow",id:"use-this-task-flow",level:2},{value:"Generated Files",id:"generated-files",level:2},{value:"Pages",id:"pages",level:2},{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>[id].tsx</code>",id:"idtsx",level:4},{value:"Configuration",id:"configuration",level:2}];function p(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"search-data-repositories",children:"Search Data Repositories"}),"\n",(0,s.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://strudel.science/design-system/task-flows/search-data-repositories/",children:"Description and guidelines"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://strudel.science/strudel-kit/#/search-data-repositories",children:"Live example"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/tree/main/strudel-taskflows/src/pages/search-data-repositories",children:"Source code"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"use-this-task-flow",children:"Use this Task Flow"}),"\n",(0,s.jsx)(t.p,{children:"From the root of your app, run the following on the command line:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"strudel add-taskflow my-taskflow --template search-data-repositories\n"})}),"\n",(0,s.jsx)(t.h2,{id:"generated-files",children:"Generated Files"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"my-taskflow\n\u251c\u2500\u2500 _components\n\u2502  \u251c\u2500\u2500 DataListCard.tsx\n\u2502  \u251c\u2500\u2500 DataListPanel.tsx\n\u2502  \u251c\u2500\u2500 FiltersPanel.tsx\n\u2502  \u2514\u2500\u2500 PreviewPanel.tsx\n\u251c\u2500\u2500 _config\n\u2502  \u251c\u2500\u2500 taskflow.config.ts\n\u2502  \u2514\u2500\u2500 taskflow.types.ts\n\u251c\u2500\u2500 _context\n\u2502  \u251c\u2500\u2500 ContextProvider.tsx\n\u2502  \u2514\u2500\u2500 actions.ts\n\u251c\u2500\u2500 [id].tsx\n\u251c\u2500\u2500 _layout.tsx\n\u2514\u2500\u2500 index.tsx\n\n"})}),"\n",(0,s.jsx)(t.h2,{id:"pages",children:"Pages"}),"\n",(0,s.jsx)(t.h4,{id:"indextsx",children:(0,s.jsx)(t.code,{children:"index.tsx"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"URL Route"}),": ",(0,s.jsx)(t.code,{children:"/"}),(0,s.jsx)(t.br,{}),"\n","First page of the Search Data Repositories Task Flow. Displays a list of data cards, filters panel, and a data preview panel."]}),"\n",(0,s.jsx)(t.h4,{id:"idtsx",children:(0,s.jsx)(t.code,{children:"[id].tsx"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"URL Route"}),": ",(0,s.jsx)(t.code,{children:"/:id"}),(0,s.jsx)(t.br,{}),"\n","Data detail page of the Search Data Repositories Task Flow. When a user drills into a record from the main page, the detail page shows more data about the selected item."]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["This Task Flow can be configured from the ",(0,s.jsx)(t.code,{children:"taskflow.config.ts"})," file in the ",(0,s.jsx)(t.code,{children:"_config"})," directory of the generated template files."]}),"\n",(0,s.jsx)(i.A,{language:"ts",title:"taskflow.config.ts",children:o})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},9777:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(6540);const a={React:s,...s}}}]);