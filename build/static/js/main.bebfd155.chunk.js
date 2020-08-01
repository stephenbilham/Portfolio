(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),l=t(8),r=t.n(l),s=(t(14),t(1)),c=t(2),o=t(4),m=t(3),p=t(5),u=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact Me")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},e.name),n.a.createElement("h2",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),n.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("i",{className:e.className})))}))))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(i.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"About Me"),n.a.createElement("div",{className:"header-break"}),n.a.createElement("div",{id:"profile-pic-center"},n.a.createElement("p",{className:"intro-p"},e.aboutme)),n.a.createElement("p",{id:"language-header"},"Languages"),n.a.createElement("div",{id:"languages"},n.a.createElement("ul",{className:"gridSquare"},n.a.createElement("p",{className:"languages-p"},"HTML5"),n.a.createElement("img",{id:"tech-logo",src:"images/html5.png",alt:""})),n.a.createElement("ul",{className:"gridSquare"},n.a.createElement("p",{className:"languages-p"},"CSS"),n.a.createElement("img",{id:"tech-logo",src:"images/cssnew.png",alt:""})),n.a.createElement("ul",{className:"gridSquare"},n.a.createElement("p",{className:"languages-p"},"JavaScript"),n.a.createElement("img",{id:"tech-logo",src:"images/javascript.png",alt:""})),n.a.createElement("ul",{className:"gridSquare"},n.a.createElement("p",{className:"languages-p"},"Ruby"),n.a.createElement("img",{id:"tech-logo",src:"images/ruby.png",alt:""})),n.a.createElement("ul",{className:"gridSquare"},n.a.createElement("p",{className:"languages-p"},"SQL"),n.a.createElement("img",{id:"tech-logo",src:"images/sql.png",alt:""}))),n.a.createElement("div",{id:"same-row-skills"},n.a.createElement("p",null,"Frameworks"),n.a.createElement("p",null,"Other Skills")),n.a.createElement("div",{className:"technologies"},n.a.createElement("div",{id:"frameworks"},n.a.createElement("ul",{className:"gridSquare2"},n.a.createElement("p",{className:"frameworks-p"},"React"),n.a.createElement("img",{id:"tech-logo",src:"images/react.png",alt:""})),n.a.createElement("ul",{className:"gridSquare2"},n.a.createElement("p",{className:"frameworks-p"},"Rails"),n.a.createElement("img",{id:"tech-logo",src:"images/ruby_on_rails.png",alt:""}))),n.a.createElement("div",{id:"hosting-ide"},n.a.createElement("ul",{className:"gridSquare2"},n.a.createElement("p",{className:"languages-p"},"Github"),n.a.createElement("img",{id:"tech-logo",src:"images/github.png",alt:""})),n.a.createElement("ul",{className:"gridSquare2"},n.a.createElement("p",{className:"languages-p"},"Cloud9"),n.a.createElement("img",{id:"tech-logo",src:"images/aws.png",alt:""}))))))}}]),a}(i.Component),h=t(6),g=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleClick=function(e){t.toggleVisiblity(),t.setState((function(){return{selectedTech:e}}))},t.displayType=function(){var e=t.props.resumeData;if(!0!==t.state.visibility&&e.portfolio)return e.portfolio.filter((function(e){return"all"===t.state.selectedTech||e.type.includes(t.state.selectedTech)})).map((function(e){return n.a.createElement("a",{href:"".concat(e.url),rel:"noopener noreferrer",target:"_blank"},n.a.createElement("div",{className:"portfolio-item portfolioGridSquare"},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("img",{src:"".concat(e.imgurl),alt:"these are my projects",className:"item-img"}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.name),n.a.createElement("p",null,e.description))))))}))},t.toggleVisiblity=t.toggleVisiblity.bind(Object(h.a)(t)),t.state={visibility:!1,selectedTech:null},t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"toggleVisiblity",value:function(){this.setState((function(e){return{visibility:!e.visibility}})),console.log(this.state.visibility)}},{key:"render",value:function(){var e=this;return n.a.createElement("section",{id:"portfolio"},n.a.createElement("h1",null,"Check Out Some of My Projects!"),n.a.createElement("div",{className:"portfolio__button__layout"},n.a.createElement("button",{onClick:function(){return e.handleClick("all")}},"All"),"all"===this.state.selectedTech&&n.a.createElement("div",{className:"portfolioGrid"},this.displayType(),n.a.createElement("div",{id:"portfolio-wrapper"})),n.a.createElement("button",{onClick:function(){return e.handleClick("javascript")}},"JavaScript"),"javascript"===this.state.selectedTech&&n.a.createElement("div",{className:"portfolioGrid"},this.displayType(),n.a.createElement("div",{id:"portfolio-wrapper"})),n.a.createElement("button",{onClick:function(){return e.handleClick("html")}},"CSS/HTML"),"html"===this.state.selectedTech&&n.a.createElement("div",{className:"portfolioGrid"},this.displayType(),n.a.createElement("div",{id:"portfolio-wrapper"})),n.a.createElement("button",{onClick:function(){return e.handleClick("react")}},"React"),"react"===this.state.selectedTech&&n.a.createElement("div",{className:"portfolioGrid"},this.displayType(),n.a.createElement("div",{id:"portfolio-wrapper"})),n.a.createElement("button",{onClick:function(){return e.handleClick("nodejs")}},"NodeJS"),"nodejs"===this.state.selectedTech&&n.a.createElement("div",{className:"portfolioGrid"},this.displayType(),n.a.createElement("div",{id:"portfolio-wrapper"})),n.a.createElement("button",{onClick:function(){return e.handleClick("ruby on rails")}},"Ruby on Rails"),"ruby on rails"===this.state.selectedTech&&n.a.createElement("div",{className:"portfolioGrid"},this.displayType(),n.a.createElement("div",{id:"portfolio-wrapper"}))))}}]),a}(i.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){this.props.resumeData;return n.a.createElement("section",{id:"contact"},n.a.createElement("div",{className:"contactBox"}),n.a.createElement("div",{className:""},n.a.createElement("div",{className:"ten columns"},n.a.createElement("p",{className:"lead"},"Contact Me Here"),n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your name"}),n.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Your email"}),n.a.createElement("textarea",{id:"subject",name:"subject",placeholder:"Currently not working... Email: Stephenbilham@yahoo.com"}),n.a.createElement("input",{id:"submit-fix",type:"submit",value:"Submit"}))))),n.a.createElement("div",{className:"row"},n.a.createElement("aside",{className:"eigth columns footer-widgets"},n.a.createElement("div",{className:"widget"}))))}}]),a}(i.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return n.a.createElement("li",null,n.a.createElement("a",{href:e.url}))})))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(i.Component),v={imagebaseurl:"",name:"Stephen Bilham",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",roleDescription:"Full Stack Software Developer",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/srbilham/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/stephenbilham",className:"fa fa-github"}],aboutme:"\tI am a web developer based out of San Diego, California, able to create a web presence from the ground up \u2014 from conception to strategic planning, implementation, proper navigation, and programming to optimally improve UX. I aim towards writing efficient, readable, and testable code while using the current best practices in web development. My optimistic and innovative mindset inevitably has driven me towards a passion for problem solving and creativity, as well as an array of other strengths such as being determined, persistent, hard working, a fast learner, and a team player proficient of a variety of scripting languages and frameworks.",address:"San Diego",education:[{UniversityName:"University of California, San Diego",specialization:"The Bachelor of Arts (BA) degree program in Communications",MonthOfPassing:"June",YearOfPassing:"2017 - 2019",Achievements:"Some Achievements"},{UniversityName:"Santa Barbara City College",specialization:"Communication Studies",MonthOfPassing:"Aug",YearOfPassing:"2014 - 2017",Achievements:"Some Achievements"}],work:[{CompanyName:"Learn Academy",specialization:"Full Stack Software Development",MonthOfLeaving:"Sept - Jan",YearOfLeaving:"2019 - 2020",Achievements:"Some Achievements"},{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"}],skillsDescription:"Your skills here",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"JavaScript"},{skillname:"React"},{skillname:"Ruby"},{skillname:"Ruby on Rails"},{skillname:"SQL"},{skillname:"AWS"},{skillname:"Github"}],portfolio:[{name:"OmniFood",description:"CSS/HTML - Food delivery application that involves fluid grids, proper design techniques, positioning, media queries, Jquery, and much more. This project is responsive on web, tablets and iPhones of all sizes.",imgurl:"https://media.giphy.com/media/hvLOGi1KsF02XiZ1DD/giphy.gif",url:"https://stephenbilham.github.io/SbOmniFood/",type:["html"]},{name:"Forkify",description:"JS - Here you can search through an API of recipes and add your favorites to a shopping list/favorite recipes (ingredients change with serving size). This was a complex app, using Async functions, fetch, await, callbacks, and closures",imgurl:"https://media.giphy.com/media/ekeOYzzNEpW73RIcSb/giphy.gif",url:"https://github.com/stephenbilham/Financial-budgeting-App/tree/master/Budgety/Starter",type:["html","javascript"]},{name:"Connect Four",description:"React - This was logically challenging. The hardest part was finding all of the winning combinations using mathamatical algorithims/trial and error. The stetch goal is to add animation for the connect four pieces to fall.",imgurl:"https://media.giphy.com/media/YrC2lEAcG4loOj2aLI/giphy.gif",url:"",type:["react","html","javascript"]},{name:"Laptop Store",description:"Node JS - Node Js practice where the purpose was to learn how to properly route based on filesharing/URL/ID's and rendering a cool looking laptop store application. This was the first introduction that I had to Node JS. ",imgurl:"https://media.giphy.com/media/VGKPGZX3F2fDzC3zxX/giphy.gif",url:"",type:["nodejs"]},{name:"DOM-Pig-Game",description:"JS - This is a two player game where made with HTML while JS functionality and JS selctors to change the CSS properties. Goal of the game it to get to a score of user choice if double 6's global score is reset. if you role a 1 then it's switches players.",imgurl:"https://media.giphy.com/media/YoPoDkMWH8gXzhY7Ll/giphy.gif",url:"",type:["javascript"]},{name:"Budget Tracker",description:"JS - An application that allows users to track their monthly/ annual budgets. I use module patterns for clean, sectioned code and JavaScript concepts such as closures, prototypes, anonymous functions, and callbacks.",imgurl:"https://media.giphy.com/media/jRN2RVW71ArjDWe5KC/giphy.gif",url:"",type:["html","javascript"]},{name:"Apartment Finder",description:"React in Rails - project in progress (REST/CRUD architecture). You are able to create a personal account/sign-in with devise. Once signed in, you can create a listing for an apartment which is stored to that user.",imgurl:"https://media.giphy.com/media/WscWy0lw7k0kkojUYh/giphy.gif",url:"",type:["react","ruby on rails"]},{name:"Tic-Tac-Toe",description:"React - framework with Javascript/HTML/CSS. This was a fun game to build, although many think it is over done, it surely tests ones logic skills while learning how to code.",imgurl:"https://media.giphy.com/media/U6derfInQGT7XS7IP7/giphy.gif",url:"",type:["react"]}]},y={"--numColumns":"2"},b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).updateNumColumns=function(){Object.keys(y).map((function(e){y[e]=window.innerWidth>900?"2":"1",document.documentElement.style.setProperty(e,y[e])}))},t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.updateNumColumns(),window.addEventListener("resize",this.updateNumColumns)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateNumColumns)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"page-bg"}),n.a.createElement("div",{className:"animation-wrapper"},n.a.createElement("div",{className:"particle particle-1"}),n.a.createElement("div",{className:"particle particle-2"}),n.a.createElement("div",{className:"particle particle-3"}),n.a.createElement("div",{className:"particle particle-4"})),n.a.createElement(u,{resumeData:v}),n.a.createElement(d,{resumeData:v}),n.a.createElement(g,{resumeData:v}),n.a.createElement(f,{resumeData:v}),n.a.createElement(E,{resumeData:v}))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.bebfd155.chunk.js.map