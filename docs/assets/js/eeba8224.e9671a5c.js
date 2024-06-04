"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[486],{9319:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=s(4848),a=s(8453);const r={slug:"create-app"},o="Create a Base App",i={id:"guides/tutorials/basic-app-with-strudel/create-app",title:"Create a Base App",description:"We will now start to create your first STRUDEL app using the strudel-cli you installed in the previous step. The strudel command has several sub-commands to do different tasks; to create an app named planets-app use the create-app sub-command like this:",source:"@site/docs/guides/tutorials/basic-app-with-strudel/2-create-app.md",sourceDirName:"guides/tutorials/basic-app-with-strudel",slug:"/guides/tutorials/basic-app-with-strudel/create-app",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/create-app",draft:!1,unlisted:!1,editUrl:"https://github.com/strudel-science/strudel-kit/tree/main/docs/docs/guides/tutorials/basic-app-with-strudel/2-create-app.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"create-app"},sidebar:"mainSidebar",previous:{title:"Setup",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/setup"},next:{title:"Add a Task Flow to Your App",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/add-taskflow"}},p={},l=[{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-a-base-app",children:"Create a Base App"}),"\n",(0,n.jsxs)(t.p,{children:["We will now start to create your first STRUDEL app using the strudel-cli you installed in the previous step. The ",(0,n.jsx)(t.code,{children:"strudel"})," command has several sub-commands to do different tasks; to create an app named ",(0,n.jsx)(t.em,{children:"planets-app"})," use the ",(0,n.jsx)(t.code,{children:"create-app"})," sub-command like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"strudel create-app planets-app\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The command should give the message ",(0,n.jsx)(t.code,{children:"Successfully created your strudel app!"})," and provide some additional hints on next steps (which are not shown here). This will also generate a new directory called ",(0,n.jsx)(t.code,{children:"planets-app"})," with all of the base app files in it."]}),"\n",(0,n.jsxs)(t.p,{children:["Here is a breakdown of all the files generated by ",(0,n.jsx)(t.code,{children:"create-app"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-py",children:"planets-app\n\u251c\u2500\u2500 public\n\u251c\u2500\u2500 src\n\u2502  \u251c\u2500\u2500 components # Components that are shared across the app\n\u2502  \u251c\u2500\u2500 context # State variables and actions shared across the app\n\u2502  \u251c\u2500\u2500 pages # Task Flows and pages that are automatically registered to the app router\n\u2502  \u2502  \u251c\u2500\u2500 playground\n\u2502  \u2502  \u2502  \u2514\u2500\u2500 index.tsx # Playground component for testing code\n\u2502  \u2502  \u2514\u2500\u2500 index.tsx # Home page component\n\u2502  \u251c\u2500\u2500 types # TypeScript definitions used across the app\n\u2502  \u251c\u2500\u2500 utils # Utility functions and hooks used across the app\n\u2502  \u251c\u2500\u2500 App.tsx # Top-level app component\n\u2502  \u251c\u2500\u2500 declarations.d.ts\n\u2502  \u251c\u2500\u2500 index.css # Base CSS styles\n\u2502  \u251c\u2500\u2500 main.tsx # App entry point\n\u2502  \u251c\u2500\u2500 router.ts # Auto-generated routes\n\u2502  \u251c\u2500\u2500 theme.tsx # Full theme configuration\n\u2502  \u2514\u2500\u2500 vite-env.d.ts\n\u251c\u2500\u2500 .eslintrc.cjs\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 strudel.config.ts # Base strudel configuration file\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 tsconfig.node.json\n\u2514\u2500\u2500 vite.config.ts\n"})}),"\n",(0,n.jsxs)(t.p,{children:["At this point your planets-app is ready to run. First ",(0,n.jsx)(t.strong,{children:"open up a separate terminal window"})," then navigate to the generated ",(0,n.jsx)(t.code,{children:"planets-app"})," directory and use the Node Package Manager (npm) that you installed earlier to install the dependencies needed by your app."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"cd planets-app\nnpm install\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will produce a fair amount of output as the NPM tool fetches and installs all the JavaScript dependencies that STRUDEL uses. It will print out some warnings about deprecated packages and security vulnerabilities. This is normal. For a real-world deployment, you would need to look at these warnings and vulnerabilities more closely, but you can safely ignore them for now."}),"\n",(0,n.jsx)(t.p,{children:"Assuming you didn't get any errors in the  step above, you can now run your app from the same directory:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"npm start\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will start up a local server to run your application from the browser. Once it finishes running, you should be able to open the home page (",(0,n.jsx)(t.code,{children:"src/pages/index.tsx"}),") of your app by opening a browser and navigating to ",(0,n.jsx)(t.a,{href:"http://localhost:5174/",children:"http://localhost:5174/"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Screenshot of home page in a browser",src:s(9415).A+"",width:"2558",height:"1440"})}),"\n",(0,n.jsxs)(t.p,{children:["In the future, when you run your app, you will not need to perform the install step -- just ",(0,n.jsx)(t.code,{children:"npm start"}),'. In fact, the development server that this runs is able to update the app "live" as you change the code in this directory, so you don\'t need to stop and restart the app for each change.']}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,n.jsx)(t.p,{children:"Next you will learn how to add your first task flow to the app."})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9415:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/start-home-page-2cda6138145ec1453472174634303c43.png"},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(6540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);