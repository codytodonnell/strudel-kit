"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[486],{9319:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=s(4848),a=s(8453);const r={slug:"create-app"},o="Create a Base App",i={id:"guides/tutorials/basic-app-with-strudel/create-app",title:"Create a Base App",description:"We will now start to create your first STRUDEL app using the strudel-cli you installed in the previous step. The strudel command has several sub-commands to do different tasks; to create an app named planets-app use the create-app sub-command like this:",source:"@site/docs/guides/tutorials/basic-app-with-strudel/2-create-app.md",sourceDirName:"guides/tutorials/basic-app-with-strudel",slug:"/guides/tutorials/basic-app-with-strudel/create-app",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/create-app",draft:!1,unlisted:!1,editUrl:"https://github.com/strudel-science/strudel-kit/tree/main/docs/docs/guides/tutorials/basic-app-with-strudel/2-create-app.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"create-app"},sidebar:"mainSidebar",previous:{title:"Set Up Your Development Environment",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/setup"},next:{title:"add-taskflow",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/add-taskflow"}},l={},d=[{value:"Next Steps",id:"next-steps",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-a-base-app",children:"Create a Base App"}),"\n",(0,n.jsxs)(t.p,{children:["We will now start to create your first STRUDEL app using the strudel-cli you installed in the previous step. The ",(0,n.jsx)(t.code,{children:"strudel"})," command has several sub-commands to do different tasks; to create an app named ",(0,n.jsx)(t.em,{children:"planets-app"})," use the ",(0,n.jsx)(t.code,{children:"create-app"})," sub-command like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"strudel create-app planets-app\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will generate some output and prompt you for some values, with default values supplied in parentheses."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/create-app-response.png?raw=true",alt:"Screenshot of strudel create-app response prompts"})}),"\n",(0,n.jsxs)(t.p,{children:["The first option has the ",(0,n.jsx)(t.code,{children:"planets-app"})," value you passed via the command line, so just click Enter to accept. The second option asks for an ",(0,n.jsx)(t.code,{children:"appTitle"}),". Give your app a custom title by typing ",(0,n.jsx)(t.code,{children:"Planets"})," then clicking Enter. The command should give the message ",(0,n.jsx)(t.code,{children:"Successfully created your strudel app!"})," and provide some additional hints on next steps (which are not shown here)."]}),"\n",(0,n.jsxs)(t.p,{children:["At this point you will have a directory named for your app that is ready to run. First ",(0,n.jsx)(t.strong,{children:"open up a separate terminal window"})," then navigate to the generated ",(0,n.jsx)(t.code,{children:"planets-app"})," directory and use the Node Package Manager (npm) that you installed earlier to install the dependencies needed by your app."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"cd planets-app\nnpm install\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will produce a fair amount of output as the NPM tool fetches and installs all the JavaScript dependencies that STRUDEL uses. It will print out some warnings about deprecated packages and security vulnerabilities. This is normal. For a real-world deployment, you would need to look at these warnings and vulnerabilities more closely, but you can safely ignore them for now."}),"\n",(0,n.jsx)(t.p,{children:"Assuming you didn't get any errors in the  step above, you can now run your app from the same directory:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"npm start\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will generate some more warnings and informational messages on the console, but should eventually cause your browser to open a new page with a simple welcome banner. If your browser does not open automatically, you can manually go to ",(0,n.jsx)(t.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})," to connect to the app."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/start-home-page.png?raw=true",alt:"Screenshot of home page in a browser"})}),"\n",(0,n.jsxs)(t.p,{children:["In the future, when you run your app, you will not need to perform the install step -- just ",(0,n.jsx)(t.code,{children:"npm start"}),'. In fact, the development server that this runs is able to update the app "live" as you change the code in this directory, so you don\'t need to stop and restart the app for each change.']}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,n.jsx)(t.p,{children:"Next you will learn how to add your first task flow to the app."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Previous"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Next"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/1-setup.md",children:"Set Up Your Development Environment"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/3-add-taskflow.md",children:"Add a Task Flow"})})]})})]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(6540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);