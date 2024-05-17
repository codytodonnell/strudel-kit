"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[919],{6233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(4848),s=n(8453);const o={},l="Set Up Your Development Environment",r={id:"guides/tutorials/basic-app-with-strudel/setup",title:"Set Up Your Development Environment",description:"The current interface to using the STRUDEL Design System is a command-line tool written in Python. To use this tool, you need to set up a development environment that lets you invoke Python commands from a terminal.",source:"@site/docs/guides/tutorials/basic-app-with-strudel/1-setup.md",sourceDirName:"guides/tutorials/basic-app-with-strudel",slug:"/guides/tutorials/basic-app-with-strudel/setup",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/strudel-science/strudel-kit/tree/main/docs/docs/guides/tutorials/basic-app-with-strudel/1-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"mainSidebar",previous:{title:"Getting Started with STRUDEL Kit (Beta)",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/introduction"},next:{title:"Create a Base App",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/create-app"}},a={},d=[{value:"Open a Terminal Window",id:"open-a-terminal-window",level:3},{value:"Create an Isolated Environment with Conda",id:"create-an-isolated-environment-with-conda",level:3},{value:"Install strudel-cli using pip",id:"install-strudel-cli-using-pip",level:3},{value:"Test strudel-cli Installation",id:"test-strudel-cli-installation",level:3},{value:"(Optional) Install NodeJS and NPM Globally",id:"optional-install-nodejs-and-npm-globally",level:3},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"set-up-your-development-environment",children:"Set Up Your Development Environment"}),"\n",(0,i.jsx)(t.p,{children:"The current interface to using the STRUDEL Design System is a command-line tool written in Python. To use this tool, you need to set up a development environment that lets you invoke Python commands from a terminal."}),"\n",(0,i.jsx)(t.h3,{id:"open-a-terminal-window",children:"Open a Terminal Window"}),"\n",(0,i.jsxs)(t.p,{children:["The first step is to start a terminal program. The rest of this tutorial will assume you are using a standard MacOS, UNIX, or ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4",children:"Windows PowerShell"})," (not command.exe) terminal. This ensures that all the command line steps follow the same syntax. The exact shell interpreter should not matter, as most of the work is done by the Python script. Thus, you need to have a supported ",(0,i.jsx)(t.a,{href:"https://devguide.python.org/versions/",children:"version"}),' of Python  installed on your system (Python 3.8 or above at the time of this writing). We recommend using a Python "environment" such as ',(0,i.jsx)(t.a,{href:"https://docs.anaconda.com/free/miniconda/index.html",children:"miniconda"})," or ",(0,i.jsx)(t.a,{href:"https://github.com/pyenv/pyenv",children:"pyenv"})," to isolate any changes you make here from your system Python installation. Please look at the documentation for these tools for more information."]}),"\n",(0,i.jsx)(t.h3,{id:"create-an-isolated-environment-with-conda",children:"Create an Isolated Environment with Conda"}),"\n",(0,i.jsxs)(t.p,{children:["Once you have these base requirements installed, create a new environment and a working directory. Here is an example of the steps you would use to set up a new environment with ",(0,i.jsx)(t.em,{children:"miniconda"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:" conda create -y -n strudel-learn-env -c conda-forge nodejs python=3.9 pip git\n conda activate strudel-learn-env\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once you have the environment set up, create a working directory and move into it:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:" mkdir learning-strudel\n cd learning-strudel\n"})}),"\n",(0,i.jsx)(t.h3,{id:"install-strudel-cli-using-pip",children:"Install strudel-cli using pip"}),"\n",(0,i.jsx)(t.p,{children:'Once this is setup, use the "pip" Python package manager tool, which is standard with any modern Python installation, to install the STRUDEL command-line tools:'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"pip install strudel-cli\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This will install the latest ",(0,i.jsx)(t.em,{children:"released"})," version of the CLI code. If you want the freshly baked code right from the main repository instead, use the following recipe:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"# note: use only if you want 'freshly baked' code from GitHub main branch\ngit clone https://github.com/strudel-science/strudel-kit\npip install strudel-kit/strudel-cli\n"})}),"\n",(0,i.jsx)(t.h3,{id:"test-strudel-cli-installation",children:"Test strudel-cli Installation"}),"\n",(0,i.jsxs)(t.p,{children:["If all the above steps went well (!) you should be able to run the ",(0,i.jsx)(t.code,{children:"strudel"})," command in your current environment."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"\u276f strudel --version\nstrudel-cli 0.0.2\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If this fails, some common problems are that you are running in a terminal where you have not activated the (e.g., ",(0,i.jsx)(t.em,{children:"miniconda"}),") Python environment into which you installed strudel-cli (you must do this every time you start a new terminal), or the installation somehow did not complete. Feel free to reach out to the team at ",(0,i.jsx)(t.a,{href:"mailto:strudel@lbl.gov",children:"strudel@lbl.gov"})," for help."]}),"\n",(0,i.jsx)(t.h3,{id:"optional-install-nodejs-and-npm-globally",children:"(Optional) Install NodeJS and NPM Globally"}),"\n",(0,i.jsxs)(t.p,{children:["If you used conda and created an environment using the command in the guide, then you will have Node.js and NPM installed inside of that conda environment and that should allow you to run the app without issue. If you prefer to install Node.js and NPM outside of conda, you can install it globally by following the ",(0,i.jsx)(t.a,{href:"https://nodejs.org/en/download",children:"instructions on the NodeJS download page"})," to install NPM and NodeJS together for your operating system."]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"Now that you have the client installed, you can start building your first STRUDEL application."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Previous"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Next"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/1-introduction.md",children:"Introduction"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/2-create-app.md",children:"Build an App with STRUDEL"})})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);