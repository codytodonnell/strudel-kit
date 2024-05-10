"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[23],{9581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(4848),s=n(8453);const i={},a="Customize Your App",r={id:"guides/tutorials/basic-app-with-strudel/customize-app",title:"Customize Your App",description:"For most web applications, it is important to include content and alterations that are unique to your project. In this section you will learn the basics of how to make the app your own by changing the theme, styles, and general content.",source:"@site/docs/guides/tutorials/basic-app-with-strudel/5-customize-app.md",sourceDirName:"guides/tutorials/basic-app-with-strudel",slug:"/guides/tutorials/basic-app-with-strudel/customize-app",permalink:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/customize-app",draft:!1,unlisted:!1,editUrl:"https://github.com/codytodonnell/strudel-kit/tree/main/docs/docs/guides/tutorials/basic-app-with-strudel/5-customize-app.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{}},c={},l=[{value:"Modify the Global Theme",id:"modify-the-global-theme",level:2},{value:"Change the Color Palette",id:"change-the-color-palette",level:3},{value:"Convert to Dark Mode",id:"convert-to-dark-mode",level:3},{value:"Change the Default Font",id:"change-the-default-font",level:3},{value:"Modify Specific Styles",id:"modify-specific-styles",level:2},{value:"Add a Project Logo",id:"add-a-project-logo",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"customize-your-app",children:"Customize Your App"}),"\n",(0,o.jsx)(t.p,{children:"For most web applications, it is important to include content and alterations that are unique to your project. In this section you will learn the basics of how to make the app your own by changing the theme, styles, and general content."}),"\n",(0,o.jsx)(t.h2,{id:"modify-the-global-theme",children:"Modify the Global Theme"}),"\n",(0,o.jsxs)(t.p,{children:["STRUDEL leverages ",(0,o.jsx)(t.a,{href:"https://mui.com/",children:"MUI"})," theming capabilities to style much of the app. Because STRUDEL uses MUI for its low-level components, using the theme makes it easy to make app-wide changes and keep things consistent. To learn more about how MUI theming works, checkout ",(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/customization/theming/",children:"their documentation on the topic"}),". For this tutorial, the explanations will be kept brief."]}),"\n",(0,o.jsxs)(t.p,{children:["To get started modifying the theme, open up the theme file in ",(0,o.jsx)(t.code,{children:"src/app/theme.tsx"}),". In this file you will find the ",(0,o.jsx)(t.code,{children:"theme"})," object. This is where all of the theme values are configured and it has been prepopulated with many default values to make editing the theme simpler."]}),"\n",(0,o.jsx)(t.h3,{id:"change-the-color-palette",children:"Change the Color Palette"}),"\n",(0,o.jsxs)(t.p,{children:["Let's start out by changing the color palette for the app. Right now, the primary color for the app is blue (",(0,o.jsx)(t.code,{children:"#1976d2"}),"). Start by changing the ",(0,o.jsx)(t.code,{children:"primary"})," ",(0,o.jsx)(t.code,{children:"main"})," color to amaranth red (",(0,o.jsx)(t.code,{children:"#dd4050"}),"):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"primary: {\n  main: '#dd4050',\n  light: '#42a5f5',\n  dark: '#1565c0',\n  contrastText: '#fff',\n},\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The essential colors in the palette each have a ",(0,o.jsx)(t.code,{children:"main"}),", ",(0,o.jsx)(t.code,{children:"light"}),", and ",(0,o.jsx)(t.code,{children:"dark"})," version. You can specify the ",(0,o.jsx)(t.code,{children:"light"})," and ",(0,o.jsx)(t.code,{children:"dark"})," versions explicitly or you can remove them and they will be generated automatically based on the ",(0,o.jsx)(t.code,{children:"main"})," color. For now, set the ",(0,o.jsx)(t.code,{children:"light"})," and ",(0,o.jsx)(t.code,{children:"dark"})," versions to bright pink (",(0,o.jsx)(t.code,{children:"#e36370"}),") and cardinal red (",(0,o.jsx)(t.code,{children:"#bf2231"}),") respectively."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"primary: {\n  main: '#dd4050',\n  light: '#e36370',\n  dark: '#bf2231',\n  contrastText: '#fff',\n},\n"})}),"\n",(0,o.jsx)(t.p,{children:"Refresh the page and see if the blue text and buttons changed to the red tones."}),"\n",(0,o.jsxs)(t.p,{children:["While you are here, also change the ",(0,o.jsx)(t.code,{children:"secondary"})," colors to electric blue tones. Change ",(0,o.jsx)(t.code,{children:"main"})," to ",(0,o.jsx)(t.code,{children:"#00e9f5"}),", ",(0,o.jsx)(t.code,{children:"light"})," to ",(0,o.jsx)(t.code,{children:"#5ef6ff"}),", and ",(0,o.jsx)(t.code,{children:"dark"})," to ",(0,o.jsx)(t.code,{children:"#00c2cc"}),". Because this is a lighter color in general, also change the ",(0,o.jsx)(t.code,{children:"contrastText"})," to black (",(0,o.jsx)(t.code,{children:"#000"}),"). This controls the color of text that is rendered on top of the color and ensures the contrast is still readable and accessible."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"secondary: {\n  main: '#00e9f5',\n  light: '#5ef6ff',\n  dark: '#00c2cc',\n  contrastText: '#000',\n},\n"})}),"\n",(0,o.jsx)(t.h3,{id:"convert-to-dark-mode",children:"Convert to Dark Mode"}),"\n",(0,o.jsx)(t.p,{children:"The new palette is looking good but what if you want to change the more prevalant base and background colors of the app? Let's convert the whole app to dark mode to demonstrate how to do that."}),"\n",(0,o.jsxs)(t.p,{children:["First, find the ",(0,o.jsx)(t.code,{children:"mode"})," option nested under ",(0,o.jsx)(t.code,{children:"palette"}),". This value controls how many of the inner components and various component states are rendered:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"palette: {\n  mode: 'light',\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Change the ",(0,o.jsx)(t.code,{children:"mode"})," from ",(0,o.jsx)(t.code,{children:"light"})," to ",(0,o.jsx)(t.code,{children:"dark"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"palette: {\n  mode: 'dark',\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You also need to adjust the ",(0,o.jsx)(t.code,{children:"default"})," background color and the ",(0,o.jsx)(t.code,{children:"paper"})," background color. To do this, find those two options nested under ",(0,o.jsx)(t.code,{children:"palette.background"}),". Set ",(0,o.jsx)(t.code,{children:"background.default"})," to eerie black (",(0,o.jsx)(t.code,{children:"#191919"}),") and ",(0,o.jsx)(t.code,{children:"background.paper"})," to a lighter eerie black (",(0,o.jsx)(t.code,{children:"#232323"}),"):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"background: {\n  default: '#191919',\n  paper: '#232323',\n},\n"})}),"\n",(0,o.jsx)(t.p,{children:"Refresh the page and see how the new dark mode looks."}),"\n",(0,o.jsx)(t.h3,{id:"change-the-default-font",children:"Change the Default Font"}),"\n",(0,o.jsxs)(t.p,{children:["The theme also controls the default font used throughout the app. All font properties are nested inside of the ",(0,o.jsx)(t.code,{children:"typography"})," property. Try changing the default ",(0,o.jsx)(t.code,{children:"fontFamily"})," from ",(0,o.jsx)(t.code,{children:"Helvetica"})," to ",(0,o.jsx)(t.code,{children:"Avenir"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'typography: {\n  htmlFontSize: 16,\n  fontFamily: \'"Avenir", "Verdana", "Arial", sans-serif\',\n  fontSize: 14,\n  fontWeightLight: 300,\n  fontWeightRegular: 400,\n  fontWeightMedium: 500,\n  fontWeightBold: 700,\n},\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Refresh the page and see if the font has changed. Some devices may not support ",(0,o.jsx)(t.code,{children:"Avenir"})," and will instead show one of the backup fonts."]}),"\n",(0,o.jsx)(t.h2,{id:"modify-specific-styles",children:"Modify Specific Styles"}),"\n",(0,o.jsx)(t.p,{children:"You just learned how to modify the global app theme. Now let's learn how to customize the style of a specific component. In this step you will change the color of the top level navigation bar."}),"\n",(0,o.jsxs)(t.p,{children:["Open the component for the navigation bar in ",(0,o.jsx)(t.code,{children:"src/components/TopBar.tsx"})," and find the ",(0,o.jsx)(t.code,{children:"AppBar"})," component:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'<AppBar color="default" position="static">\n'})}),"\n",(0,o.jsxs)(t.p,{children:["There are many ways to modify the styles of the elements in a component or on a page. In this tutorial you will use the MUI ",(0,o.jsx)(t.code,{children:"sx"})," prop to change the styles of specific components. It's possible to use traditional methods like CSS classes for this too, but the ",(0,o.jsx)(t.code,{children:"sx"})," prop allows you to easily utilize the global theme and create dynamic styles and states. You can read more about the ",(0,o.jsx)(t.code,{children:"sx"})," prop in the ",(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/customization/how-to-customize/",children:"MUI documentation"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["To change the background color of the ",(0,o.jsx)(t.code,{children:"AppBar"})," add the ",(0,o.jsx)(t.code,{children:"sx"})," prop and set the ",(0,o.jsx)(t.code,{children:"backgroundColor"})," property to ",(0,o.jsx)(t.code,{children:"primary.main"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'<AppBar \n  color="default" \n  position="static"\n  sx={{\n    backgroundColor: \'primary.main\'\n  }}\n>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"primary.main"})," string is a reference to the value in the ",(0,o.jsx)(t.code,{children:"theme.palette"})," object. You can reference any value in the theme's ",(0,o.jsx)(t.code,{children:"palette"})," inside of the ",(0,o.jsx)(t.code,{children:"sx"})," prop. You can also just as easily use an explicit color code."]}),"\n",(0,o.jsxs)(t.p,{children:["You may have noticed that the color of the navigation bar changed, but now the links are not very readable because they are also red. Use the ",(0,o.jsx)(t.code,{children:"sx"})," prop to change the text of the 3 ",(0,o.jsx)(t.code,{children:"AppLink"})," components to white (",(0,o.jsx)(t.code,{children:"#fff"}),"):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'<AppLink \n  to="/" \n  sx={{ \n    color: \'#fff\'\n  }}\n>\n  <IconButton\n    size="large"\n    edge="start"\n    color="inherit"\n    aria-label="menu"\n  >\n    <HomeIcon />\n  </IconButton>\n</AppLink>\n<AppLink \n  to="/" \n  sx={{ \n    color: \'#fff\'\n  }}\n>\n  <Typography variant="h6" component="div">\n    {app.state.appTitle}\n  </Typography>\n</AppLink>\n<AppLink \n  to="/" \n  sx={{ \n    color: \'#fff\'\n  }}\n>\n  Explore\n</AppLink>\n'})}),"\n",(0,o.jsx)(t.p,{children:"Refresh the page to see the new navigation bar."}),"\n",(0,o.jsxs)(t.p,{children:["You can also use the ",(0,o.jsx)(t.code,{children:"sx"})," prop to make advanced style changes like changing the hover state of an element. To do add a different style for the hover state, add a new property to the ",(0,o.jsx)(t.code,{children:"sx"})," object called ",(0,o.jsx)(t.code,{children:"'&:hover'"}),". You can then give this new property its own object of styles which tells the component how it should look when it is being hovered by a user's cursor."]}),"\n",(0,o.jsxs)(t.p,{children:["Add a hover state style to the Explore page ",(0,o.jsx)(t.code,{children:"AppLink"})," so that its color is ",(0,o.jsx)(t.code,{children:"secondary.light"})," on hover:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"<AppLink \n  to=\"/\" \n  sx={{ \n    color: '#fff',\n    '&:hover': {\n      color: 'secondary.light',\n    }\n  }}\n>\n  Explore\n</AppLink>\n"})}),"\n",(0,o.jsx)(t.p,{children:"Refresh the page and watch the Explore link change color when you mouse over it."}),"\n",(0,o.jsx)(t.h2,{id:"add-a-project-logo",children:"Add a Project Logo"}),"\n",(0,o.jsx)(t.p,{children:'Now, let\'s replace the "Tutorial Science App" title in the navigation bar with a logo for a project. First, download the tutorial app logo from GitHub:'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/example-logo.png?raw=true",children:"Click to download example-logo.png from GitHub"})}),"\n",(0,o.jsxs)(t.p,{children:["Place ",(0,o.jsx)(t.code,{children:"example-logo.png"})," in ",(0,o.jsx)(t.code,{children:"public/images"})," alongside your other images."]}),"\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.code,{children:"TopBar.tsx"}),", import the ",(0,o.jsx)(t.code,{children:"ImageWrapper"})," component at the top of the file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { ImageWrapper } from './ImageWrapper';\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then find the ",(0,o.jsx)(t.code,{children:"AppLink"})," that contains the app title:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'<AppLink \n  to="/" \n  sx={{ \n    color: \'#fff\'\n  }}\n>\n  <Typography variant="h6" component="div">\n    {app.state.appTitle}\n  </Typography>\n</AppLink>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Replace the whole ",(0,o.jsx)(t.code,{children:"Typography"})," component with an ",(0,o.jsx)(t.code,{children:"ImageWrapper"})," and ",(0,o.jsx)(t.code,{children:"img"})," element. Then, reference the new logo image in the ",(0,o.jsx)(t.code,{children:"src"})," attribute of the ",(0,o.jsx)(t.code,{children:"img"}),". You can also remove the ",(0,o.jsx)(t.code,{children:"sx"})," prop from this ",(0,o.jsx)(t.code,{children:"AppLink"})," because it's no longer necessary:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'<AppLink to="/">\n  <ImageWrapper height="50px">\n    <img src="images/example-logo.png" alt="PLANETS app logo" />\n  </ImageWrapper>\n</AppLink>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The above snippet also includes a ",(0,o.jsx)(t.code,{children:"height"})," prop on the ",(0,o.jsx)(t.code,{children:"ImageWrapper"})," and an ",(0,o.jsx)(t.code,{children:"alt"})," prop on the ",(0,o.jsx)(t.code,{children:"img"}),". The ",(0,o.jsx)(t.code,{children:"height"})," prop specifies how tall the image should be in pixels. The width will automatically scale based on the height value."]}),"\n",(0,o.jsx)(t.p,{children:"Refresh the browser and check out your new app logo in the navigation bar."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/final-explore-data.png?raw=true",alt:"Screenshot of the finished solar system page with new logo and dark mode theme in a browser"})}),"\n",(0,o.jsx)(t.p,{children:"Hooray! You are all done customizing app styles for this tutorial."}),"\n",(0,o.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsx)(t.p,{children:"In the last section of this tutorial, you will put what you have learned together to edit the app's home page."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Previous"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Next"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:(0,o.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/4-customize-taskflow.md",children:"Customize Your Task Flow"})}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:(0,o.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/6-customize-home-page.md",children:"Customize the Home Page"})})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);