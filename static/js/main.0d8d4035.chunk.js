(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(9),a=n(3),c=n(1),s=n(0),r=Object(c.createContext)(),o=function(e){var t=e.children,n=Object(c.useState)("light"),i=Object(a.a)(n,2),o=i[0],l=i[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://okaberintaroubeta.github.io",d="L. L.",h="Lucy Liu",j="Software Engineer",b="I am Lucy Liu, an incoming student at Carnegie Mellon University majoring in Information Security and Artificial Intelligence. My interest lies in developing educational technology for students.",u="https://drive.google.com/file/d/1o1t5oLUCbWka34xIUg6gZj9vVB15IcJU/view?usp=sharing",m="https://okabe-blog.vercel.app/",p={linkedin:"https://www.linkedin.com/in/zihui-liu-327015224/",github:"https://github.com/OkabeRintarouBeta"},f=[{name:"Anime Vertical Search Engine",description:"A vertical search model for animes that is indexed and trained with Pyterrier",stack:["Pyterrier","NLP","ReactJS"],sourceCode:"https://github.com/OkabeRintarouBeta/Anime-Search-Engine",livePreview:"https://drive.google.com/file/d/1dPeGEyibLY2dUrV5dkMzup8CoegBTVmk/view"},{name:"Todo List with Pomodoro Clock",description:"A todo list that allows users to add or delete todos, timed with Pomodoro Clock",stack:["ReactJS"],sourceCode:"https://github.com/OkabeRintarouBeta/TodoList-with-PomodoroClock-code",livePreview:"https://todo-list-with-pomodoro-clock-code.vercel.app/"},{name:"Machine Reading Comprehension for Mutiple Choice Problem",description:"A well-tuned NLP model that is applied on RACE dataset",stack:["Python","Pytorch","NLP"],sourceCode:"https://github.com/OkabeRintarouBeta/si630/tree/main/project",livePreview:"https://github.com/OkabeRintarouBeta/si630/blob/main/project/final_report.pdf"},{name:"Real-time DB Management System",description:"Established a database management system with high concurrency and average response time of 1 ms by using MySQL as the database, Redis as Cache, and back-end supported by Golang",stack:["Golang","Redis","Angular","Typescript"],sourceCode:"https://github.com/twicy/capstone_SJTU",livePreview:"https://drive.google.com/file/d/1EuEG3ugOTOTMPvKsnpuexjn9nD3QLg-r/view?usp=sharing"},{name:"School Segregation in NYC Dashboard",description:"A series of visualizations aiming to aid readers\u2019 understanding of the article \u201cChoosing a School for My Daughter in a Segregated City\u201d written by Nikole Hannah-Jones published on the New York Times Magazine. It provides visualizations of data concerning U.S. primary schools\u2019 education resources and other conditions, as well as the performance on tests of public schools in New York City.",stack:["Tableau","Data Visualization"],sourceCode:"https://drive.google.com/file/d/1JU_Z-thCGd-CaLqI2Q8ACD4JGnL-yTpc/view?usp=sharing",livePreview:"https://public.tableau.com/app/profile/zihui.liu/viz/si649_IndividualProject/Story1?publish=yes"},{name:"What is this?",description:"A simple web app allowing to upload a picture and predict what it is.",stack:["ReactJS","Flask","MobileNet"],sourceCode:"https://github.com/OkabeRintarouBeta/image-identifier/",livePreview:"https://image-identifier-red.vercel.app"}],O=["C++","C","Python","Java","HTML","CSS","JavaScript","React","Docker","Git","AWS DevOps"],g="okaberintaroubeta@gmail.com",k=n(16),v=n.n(k),x=n(14),_=n.n(x),N=n(18),w=n.n(N),y=n(17),C=n.n(y),S=(n(28),function(){var e=Object(c.useContext)(r),t=Object(a.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,o=Object(c.useState)(!1),l=Object(a.a)(o,2),d=l[0],h=l[1],j=function(){return h(!d)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:d?"flex":null},className:"nav__list",children:[f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:j,className:"link link--nav",children:"Projects"})}):null,O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:j,className:"link link--nav",children:"Skills"})}):null,g?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:j,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(_.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:j,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:d?Object(s.jsx)(C.a,{}):Object(s.jsx)(w.a,{})})]})}),P=(n(32),function(){var e=l,t=d;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(S,{})]})}),L=n(11),R=n.n(L),E=n(19),I=n.n(E),M=(n(33),function(){var e=h,t=j,n=b,i=u,a=m,c=p;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Blog"})}),i&&Object(s.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(R.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(I.a,{})})]})]})]})}),A=n(7),T=n.n(A),J=n(20),B=n.n(J),z=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},T()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(R.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(B.a,{})})]})}),D=(n(36),function(){return f.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:f.map((function(e){return Object(s.jsx)(z,{project:e},T()())}))})]}):null}),U=(n(37),function(){return O.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},T()())}))})]}):null}),G=n(21),V=n.n(G),Y=(n(38),function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(V.a,{fontSize:"large"})})}):null}),H=(n(39),function(){return g?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("div",{className:"section__contact__text",children:"I am currently looking for software or full-stack development opportunities for 2024 summer internship! If you know of any positions available, or have any questions, or just want to say hi, feel free to connect with me on LinkedIn or send me a Email below. "}),Object(s.jsx)("a",{href:"mailto:".concat(g),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Q=(n(40),function(){return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("div",{className:"footer__link",children:"Modified from template created by "}),Object(s.jsx)("a",{href:"https://github.com/okaberintaroubeta",className:"link footer__link",children:"Raj Shekhar"})]})}),W=(n(41),function(){var e=Object(c.useContext)(r),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(P,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(M,{}),Object(s.jsx)(D,{}),Object(s.jsx)(U,{}),Object(s.jsx)(H,{})]}),Object(s.jsx)(Y,{}),Object(s.jsx)(Q,{})]})});n(42);Object(i.render)(Object(s.jsx)(o,{children:Object(s.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.0d8d4035.chunk.js.map