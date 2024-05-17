"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[878],{5983:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=n(4848),r=n(8453),a=n(9758),i=n(5926);const o={},l=void 0,p={id:"components/LinearMeter",title:"LinearMeter",description:"{componentsJson./lib/components/${metadata.title}.tsx['description']}",source:"@site/docs/components/LinearMeter.mdx",sourceDirName:"components",slug:"/components/LinearMeter",permalink:"/strudel-kit/docs/components/LinearMeter",draft:!1,unlisted:!1,editUrl:"https://github.com/strudel-science/strudel-kit/tree/main/docs/docs/components/LinearMeter.mdx",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"LabelValueTable",permalink:"/strudel-kit/docs/components/LabelValueTable"},next:{title:"strudel",permalink:"/strudel-kit/docs/cli/reference"}},d={},c=[{value:"Import",id:"import",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Props",id:"props",level:2}];function m(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[a[`./lib/components/${p.title}.tsx`][0].description,"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.h2,{id:"import",children:"Import"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:"import { LinearMeter } from 'strudel-components'\n"})}),"\n",(0,t.jsx)(s.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsx)(s.p,{children:"Coming soon!"}),"\n","\n",(0,t.jsx)(s.h2,{id:"props",children:"Props"}),"\n",(0,t.jsx)(i.X,{propsData:a[`./lib/components/${p.title}.tsx`][0].props||{}})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},5926:(e,s,n)=>{n.d(s,{X:()=>l});n(6540);var t=n(3881),r=n(8933),a=n(3231),i=n(6780),o=n(4848);const l=e=>{let{propsData:s}=e;return(0,o.jsx)(t.A,{size:"small","aria-label":"label value table",sx:{color:"white"},children:(0,o.jsxs)(r.A,{children:[(0,o.jsxs)(a.A,{children:[(0,o.jsx)(i.A,{children:"Name"}),(0,o.jsx)(i.A,{children:"Description"}),(0,o.jsx)(i.A,{children:"Type"}),(0,o.jsx)(i.A,{children:"Required"})]}),Object.keys(s).map(((e,n)=>(0,o.jsxs)(a.A,{children:[(0,o.jsx)(i.A,{children:e}),(0,o.jsx)(i.A,{children:s[e].description}),(0,o.jsx)(i.A,{children:s[e].tsType.name}),(0,o.jsx)(i.A,{children:JSON.stringify(s[e].required)})]},`${e}-${n}`)))]})})}},9758:e=>{e.exports=JSON.parse('{"./lib/components/AppLink.tsx":[{"description":"Link component for in-app links.\\nWrapper for the MUI Link component with the \\nreact-router Link injected as the component so \\nthat in-app links work.","methods":[],"displayName":"AppLink","props":{"to":{"required":true,"tsType":{"name":"To"},"description":""}},"composes":["LinkProps"]}],"./lib/components/Collapsible.tsx":[{"description":"","methods":[],"displayName":"Collapsible","props":{"color":{"required":false,"tsType":{"name":"string"},"description":""},"label":{"required":true,"tsType":{"name":"ReactNode"},"description":""},"isOpen":{"required":false,"tsType":{"name":"boolean"},"description":"","defaultValue":{"value":"false","computed":false}}},"composes":["StackProps"]}],"./lib/components/CheckboxList.tsx":[{"description":"","methods":[],"displayName":"CheckboxList","props":{"options":{"required":false,"tsType":{"name":"Array","elements":[{"name":"CheckboxOption"}],"raw":"CheckboxOption[]"},"description":"","defaultValue":{"value":"[]","computed":false}},"onChange":{"required":false,"tsType":{"name":"signature","type":"function","raw":"(values: CheckboxOptionValue[] | null) => any","signature":{"arguments":[{"type":{"name":"union","raw":"CheckboxOptionValue[] | null","elements":[{"name":"Array","elements":[{"name":"union","raw":"string | number","elements":[{"name":"string"},{"name":"number"}]}],"raw":"CheckboxOptionValue[]"},{"name":"null"}]},"name":"values"}],"return":{"name":"any"}}},"description":""}},"composes":["Omit"]}],"./lib/components/FilterGroup.tsx":[{"description":"","methods":[],"displayName":"FilterGroup","props":{"color":{"required":false,"tsType":{"name":"string"},"description":""},"label":{"required":true,"tsType":{"name":"ReactNode"},"description":""},"isOpen":{"required":false,"tsType":{"name":"boolean"},"description":""},"isCollapsible":{"required":false,"tsType":{"name":"boolean"},"description":""}},"composes":["StackProps"]}],"./lib/components/FiltersPanel.tsx":[{"description":"","methods":[],"displayName":"Filters","props":{"filters":{"required":false,"tsType":{"name":"Array","elements":[{"name":"Filter"}],"raw":"Filter[]"},"description":""},"onChange":{"required":false,"tsType":{"name":"signature","type":"function","raw":"() => any","signature":{"arguments":[],"return":{"name":"any"}}},"description":""},"onClose":{"required":false,"tsType":{"name":"signature","type":"function","raw":"() => any","signature":{"arguments":[],"return":{"name":"any"}}},"description":""}},"composes":["StackProps"]}],"./lib/components/Filters.tsx":[{"description":"","methods":[],"displayName":"Filters","props":{"onClose":{"required":false,"tsType":{"name":"signature","type":"function","raw":"() => any","signature":{"arguments":[],"return":{"name":"any"}}},"description":""}},"composes":["PaperProps"]}],"./lib/components/LabelValueTable copy.tsx":[{"description":"Component for displaying a flat list of label-value pairs\\nin a two column table.","methods":[],"displayName":"LabelValueTable","props":{"rows":{"required":false,"tsType":{"name":"Array","elements":[{"name":"LabelValuePair"}],"raw":"LabelValuePair[]"},"description":""},"labelWidth":{"required":false,"tsType":{"name":"number"},"description":"","defaultValue":{"value":"150","computed":false}}},"composes":["TableProps"]}],"./lib/components/FilterField.tsx":[{"description":"","methods":[],"displayName":"FilterField","props":{"label":{"required":true,"tsType":{"name":"ReactNode"},"description":""},"filter":{"required":true,"tsType":{"name":"ReactNode"},"description":""},"isCollapsible":{"required":false,"tsType":{"name":"boolean"},"description":""}},"composes":["StackProps"]}],"./lib/components/ImageWrapper.tsx":[{"description":"Generic image wrapper component for sizing images relatively\\nbased on container sizes. Provide either a height or width and \\nthe image will size to that value and maintain its aspect ratio.","methods":[],"displayName":"ImageWrapper","props":{"height":{"required":false,"tsType":{"name":"union","raw":"string | number","elements":[{"name":"string"},{"name":"number"}]},"description":""},"width":{"required":false,"tsType":{"name":"union","raw":"string | number","elements":[{"name":"string"},{"name":"number"}]},"description":""}},"composes":["BoxProps"]}],"./lib/components/LinearMeter.tsx":[{"description":"Styled version of the LinearProgress mui component that can be \\nused to show one-dimensional data in a horizontal meter.","methods":[],"displayName":"LinearMeter"}],"./lib/components/PageHeader.tsx":[{"description":"","methods":[],"displayName":"PageHeader","props":{"pageTitle":{"required":true,"tsType":{"name":"string"},"description":""},"breadcrumbTitle":{"required":false,"tsType":{"name":"string"},"description":""},"description":{"required":false,"tsType":{"name":"string"},"description":""},"actions":{"required":false,"tsType":{"name":"ReactReactNode","raw":"React.ReactNode"},"description":""}},"composes":["PaperProps"]}],"./lib/components/TopBar.tsx":[{"description":"Top navigation bar component","methods":[],"displayName":"TopBar"}],"./lib/components/StrudelSlider.tsx":[{"description":"Custom wrapper for the MUI Slider component.\\nEnables advanced features such as value debounce.","methods":[],"displayName":"StrudelSlider","props":{"min":{"defaultValue":{"value":"0","computed":false},"required":false},"max":{"defaultValue":{"value":"100","computed":false},"required":false}},"composes":["SliderProps"]}],"./lib/components/Test.tsx":[{"description":"","methods":[],"displayName":"Test"}],"./lib/components/LabelValueTable.tsx":[{"description":"Component for displaying a flat list of label-value pairs\\nin a two column table.","methods":[],"displayName":"LabelValueTable","props":{"rows":{"required":false,"tsType":{"name":"Array","elements":[{"name":"LabelValuePair"}],"raw":"LabelValuePair[]"},"description":""},"labelWidth":{"required":false,"tsType":{"name":"number"},"description":"","defaultValue":{"value":"150","computed":false}}},"composes":["TableProps"]}]}')}}]);