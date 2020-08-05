(this.webpackJsonpenvolve=this.webpackJsonpenvolve||[]).push([[0],{345:function(e,t,a){e.exports=a(580)},350:function(e,t,a){},351:function(e,t,a){},580:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(350),a(351),a(312)),i=a(613),s=a(352),u="teacher-token";function m(){return localStorage.getItem(u)}function f(){return localStorage.removeItem(u)}function d(e){return localStorage.setItem(u,e)}function h(){var e=m();return s(e)}var p=a(24),b=a(27),g=a(29),E=a.n(g),y=a(629),v=E()((function(e){return{link:{textDecoration:"none",color:"black"},image:{width:"100%",maxWidth:"550px"}}}));function x(){var e=v();return r.a.createElement(y.a,{px:2},r.a.createElement("div",null,r.a.createElement(p.b,{className:e.link,to:"/"},r.a.createElement("img",{className:e.image,src:"/images/logo.svg",alt:""}))))}var O=a(14),j=a(176),w=a(626),S=a(614),k=a(6),C=a.n(k),N=E()((function(e){return{buttonStyle:{textTransform:"none",background:"rgba(57,164,209)",color:"white",fontWeight:"bold"}}}));function F(e){var t=e.className,a=e.disabled,n=e.content,c=e.onClick,o=e.style,l=N();return r.a.createElement(S.a,{className:C()(l.buttonStyle,t),disabled:a,onClick:c,style:o,variant:"contained"},n)}var T=a(22),D=a.n(T),L=a(38),I="https://envolve-feedback.herokuapp.com";function W(){return(W=Object(L.a)(D.a.mark((function e(t,a){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a})});case 2:if(200===(n=e.sent).status){e.next=5;break}throw new Error("failed to login: ".concat(n.statusText));case 5:return e.next=7,n.text();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=E()((function(e){return{about:{backgroundImage:"url(".concat("./images/greenback3.svg",")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",minHeight:"100%",display:"flex",flexDirection:"column",alignItems:"center"},headline:{fontSize:"4.5em",color:"#F7F7F7"},textTypo:{textAlign:"left",padding:"1em",fontSize:"1rem",lineHeight:"1.75"}}})),z=function(){var e=q();return r.a.createElement(y.a,{pb:2,className:e.about},r.a.createElement(j.a,{className:e.headline},"About"),r.a.createElement(y.a,{px:3,py:4,m:5,boxShadow:3,style:{maxWidth:"600px",backgroundColor:"#F7F7F7"}},r.a.createElement("img",{style:{height:"25vh"},src:"./images/twoPersons.png",alt:""}),r.a.createElement(j.a,{className:e.textTypo},r.a.createElement("span",{style:{letterSpacing:"-2.25px",fontSize:"1.5em",lineHeight:".75",fontWeight:"bold"}},"Envolve ")," is an app to ",r.a.createElement("b",null,"improve communication between students and their teachers "),".",r.a.createElement("br",null)," The approach is to establish a ",r.a.createElement("b",null,"continuous student-side feedback loop")," to allow students to share their interests, ideas, wishes, criticisms and so on.",r.a.createElement("br",null),"Based on this information, the teacher can ",r.a.createElement("b",null," design lessons in the interest of the students "),", thereby increasing their motivation to learn and ultimately improving the quality of learning.")))},A=E()((function(e){return{buttonStyle:{textTransform:"none",background:"rgba(57,164,209)",color:"white",fontWeight:"bold",borderRadius:"5px"},link:{textTransform:"none",textDecoration:"none",color:"white"}}})),R=function(){var e=A();return r.a.createElement(y.a,null,r.a.createElement(j.a,{color:"secondary",style:{fontWeight:"bold"}},"Not yet registered?"),r.a.createElement(y.a,{mt:2,boxShadow:2,p:1,className:e.buttonStyle},r.a.createElement(p.b,{className:e.link,to:"/register"},"Create Account")))},G=a(35),U=E()((function(e){return{centerPage:{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column",height:"70vh"},center:{display:"flex",flexDirection:"column"},loginBox:{padding:"1.5em",borderRadius:"5px",borderWidth:"1px",width:"250px",background:"#F7F7F7"}}}));function B(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(O.a)(o,2),i=l[0],s=l[1],u=U(),m=Object(G.b)();var f=Object(G.c)((function(e){return e.loggedUser})).authStatus,p=Object(b.h)();if("SUCCESS"===f){var g=p.state||{from:{pathname:"/overview"}};return r.a.createElement(b.a,{to:g.from.pathname})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{mt:5,className:u.centerPage},r.a.createElement(y.a,{boxShadow:2,className:u.loginBox},r.a.createElement("form",{className:u.center},r.a.createElement(j.a,{style:{fontWeight:"bold",fontSize:"1.5em"}},"Teacher Login"),r.a.createElement(w.a,{onChange:function(e){return c(e.target.value)},id:"standard-basic1",label:"Username",value:a,autoComplete:"on"}),r.a.createElement(w.a,{onChange:function(e){return s(e.target.value)},id:"standard-basic2",type:"password",label:"Password",value:i,autoComplete:"on"}),r.a.createElement(y.a,{pt:2},r.a.createElement(F,{onClick:function(){m({type:"LOGIN"}),function(e,t){return W.apply(this,arguments)}(a,i).then((function(e){d(e);var t=h();m({type:"LOGIN_SUCCESS",payload:t})})).catch((function(e){m({type:"LOGIN_FAILED"})}))},content:"Login"})))),r.a.createElement(R,null)),r.a.createElement("img",{style:{height:"5vh",padding:"0.5em"},src:"./images/arrowDown.svg",alt:""}),r.a.createElement(z,null))}var P=a(51),_=a(18),K="https://envolve-feedback.herokuapp.com";function H(e){var t=m();return fetch("".concat(K,"/api/classes"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(){return!0})).catch((function(){return!1}))}function J(){return(J=Object(L.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m(),e.next=3,fetch("".concat(K,"/api/classes/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 3:if(200===(n=e.sent).status){e.next=6;break}throw new Error("something went wrong!!!");case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(L.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m(),e.next=3,fetch("".concat(K,"/api/classes/class/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 3:if(200===(n=e.sent).status){e.next=6;break}throw new Error("something went wrong?");case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){var t=m();return fetch("".concat(K,"/api/classes/class/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(){return!0})).catch((function(){return!1}))}var M=a(630),Y=a(617),$=Object(Y.a)((function(e){return{newFont:{fontFamily:"'Open Sans', sans-serif;",fontWeight:"800"},wrapper:{backgroundColor:"#F7F7F7",width:"300px",maxWidth:"800px",borderRadius:"10px"}}}));function Z(e){var t=e.children,a=e.style,n=$();return r.a.createElement(y.a,{mt:4,p:3,style:a,boxShadow:2,className:C()(n.newFont,n.wrapper,n.backImg)},t)}var ee=E()((function(e){return{outer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"50vh"},inner:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},link:{textDecoration:"none",color:"white",textTransform:"none"}}}));function te(){var e=Object(G.b)(),t=ee(),a=r.a.useState(null),c=Object(O.a)(a,2),o=c[0],l=c[1],i=Boolean(o),s=i?"simple-popover":void 0,u=Object(n.useState)({username:"",password:"",confirmpassword:"",firstname:"",lastname:"",email:""}),m=Object(O.a)(u,2),f=m[0],g=m[1];function E(e){var t=e.target,a=t.name,n=t.value;g(Object(_.a)(Object(_.a)({},f),{},Object(P.a)({},a,n)))}return"SUCCESS"===Object(G.c)((function(e){return e.loggedUser})).authStatus?r.a.createElement(b.a,{to:"/overview"}):r.a.createElement(y.a,{className:t.inner},r.a.createElement(Z,{style:{padding:"3em 2.25em 4em 2.25em"}},r.a.createElement(y.a,{className:t.outer},r.a.createElement("h2",null,"Register"),r.a.createElement("form",null,r.a.createElement(y.a,{className:t.inner},r.a.createElement(w.a,{style:{width:"320px"},onChange:E,name:"username",label:"Username"}),r.a.createElement(y.a,null,r.a.createElement(w.a,{style:{width:"150px",margin:"10px"},onChange:E,name:"firstname",label:"Name"}),r.a.createElement(w.a,{style:{width:"150px",margin:"10px"},onChange:E,name:"lastname",label:"Lastname"})),r.a.createElement(w.a,{style:{width:"320px"},name:"email",onChange:E,label:"Email Address"}),r.a.createElement(w.a,{style:{width:"320px",margin:"10px"},type:"password",onChange:E,name:"password",label:"Password"}),r.a.createElement(w.a,{style:{width:"320px"},onChange:E,name:"confirmpassword",type:"password",label:"Confirm Password"}),r.a.createElement(y.a,{mt:5},r.a.createElement(F,{onClick:function(t){var a;t.preventDefault(),f.confirmpassword!==f.password?l(t.currentTarget):(a=f,fetch("".concat(K,"/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(200!==e.status)throw new Error("invalid response");return e.text()}))).then((function(t){d(t);var a=h();e({type:"LOGIN_SUCCESS",payload:a})})).catch((function(){e({type:"LOGIN_FAILED"})}))},disabled:f.username.length<2||f.firstname.length<2||f.lastname.length<2||f.password.length<2||f.email.length<2,content:"Register"}),f.confirmpassword!==f.password&&r.a.createElement(M.a,{id:s,open:i,anchorEl:o,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(j.a,{className:t.typography},"Passwords not matching"))))))),r.a.createElement(y.a,{pt:6,pb:2},r.a.createElement(S.a,null,r.a.createElement(p.b,{className:t.link,to:"/login"},"Back"))))}var ae=a(313),ne=a(618),re=Object(Y.a)((function(e){return{root:{display:"flex"}}}));function ce(){var e=re();return r.a.createElement("div",{className:e.root},r.a.createElement(ne.a,null))}function oe(e){var t=e.component,a=Object(ae.a)(e,["component"]),c=Object(G.c)((function(e){return e.loggedUser})),o=c.authStatus,l=c.userData,i=Object(G.b)();return Object(n.useEffect)((function(){"SUCCESS"===o&&(new Date).getTime()/1e3>=l.exp&&(f(),i({type:"LOGOUT"}))})),r.a.createElement(b.b,Object.assign({},a,{render:function(e){return"FAILED"!==o&&o?"SUCCESS"===o?(new Date).getTime()/1e3>=l.exp?r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}}):r.a.createElement(t,e):r.a.createElement(ce,null):r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var le=Object(Y.a)((function(e){return{link:{textDecoration:"none",color:"black",textTransform:"none",fontSize:"10px",padding:"0.4em"},center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},boxStyle:{width:"40%",height:"80px",borderRadius:"10px",background:"linear-gradient(to right top, #0071A0, #39A4D1)",border:"solid",borderWidth:"5px"},details:{color:"white",fontSize:"10px"},cNames:{color:"white",fontSize:"35px"}}}));function ie(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],c=t[1],o=le(),l=Object(G.c)((function(e){return e.loggedUser})).userData.sub;return Object(n.useEffect)((function(){(function(e){return J.apply(this,arguments)})(l).then((function(e){c(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{mt:2,key:a.id,className:o.center},a.map((function(e){return r.a.createElement(y.a,{mt:2,className:C()(o.boxStyle,o.center),boxShadow:6,key:e.id,m:1}," ",r.a.createElement(p.b,{className:C()(o.link,o.details),to:"/singleclass/".concat(e.id),key:a.id}," ",r.a.createElement(j.a,{style:{fontWeight:"800"},className:o.cNames},e.classname," ")))}))))}var se=a(4),ue=a(616),me=a(627),fe=Object(Y.a)((function(e){return{backImg:{background:"url(".concat("./images/diagonalNew.svg",")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100%"},newFont:{fontFamily:"'Open Sans', sans-serif;",fontWeight:"800"},wrapper:{backgroundColor:"#F7F7F7",width:"300px",maxWidth:"800px",borderRadius:"10px"}}}));function de(e){var t=e.children,a=e.style,n=fe();return r.a.createElement(y.a,{mt:4,p:3,style:a,boxShadow:2,className:C()(n.newFont,n.wrapper,n.backImg)},t)}var he=Object(Y.a)((function(e){return{center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},list:{width:250},fullList:{width:"auto"},centerRow:{display:"flex",justifyContent:"flex-start",alignItems:"center",border:"solid",padding:"1em",borderRadius:"15px",backgroundColor:"#F7F7F7"}}}));function pe(){var e=Object(b.g)(),t=function(){e.push("/creation")},a=Object(G.b)(),n=Object(G.c)((function(e){return e.loggedUser}));function c(){f(),a({type:"LOGOUT"})}var o,l=r.a.useState({bottom:!1}),i=Object(O.a)(l,2),s=i[0],u=i[1],m=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&u(Object(_.a)(Object(_.a)({},s),{},Object(P.a)({},e,t)))}},d=he();return r.a.createElement(y.a,{className:d.center},r.a.createElement(de,null,r.a.createElement("h1",null,"Heyho ",n.userData.firstname,"!"),r.a.createElement("h4",{style:{fontWeight:"600"}},"Check the latest survey results"),r.a.createElement(ie,null)),r.a.createElement("div",null," ",r.a.createElement(r.a.Fragment,{key:"bottom"},r.a.createElement(y.a,{m:3,onClick:m("bottom",!0)},r.a.createElement("img",{style:{height:"8vh"},src:"./images/menu.svg",alt:""})),r.a.createElement(me.a,{anchor:"bottom",open:s.bottom,onClose:m("bottom",!1),onOpen:m("bottom",!0)},(o="bottom",r.a.createElement("div",{className:Object(se.a)(d.list,Object(P.a)({},d.fullList,"top"===o||"bottom"===o)),role:"presentation",onClick:m(o,!1),onKeyDown:m(o,!1)},r.a.createElement(ue.a,null,r.a.createElement(y.a,{boxShadow:3,mt:2,className:d.centerRow,onClick:t},r.a.createElement("img",{src:"../images/plus.svg",alt:"",style:{height:"4vh"}}),r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Create Class")),r.a.createElement(y.a,{boxShadow:3,mt:2,className:d.centerRow,onClick:c},r.a.createElement("img",{src:"../images/logout.svg",alt:"",style:{height:"4vh"}}),r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Logout")))))))))}var be=Object(Y.a)((function(e){return{link:{textDecoration:"none",color:"white",textTransform:"none"}}}));function ge(){var e=be();return r.a.createElement(y.a,{pt:6,pb:2},r.a.createElement(S.a,null,r.a.createElement(p.b,{className:e.link,to:"/overview"},"Back")))}var Ee=Object(Y.a)((function(e){return{column:{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",justifyContent:"center"}}}));function ye(){var e=Ee(),t=Object(n.useState)(""),a=Object(O.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),i=Object(O.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(""),f=Object(O.a)(m,2),d=f[0],h=f[1],p=Object(n.useState)(!1),g=Object(O.a)(p,2),E=g[0],v=g[1],x=Object(n.useState)({classname:"",classmembers:[]}),S=Object(O.a)(x,2),k=S[0],C=S[1];function N(){return(N=Object(L.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(Object(_.a)(Object(_.a)({},k),{},{classname:d}));case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){C(Object(_.a)(Object(_.a)({},k),{},{classmembers:s}))}),[s]),E?r.a.createElement(b.a,{to:"/overview"}):r.a.createElement(y.a,{mt:3,className:e.column},r.a.createElement(Z,null,r.a.createElement("h4",null,"Classname"),r.a.createElement(w.a,{placeholder:"Enter Classname",onChange:function(e){return h(e.target.value)},value:d,required:!0}),r.a.createElement(y.a,{m:2},k.classmembers.map((function(e){return r.a.createElement(j.a,{key:e},e)}))),r.a.createElement(y.a,{mt:4},r.a.createElement("h4",null,"Students"),r.a.createElement(w.a,{onChange:function(e){return o(e.target.value)},value:c})),r.a.createElement(y.a,{mt:2},r.a.createElement(F,{onClick:function(){u(s.concat(c)),o("")},content:"Add new Student"})),r.a.createElement(y.a,{mt:4},r.a.createElement(F,{disabled:!(k.classname.length>=2||k.classmembers.length>=5),onClick:function(){return N.apply(this,arguments)},content:"Create"}))),r.a.createElement(ge,null))}var ve=function(e){var t=e.id,a=Object(n.useState)(null),c=Object(O.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){V(t).then((function(e){l(e)}))}),[]),r.a.createElement(y.a,null,o&&r.a.createElement(Z,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},o.classmembers.map((function(e){return r.a.createElement(j.a,{style:{margin:"0 0.5em 0 0.5em"},key:e.student},e.student," (",e.code,")")}))," "))},xe=a(310),Oe=a.n(xe),je=a(40),we=a(311),Se=a.n(we),ke="https://envolve-feedback.herokuapp.com";function Ce(e){var t=m();return fetch("".concat(ke,"/api/survey"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(){return!0})).catch((function(){return!1}))}function Ne(){return(Ne=Object(L.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ke,"/api/survey/").concat(t),{method:"GET"});case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(){return(Fe=Object(L.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m(),e.next=3,fetch("".concat(ke,"/api/survey/feedback/all/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 3:if(200===(n=e.sent).status){e.next=6;break}throw new Error("something went wrong!!!");case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Te=a(218),De=a.n(Te),Le=E()((function(e){return{stretch:{fontSize:"0.75em"}}})),Ie=function(e){var t=e.schoolClassId,a=Le(),c=Object(n.useState)([]),o=Object(O.a)(c,2),l=o[0],i=o[1],s=Object(n.useState)([]),u=Object(O.a)(s,2),m=u[0],f=u[1],d=Object(n.useState)([]),h=Object(O.a)(d,2),p=h[0],b=h[1],g=Object(n.useState)([]),E=Object(O.a)(g,2),v=E[0],x=E[1],w=Object(n.useState)([]),S=Object(O.a)(w,2),k=S[0],C=S[1],N=Object(n.useState)({data1:void 0,data2:void 0,data3:void 0}),F=Object(O.a)(N,2),T=F[0],D=F[1];Object(n.useEffect)((function(){var e=k.map((function(e,t){return{subject:e,A:p[t]}})),t=[];k.map((function(e){for(var a="",n=0;n<4;n++)a+=e[n].toUpperCase();t.push(a)}));var a=t.map((function(e,t){return{name:e,lastWeek:v[t],currentWeek:p[t]}})),n=m.map((function(e,t){return{name:"W".concat(t+1),uv:e,pv:1.3,amt:2}}));D({data1:e,data2:a,data3:n})}),[k]),Object(n.useEffect)((function(){(function(e){return Fe.apply(this,arguments)})(t).then((function(e){i(e.map((function(e){return Object(_.a)(Object(_.a)({},e),{},{localDate:new Date(e.localDate)})})))}))}),[]),Object(n.useEffect)((function(){if(l.length>0){for(var e=[],t=function(t){e.push(l.filter((function(e){return e.localDate.getTime()>(new Date).getTime()-7*(t+1)*24*60*60*1e3&&e.localDate.getTime()<(new Date).getTime()-7*t*24*60*60*1e3})))},a=0;a<5;a++)t(a);var n=[];l.map((function(e){e.questionList.map((function(e){n.push(e.keyWord)}))})),C(n),b(I(e[0])),x(I(e[1]));for(var r=[],c=0;c<e.length;c++)r.push(L(e[c]));f(r)}}),[l]);var L=function(e){for(var t=[],a=0;a<e.length;a++)for(var n=0;n<e[a].questionList.length;n++)t.push(e[a].questionList[n].response);return t.length>0?t.reduce((function(e,t){return e+t}))/t.length:null},I=function(e){for(var t=[[],[],[],[],[]],a=0;a<e.length;a++)for(var n=0;n<e[a].questionList.length;n++)t[n].push(e[a].questionList[n].response);for(var r=[],c=0;c<t.length;c++)r.push(W(t[c]));return r},W=function(e){for(var t=0,a=0;a<e.length;a++)t+=e[a];return t/e.length};return r.a.createElement(y.a,{color:"secondary",className:a.stretch},T.data1&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{style:{fontSize:"2.5em",fontWeight:"bold",padding:"0.25em",textAlign:"left"}},"LAST WEEK"),r.a.createElement(y.a,{mt:-3},r.a.createElement(Oe.a,{cx:140,cy:140,outerRadius:60,width:300,height:250,data:T.data1},r.a.createElement(je.g,null),r.a.createElement(je.f,{dataKey:"subject"}),r.a.createElement(De.a,{domain:[0,5]}),r.a.createElement(je.h,{name:"Mike",dataKey:"A",stroke:"#8884d8",fill:"#D9EFF9",fillOpacity:.6}))),r.a.createElement(y.a,{mt:4},r.a.createElement(j.a,{style:{fontSize:"2.5em",fontWeight:"bold",padding:"0.25em",textAlign:"left"}},"CHANGES"),r.a.createElement(y.a,{mt:2,ml:-6},r.a.createElement(Se.a,{width:350,height:300,data:T.data2,margin:{top:5,right:1,left:1,bottom:5}},r.a.createElement(je.d,{strokeDasharray:"3 3"}),r.a.createElement(je.i,{dataKey:"name"}),r.a.createElement(je.j,{domain:[0,5]}),r.a.createElement(je.e,null),r.a.createElement(je.c,{dataKey:"lastWeek",fill:"#39A4D1"}),r.a.createElement(je.c,{dataKey:"currentWeek",fill:"#82ca9d"})))),r.a.createElement(y.a,{mt:6},r.a.createElement(j.a,{style:{fontSize:"2.5em",fontWeight:"bold",padding:"0.25em",textAlign:"left"}},"OVERALL"),r.a.createElement(y.a,{mt:2,ml:-4},r.a.createElement(je.b,{width:350,height:300,data:T.data3,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(je.d,{strokeDasharray:"3 3"}),r.a.createElement(je.i,{dataKey:"name"}),r.a.createElement(je.j,{domain:[0,5]}),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"splitColor",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{stopColor:"green",stopOpacity:1}),r.a.createElement("stop",{stopColor:"#D9EFF9",stopOpacity:1}))),r.a.createElement(je.a,{type:"monotone",dataKey:"uv",stroke:"#000",fill:"url(#splitColor)"}))))))},We=Object(Y.a)((function(e){return{backImg:{background:"url(".concat("/images/steps.svg",")"),backgroundRepeat:"no-repeat",backgroundPosition:"50% 0px",height:"100%"},newFont:{fontFamily:"'Open Sans', sans-serif;",fontWeight:"800"},wrapper:{backgroundColor:"#F7F7F7",width:"300px",maxWidth:"800px",borderRadius:"10px"}}}));function qe(e){var t=e.children,a=e.style,n=We();return r.a.createElement(y.a,{mt:4,p:3,style:a,boxShadow:2,className:C()(n.newFont,n.wrapper,n.backImg)},t)}var ze=E()((function(e){return{root:{flexGrow:1},center:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},centerRow:{display:"flex",justifyContent:"flex-start",alignItems:"center",border:"solid",padding:"1em",borderRadius:"15px",backgroundColor:"#F7F7F7"},cName:{fontSize:"3em",fontWeight:"bold"},list:{width:250},fullList:{width:"auto"}}}));function Ae(){var e=Object(n.useState)({bottom:!1}),t=Object(O.a)(e,2),a=t[0],c=t[1],o=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&c(Object(_.a)(Object(_.a)({},a),{},Object(P.a)({},e,t)))}},l=ze(),i=Object(n.useState)(!1),s=Object(O.a)(i,2),u=s[0],m=s[1],f=Object(b.i)().id,d=Object(n.useState)(null),h=Object(O.a)(d,2),p=h[0],g=h[1],E=Object(n.useState)(!1),v=Object(O.a)(E,2),x=v[0],w=v[1];Object(n.useEffect)((function(){V(f).then((function(e){g(e)}))}),[]);var S=Object(b.g)(),k=function(){var e="/".concat(p.id);S.push(e)},C=function(){m(!0)},N=function(){m(!1)},F=function(){w(!0)},T=function(){var e=Object(L.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(f);case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(x)return r.a.createElement(b.a,{to:"/overview"});var I;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:l.center},p&&r.a.createElement(y.a,{mt:2}," ",r.a.createElement(j.a,{color:"secondary",className:l.cName},p.classname," ")),r.a.createElement(qe,null,r.a.createElement(Ie,{schoolClassId:f})),u?r.a.createElement(ve,{id:f}):null),r.a.createElement(y.a,{m:4}," ",r.a.createElement(r.a.Fragment,{key:"bottom"},r.a.createElement(y.a,{onClick:o("bottom",!0)},r.a.createElement("img",{style:{height:"8vh"},src:"/images/menu.svg",alt:""})),r.a.createElement(me.a,{anchor:"bottom",open:a.bottom,onClose:o("bottom",!1),onOpen:o("bottom",!0)},(I="bottom",r.a.createElement("div",{className:Object(se.a)(l.list,Object(P.a)({},l.fullList,"top"===I||"bottom"===I)),role:"presentation",onClick:o(I,!1),onKeyDown:o(I,!1)},r.a.createElement(ue.a,null,u?r.a.createElement(y.a,{boxShadow:3,mb:2,className:l.centerRow,onClick:N}," ",r.a.createElement("img",{style:{height:"4vh"},src:"../images/hide.svg",alt:""})," ",r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Hide Students")," "):r.a.createElement(y.a,{boxShadow:3,mb:2,className:l.centerRow,onClick:C}," ",r.a.createElement("img",{style:{height:"4vh"},src:"../images/classIcon.svg",alt:""})," ",r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Show Students")," "),r.a.createElement(y.a,{boxShadow:3,mt:2,className:l.centerRow,onClick:k},r.a.createElement("img",{src:"../images/survey.svg",alt:"",style:{height:"4vh"}}),r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Create Survey")),r.a.createElement(y.a,{boxShadow:3,mt:2,className:l.centerRow,onClick:T},r.a.createElement("img",{src:"../images/delete.svg",alt:"",style:{height:"4vh"}}),r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Delete Class")),r.a.createElement(y.a,{boxShadow:3,mt:2,className:l.centerRow,onClick:F},r.a.createElement("img",{src:"../images/back.svg",alt:"",style:{height:"4vh"}}),r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Overview")))))))))}var Re=Object(Y.a)((function(e){return{stickToBottom:{width:"100%",position:"fixed",bottom:0},footerProps:{height:"60px",display:"flex",justifyContent:"space-around",textTransform:"none"},link:{textDecoration:"none",color:"#F7F7F7",textTransform:"none"}}}));function Ge(){var e=Re();return r.a.createElement("div",{className:C()(e.stickToBottom,e.footerProps)},r.a.createElement(S.a,null,r.a.createElement(p.b,{className:e.link,to:"/"},"Terms")),r.a.createElement(S.a,null,r.a.createElement(p.b,{className:e.link,to:"/login"},"Teacher?")))}var Ue=E()((function(e){return{center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"65vh"},codeBox:{backgroundColor:"#F7F7F7",borderRadius:"5px"}}}));function Be(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],o=Ue();console.log(a);var l=Object(b.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o.center},r.a.createElement(y.a,{p:5,boxShadow:3,style:{boxShadow:"#FFFFF"},className:o.codeBox},r.a.createElement("form",null,r.a.createElement(j.a,{color:"primary",style:{fontWeight:"bold",fontSize:"1.5em"}},"Start Survey"),r.a.createElement(y.a,{mt:2},r.a.createElement(w.a,{onChange:function(e){return c(e.target.value)},value:a,id:"outlined-basic",label:"Enter Code",variant:"outlined"}))),r.a.createElement(y.a,{mt:4},r.a.createElement(F,{style:{fontSize:"1em"},content:"Start",onClick:function(){var e="/answer/".concat(a);l.push(e)}})))),r.a.createElement(Ge,null))}var Pe=a(619),_e=a(620),Ke=a(621),He=a(631),Je=a(622),Ve=a(623),Qe=a(624),Xe=E()((function(e){return{root:{flexGrow:1},center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},headline:{fontSize:"2em"},headlinetwo:{fontSize:"1.25em",fontWeight:"bold"}}}));function Me(){var e=Xe(),t=Object(b.i)().id,a=Object(n.useState)(null),c=Object(O.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(!1),s=Object(O.a)(i,2),u=s[0],m=s[1],f=Object(n.useState)({questionText:"",keyWord:"",response:0}),d=Object(O.a)(f,2),h=d[0],p=d[1],g=Object(n.useState)([]),E=Object(O.a)(g,2),v=E[0],x=E[1],S=Object(n.useState)({schoolClassId:"",questionList:[]}),k=Object(O.a)(S,2),C=k[0],N=k[1];function T(e){var t=e.target,a=t.name,n=t.value;p(Object(_.a)(Object(_.a)({},h),{},Object(P.a)({},a,n)))}var I=function(){var e=Object(L.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce(Object(_.a)(Object(_.a)({},C),{},{schoolClassId:o.id}));case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N(Object(_.a)(Object(_.a)({},C),{},{questionList:v}))}),[v]),Object(n.useEffect)((function(){V(t).then((function(e){l(e)}))}),[]),u?r.a.createElement(b.a,{to:"/overview"}):(console.log(C),r.a.createElement(y.a,{color:"secondary",className:e.center},o&&r.a.createElement(j.a,{className:e.headline,color:"secondary"}," Create Survey - ",r.a.createElement("b",null,o.classname)),r.a.createElement(Pe.a,{container:!0,spacing:2,className:e.center},r.a.createElement(Pe.a,{item:!0,xs:12,md:6},r.a.createElement(Z,null,r.a.createElement(j.a,{className:e.headlinetwo,color:"primary"},"Questionlist"),r.a.createElement(ue.a,null,v&&v.map((function(e,t){return r.a.createElement(_e.a,{key:v.id},r.a.createElement(Ke.a,null,r.a.createElement(He.a,{style:{backgroundColor:"#272635"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"4vh"}},t+1))),r.a.createElement(Je.a,{key:v.id,primary:e.questionText}),r.a.createElement(y.a,{m:2},r.a.createElement(Ve.a,{key:v.id},r.a.createElement(Qe.a,{edge:"end","aria-label":"delete"},r.a.createElement("img",{src:"../images/delete.svg",alt:"",style:{height:"2vh"}})))))}))),r.a.createElement(y.a,{className:e.center},r.a.createElement(w.a,{onChange:T,id:"standard-basic1",label:"Question",name:"questionText",value:h.questionText,autoComplete:"on"}),r.a.createElement(y.a,null,r.a.createElement(w.a,{onChange:T,id:"standard-basic2",label:"Keyword",name:"keyWord",value:h.keyWord,autoComplete:"on"}),r.a.createElement("img",{src:"../images/question2.svg",alt:"",style:{height:"2vh"}})),r.a.createElement(F,{style:{marginTop:"20px"},onClick:function(){x(v.concat(h)),p({questionText:"",keyWord:"",response:0})},content:"Add question"}))))),r.a.createElement(y.a,{mt:2}," ",r.a.createElement(F,{style:{fontSize:"2em"},content:"Create",onClick:I})),r.a.createElement(ge,null)))}var Ye=a(222),$e=a(632),Ze=a(625);function et(e){return r.a.createElement(y.a,{display:"flex",alignItems:"center"},r.a.createElement(y.a,{width:"100%",mr:1},r.a.createElement(Ze.a,Object.assign({variant:"determinate"},e))),r.a.createElement(y.a,{minWidth:35},r.a.createElement(j.a,{variant:"body2",color:"textSecondary"},"".concat(Math.round(e.value),"%"))))}var tt=Object(Y.a)({root:{width:"100%"}});function at(e){var t=e.progressVal,a=tt();return r.a.createElement("div",{className:a.root},r.a.createElement(et,{value:t}))}var nt=Object(Y.a)({center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},qHeadline:{fontSize:"1.25em",textAlign:"left",fontWeight:"normal"},q:{fontSize:"1.5em",textAlign:"left",fontWeight:"bold"}}),rt=function(){var e=nt(),t=Object(b.i)().id,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(0),s=Object(O.a)(i,2),u=s[0],m=s[1],f=Object(n.useState)([]),d=Object(O.a)(f,2),h=d[0],p=d[1],g=Object(n.useState)(3),E=Object(O.a)(g,2),v=E[0],x=E[1];Object(n.useEffect)((function(){(function(e){return Ne.apply(this,arguments)})(t).then((function(e){e?l(e):k()}))}),[]);var w=Object(b.g)(),S=function(){w.push("/thankyou")},k=function(){w.push("/nosurvey")},C=function(){var e=Object(L.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t,fetch("".concat(ke,"/api/survey/feedback"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(){return!0})).catch((function(){return!1}));case 2:a=e.sent,console.log(a);case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),N=[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}];return console.log(o),r.a.createElement(y.a,{className:e.center,mt:4},r.a.createElement(y.a,null),r.a.createElement(Z,null,r.a.createElement(y.a,{mb:1,className:e.qHeadline},"Question ",u+1),o.questionList&&r.a.createElement(at,{progressVal:u/o.questionList.length*100}),o.questionList&&r.a.createElement(j.a,{className:e.q}," ",o.questionList[u].questionText),r.a.createElement(y.a,{my:5},r.a.createElement($e.a,{min:1,max:5,onChange:function(e,t){x(t)},value:v,valueLabelFormat:function(e){return N.findIndex((function(t){return t.value===e}))+1},getAriaValueText:function(e){return"".concat(e)},"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:N}),r.a.createElement(y.a,{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(j.a,{id:"discrete-slider-restrict",gutterBottom:!0},"very low"),r.a.createElement(j.a,{id:"discrete-slider-restrict",gutterBottom:!0},"very high"))),o.questionList&&u<o.questionList.length-1?r.a.createElement(F,{className:e.q,content:"Next Question",onClick:function(){p([].concat(Object(Ye.a)(h),[{questionText:o.questionList[u].questionText,keyWord:o.questionList[u].keyWord,response:v}])),x(3),m(u+1)}}):r.a.createElement(F,{className:e.q,onClick:function(){var e=[].concat(Object(Ye.a)(h),[{questionText:o.questionList[u].questionText,keyWord:o.questionList[u].keyWord,response:v}]);C({studentCode:t,questionList:e}).then(S)},content:"Finish"})))},ct=a(174),ot=a.n(ct),lt=Object(Y.a)((function(e){return{backImg:{background:"url(".concat("./images/diagonal2.svg",")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100%"},newFont:{fontFamily:"'Open Sans', sans-serif;",fontWeight:"800"},wrapper:{backgroundColor:"#F7F7F7",width:"300px",maxWidth:"800px",borderRadius:"10px"}}}));function it(e){var t=e.children,a=e.style,n=lt();return r.a.createElement(y.a,{mt:4,p:3,style:a,boxShadow:2,className:C()(n.newFont,n.wrapper,n.backImg)},t)}var st=ot()({center:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}});function ut(){var e=st();return r.a.createElement(y.a,{className:e.center},r.a.createElement(it,{style:{fontSize:"2em"}},r.a.createElement(j.a,{style:{fontSize:"1.4em",fontWeight:"bold"}},"See you soon!"),r.a.createElement(j.a,null,"Thank you for completing the survey")),r.a.createElement(y.a,{mt:5}," ",r.a.createElement(j.a,{style:{color:"white",fontSize:"0.75em"}},"You can close this window now")))}var mt=ot()({center:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}});function ft(){var e=mt();return r.a.createElement(y.a,{className:e.center,mt:6},r.a.createElement(it,{style:{fontSize:"2em",padding:"1.5em 0.5em"}},r.a.createElement(j.a,{style:{fontSize:"1.4em",fontWeight:"bold"}},"See you soon!"),r.a.createElement(j.a,null,"It looks like there's currently no survey for you")),r.a.createElement(y.a,{mt:5}," ",r.a.createElement(j.a,{style:{color:"white",fontSize:"0.75em"}},"You can close this window now")))}function dt(){var e=Object(G.b)();return Object(n.useEffect)((function(){!function(){if(!m())return!1;var e=h();return(new Date).getTime()/1e3<e.exp}()?e({type:"LOGIN_FAILED"}):e({type:"LOGIN_SUCCESS",payload:h()})}),[e]),r.a.createElement(y.a,null,r.a.createElement(p.a,null,r.a.createElement(x,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/login",component:B,exact:!0}),r.a.createElement(b.b,{path:"/register",component:te}),r.a.createElement(b.b,{path:"/answer/:id",component:rt,exact:!0}),r.a.createElement(b.b,{path:"/thankyou",component:ut,exact:!0}),r.a.createElement(b.b,{path:"/nosurvey",component:ft,exact:!0}),r.a.createElement(oe,{path:"/overview",component:pe,exact:!0}),r.a.createElement(oe,{path:"/creation",component:ye,exact:!0}),r.a.createElement(oe,{path:"/singleclass/:id",component:Ae,exact:!0}),r.a.createElement(oe,{path:"/:id",component:Me,exact:!0}),r.a.createElement(b.b,{path:"/"},r.a.createElement(Be,null)))))}var ht=Object(l.a)({palette:{primary:{main:"#272635"},secondary:{main:"#F7F7F7"}},typography:{fontFamily:["Josefin Sans","sans-serif"].join(",")}});var pt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{theme:ht},r.a.createElement(dt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var bt=a(104),gt={authStatus:"PENDING"};var Et=Object(bt.b)({loggedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(_.a)(Object(_.a)({},e),{},{authStatus:"PENDING"});case"LOGIN_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{authStatus:"SUCCESS",userData:t.payload});case"LOGIN_FAILED":return Object(_.a)(Object(_.a)({},e),{},{authStatus:"FAILED"});case"LOGOUT":return{};default:return e}}}),yt=Object(bt.c)(Et,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(G.a,{store:yt},r.a.createElement(pt,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[345,1,2]]]);
//# sourceMappingURL=main.7d920274.chunk.js.map