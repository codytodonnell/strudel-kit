"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[536],{7104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(4848),i=a(8453);const s={},r="Customize Your Task Flow",o={id:"guides/tutorials/basic-app-with-strudel/customize-taskflow",title:"Customize Your Task Flow",description:"Now that you have set up your initial task flow let's customize some of the content within it. In this section you will learn how to remove, add, and edit sections in a task flow page.",source:"@site/docs/guides/tutorials/basic-app-with-strudel/4-customize-taskflow.md",sourceDirName:"guides/tutorials/basic-app-with-strudel",slug:"/guides/tutorials/basic-app-with-strudel/customize-taskflow",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/customize-taskflow",draft:!1,unlisted:!1,editUrl:"https://github.com/strudel-science/strudel-kit/tree/main/docs/docs/guides/tutorials/basic-app-with-strudel/4-customize-taskflow.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"mainSidebar",previous:{title:"Add a Task Flow to Your App",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/add-taskflow"},next:{title:"Customize Your App",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/customize-app"}},l={},c=[{value:"Remove an Element",id:"remove-an-element",level:2},{value:"Edit the Preview Panel Content",id:"edit-the-preview-panel-content",level:2},{value:"Replace the Section Label",id:"replace-the-section-label",level:3},{value:"Connect your data to the preview panel using the state variable",id:"connect-your-data-to-the-preview-panel-using-the-state-variable",level:3},{value:"Add dynamic images",id:"add-dynamic-images",level:3},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"customize-your-task-flow",children:"Customize Your Task Flow"}),"\n",(0,n.jsx)(t.p,{children:"Now that you have set up your initial task flow let's customize some of the content within it. In this section you will learn how to remove, add, and edit sections in a task flow page."}),"\n",(0,n.jsx)(t.h2,{id:"remove-an-element",children:"Remove an Element"}),"\n",(0,n.jsx)(t.p,{children:"Often you won't want to use all of the page elements that come with a Task Flow. For this tutorial, you remove the \"Related Data\" table in the preview panel that displays when you click on a row. Because you don't have any nested or linked data for each planet in the table, this element isn't useful to the UI right now."}),"\n",(0,n.jsxs)(t.p,{children:["First, look inside the ",(0,n.jsx)(t.code,{children:"src/app/solar-system/"})," directory that was generated when you first added your task flow:"]}),"\n",(0,n.jsxs)(t.p,{children:["These are the files that determine how this specific Task Flow will be rendered in the UI. Some of these files reference other components that are common to the whole app, but these components are specific to the ",(0,n.jsx)(t.code,{children:"solar-system"})," Task Flow."]}),"\n",(0,n.jsxs)(t.p,{children:["For this step, open ",(0,n.jsx)(t.code,{children:"PreviewPanel.tsx"}),' because the "Related Data" table is in the preview panel.']}),"\n",(0,n.jsx)(t.p,{children:'Next, find the code that renders the "Related Data" section:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'<Box>\n  <Typography fontWeight="medium" mb={1}>Related Data</Typography>\n  <DataGrid\n    rows={relatedRows}\n    columns={relatedColumns}\n    disableRowSelectionOnClick\n    initialState={{\n      pagination: { paginationModel: { pageSize: 5 } }\n    }}\n  />\n</Box>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This section of code includes a ",(0,n.jsx)(t.code,{children:"Box"})," component to wrap around the whole section, a ",(0,n.jsx)(t.code,{children:"Typography"})," component to display the section heading, and a ",(0,n.jsx)(t.code,{children:"DataGrid"})," component to display the related data in a table."]}),"\n",(0,n.jsxs)(t.p,{children:["Delete this whole section of code, from ",(0,n.jsx)(t.code,{children:"<Box>"})," to ",(0,n.jsx)(t.code,{children:"</Box>"})," and save ",(0,n.jsx)(t.code,{children:"PreviewPanel.tsx"}),'. Refresh the Explorer page in the browser. The "Related Data" section should now be gone and the "View Details" and "Export Data" buttons should be directly below the other content.']}),"\n",(0,n.jsx)(t.h2,{id:"edit-the-preview-panel-content",children:"Edit the Preview Panel Content"}),"\n",(0,n.jsxs)(t.p,{children:["Now let's make the preview panel display more useful information. In this step, you are going to edit the property-value tables in the preview panel so that they display data from your data source: ",(0,n.jsx)(t.code,{children:"planets.csv"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["With ",(0,n.jsx)(t.code,{children:"PreviewPanel.tsx"}),' open, find the code that renders the "Property Group 1" section:']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"<Box>\n  <Typography fontWeight=\"medium\" mb={1}>Property Group 1</Typography>\n  <LabelValueTable \n    rows={[\n      { label: 'Property 1', value: 'value' },\n      { label: 'Property 2', value: 'value' },\n      { label: 'Property 3', value: 'value' },\n    ]}\n  />\n</Box>\n"})}),"\n",(0,n.jsxs)(t.p,{children:['Just like the "Related Data" section, there is a ',(0,n.jsx)(t.code,{children:"Box"})," component and a ",(0,n.jsx)(t.code,{children:"Typography"})," component but there is also a ",(0,n.jsx)(t.code,{children:"LabelValueTable"})," component. This component renders a list of properties and their values in a readable two-column format."]}),"\n",(0,n.jsx)(t.h3,{id:"replace-the-section-label",children:"Replace the Section Label"}),"\n",(0,n.jsx)(t.p,{children:'For this first section, let\'s display the physical characteristics of the planet. Replace "Property Group 1" with "Physical Characteristics".'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'<Typography fontWeight="medium" mb={1}>Physical Characteristics</Typography>\n'})}),"\n",(0,n.jsx)(t.p,{children:'Refresh your browser and make sure "Physical Characteristics" displays as the section label.'}),"\n",(0,n.jsx)(t.h3,{id:"connect-your-data-to-the-preview-panel-using-the-state-variable",children:"Connect your data to the preview panel using the state variable"}),"\n",(0,n.jsxs)(t.p,{children:["Next, you will replace the rows in the ",(0,n.jsx)(t.code,{children:"LabelValueTable"})," with data from the planet that the user has clicked. To do this, you need to access the internal ",(0,n.jsx)(t.code,{children:"state"})," of the Explorer Task Flow. The ",(0,n.jsx)(t.code,{children:"state"})," is an object that React uses to keep track of information about app. Data in the ",(0,n.jsx)(t.code,{children:"state"})," is dynamic. This means that it changes based on actions that the user takes or external events like data requests."]}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"PreviewPanel"})," component, the ",(0,n.jsx)(t.code,{children:"state"})," has already been defined near the top of the component:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const {state, dispatch} = useExploreData();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["There are other pieces here, but for now just focus on the ",(0,n.jsx)(t.code,{children:"state"})," variable. When a user clicks on a row in this task flow, the data in that row is stored in ",(0,n.jsx)(t.code,{children:"state.previewItem"}),'. Now, replace "Property 1" in the first ',(0,n.jsx)(t.code,{children:"LabelValueTable"}),' with the "Diameter" property for the selected planet:']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"<LabelValueTable \n  rows={[\n    { label: 'Diameter', value: state.previewItem['Diameter'] },\n    { label: 'Property 2', value: 'value' },\n    { label: 'Property 3', value: 'value' },\n  ]}\n/>\n"})}),"\n",(0,n.jsxs)(t.p,{children:['Here you have replaced the first label with "Diameter" and replaced the value with the value of the ',(0,n.jsx)(t.code,{children:"Diameter"}),' property from the selected row. Refresh the page and make sure your see a number next to the "Diameter" label in the preview panel. Click around to different rows. Do you see the number changing?']}),"\n",(0,n.jsx)(t.p,{children:"Add a few more dynamic rows to the table in this section:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"<LabelValueTable \n  rows={[\n    { label: 'Diameter', value: state.previewItem['Diameter'] },\n    { label: 'Mass', value: state.previewItem['Mass'] },\n    { label: 'Surface Gravity', value: state.previewItem['SurfaceGravity'] },\n  ]}\n/>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Notice that you can access properties that aren't displayed in the main table. Even though ",(0,n.jsx)(t.code,{children:"SurfaceGravity"})," wasn't defined in the main table columns, it is still part of the underlying data so it is present in the internal task flow ",(0,n.jsx)(t.code,{children:"state"}),". Also notice that the label can be any string you want, but the value must use the exact name of the property column in ",(0,n.jsx)(t.code,{children:"planets.csv"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Next, add dynamic rows to the second ",(0,n.jsx)(t.code,{children:"LabelValueTable"}),'. Replace the section label "Property Group 2" with "Orbital Characteristics" and add dynamic data points for the other columns in ',(0,n.jsx)(t.code,{children:"planets.csv"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"<Box>\n  <Typography fontWeight=\"medium\" mb={1}>Orbital Characteristics</Typography>\n  <LabelValueTable \n    rows={[\n      { label: 'Inclination', value: state.previewItem['Inclination'] },\n      { label: 'Eccentricity', value: state.previewItem['Eccentricity'] },\n      { label: 'Semi Major Axis', value: state.previewItem['Semi_majorAxis'] },\n      { label: 'Orbital Period', value: state.previewItem['OrbitalPeriod'] },\n      { label: 'Sidereal Rotation', value: state.previewItem['SiderealRotation'] },\n      { label: 'Satellites', value: state.previewItem['Satellites'] },\n    ]}\n  />\n</Box>\n"})}),"\n",(0,n.jsx)(t.p,{children:"Refresh the page and make sure you see dynamic values in both sections of the preview panel."}),"\n",(0,n.jsx)(t.p,{children:"Let's clean up the preview panel so that there's no more placeholder content. Find the placeholder subtitle section and remove it:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'// Delete this line\n<Typography variant="body2">Row description, subtitle, or helper text.</Typography>\n'})}),"\n",(0,n.jsx)(t.p,{children:'Now find the code that renders the "Preview Heading":'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'<Typography variant="h6" component="h3" flex={1}>\n  <Link component={RouterLink} to="." underline="hover">\n    Preview Heading\n  </Link>\n</Typography>\n'})}),"\n",(0,n.jsxs)(t.p,{children:['Replace "Preview Heading" with the name of the planet by accessing the ',(0,n.jsx)(t.code,{children:"Name"})," column:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'<Typography variant="h6" component="h3" flex={1}>\n  <Link component={RouterLink} to="." underline="hover">\n    {state.previewItem[\'Name\']}\n  </Link>\n</Typography>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Here you are doing the same thing you did in the ",(0,n.jsx)(t.code,{children:"LabelValueTable"})," components, except there is one small difference: the variable is wrapped with curly braces ",(0,n.jsx)(t.code,{children:"{...}"}),". This is necessary because in React, curly braces indicate that a variable or function is going to be used in the component, otherwise it would render the literal text, \"state.previewItem['Name']\". This wasn't necessary in the ",(0,n.jsx)(t.code,{children:"LabelValueTable"})," because there are already curly braces around the whole ",(0,n.jsx)(t.code,{children:"row"})," prop."]}),"\n",(0,n.jsx)(t.p,{children:"Refresh the page. You should see the planet name at the top of the preview panel."}),"\n",(0,n.jsx)(t.h3,{id:"add-dynamic-images",children:"Add dynamic images"}),"\n",(0,n.jsxs)(t.p,{children:["In this step you will add an image for each planet and display it in the preview panel. First, create a new ",(0,n.jsx)(t.code,{children:"images"})," directory inside the ",(0,n.jsx)(t.code,{children:"public/"})," directory at the top level of the app."]}),"\n",(0,n.jsxs)(t.p,{children:["Then, download the ",(0,n.jsx)(t.code,{children:"planets.zip"})," file from the strudel-kit GitHub:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/planets.zip?raw=true",children:"Click to download planets.zip from GitHub"})}),"\n",(0,n.jsx)(t.p,{children:'To download the raw zip file, click the download icon or the "Raw" button on the right side of the page.'}),"\n",(0,n.jsxs)(t.p,{children:["Double-click the ",(0,n.jsx)(t.code,{children:"planets.zip"})," file you downloaded to unpack the files, then drill into the ",(0,n.jsx)(t.code,{children:"planets"})," directory and copy the 8 files. There should be one file for each planet."]}),"\n",(0,n.jsxs)(t.p,{children:["Paste the 8 planet images into ",(0,n.jsx)(t.code,{children:"public/images"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Now you are ready to start incorporating the images into the preview panel. Open ",(0,n.jsx)(t.code,{children:"PreviewPanel.tsx"}),' and fine the "Physical Characteristics" section you edited earlier:']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"<Box>\n  <Typography fontWeight=\"medium\" mb={1}>Physical Characteristics</Typography>\n  <LabelValueTable \n    rows={[\n      { label: 'Diameter', value: state.previewItem['Diameter'] },\n      { label: 'Mass', value: state.previewItem['Mass'] },\n      { label: 'Surface Gravity', value: state.previewItem['SurfaceGravity'] },\n    ]}\n  />\n</Box>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Add an ",(0,n.jsx)(t.code,{children:"<img>"})," tag directly above this section. The ",(0,n.jsx)(t.code,{children:"img"})," tag uses the ",(0,n.jsx)(t.code,{children:"src"})," attribute to tell it which image to display. In this case, you want the image to be different depending on the row that is selected. To do that, you are going to inject the planet's name into the path to the image:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"<img src={`images/${state.previewItem['Name']}.jpg`}/>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Here you are using a JavaScript syntax called a ",(0,n.jsx)(t.em,{children:"template literal"}),". Instead of using quotes to wrap the string, you use backticks (",(0,n.jsx)(t.code,{children:"`"}),") which lets you embed dynamic content inside the string using a dollar sign and curly braces (",(0,n.jsx)(t.code,{children:"${expression}"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"Refresh your browser and check that the planet images are showing up in the preview panel when you click on a planet row."}),"\n",(0,n.jsx)(t.p,{children:"This is great but the images are looking a little too big. Let's add a uniform height to the images so that users can more easily see both the image and the characteristics data."}),"\n",(0,n.jsxs)(t.p,{children:["To do this, import the ",(0,n.jsx)(t.code,{children:"ImageWrapper"})," component below the other imports at the top of the file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { ImageWrapper } from '../../components/ImageWrapper';\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then wrap your image with the ",(0,n.jsx)(t.code,{children:"ImageWrapper"})," component and specify a height using the component's ",(0,n.jsx)(t.code,{children:"height"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"<ImageWrapper height=\"300px\">\n  <img src={`images/${state.previewItem['Name']}.jpg`} />\n</ImageWrapper>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To make sure the images are accessible, add alt text to the ",(0,n.jsx)(t.code,{children:"img"})," tag. Alt text is used by screen readers to describe images to users and it is also displayed if the image has trouble loading."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"<ImageWrapper height=\"300px\">\n  <img src={`images/${state.previewItem['Name']}.jpg`} alt={`Satellite image of ${state.previewItem['Name']}`} />\n</ImageWrapper>\n"})}),"\n",(0,n.jsx)(t.p,{children:"Refresh your page and make sure the images are smaller and all the same height."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/mid-preview-panel-2.png?raw=true",alt:"Screenshot of planet images in the preview panel"})}),"\n",(0,n.jsx)(t.p,{children:"Woohoo! You're done with task flow customizations for now."}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,n.jsx)(t.p,{children:"At this point you have a task flow that is starting to be tailored to a particular data source and use-case. In the next section you will learn how to customize the app as a whole and make it your own."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Previous"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Next"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/3-add-taskflow.md",children:"Add a Task Flow"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/5-customize-app.md",children:"Customize Your App"})})]})})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(6540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);