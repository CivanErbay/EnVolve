(this.webpackJsonpenvolve=this.webpackJsonpenvolve||[]).push([[0],{346:function(e,t,a){e.exports=a(581)},351:function(e,t,a){},352:function(e,t,a){},581:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(351),a(352),a(313)),i=a(613),s=a(353),u="teacher-token";function m(){return localStorage.getItem(u)}function d(){return localStorage.removeItem(u)}function f(e){return localStorage.setItem(u,e)}function p(){var e=m();return s(e)}var h=a(24),b=a(27),g=a(29),E=a.n(g),v=a(630),y=E()((function(e){return{link:{textDecoration:"none",color:"black"},image:{width:"100%",maxWidth:"550px"}}}));function x(){var e=y();return r.a.createElement(v.a,{px:2},r.a.createElement("div",null,r.a.createElement(h.b,{className:e.link,to:"/"},r.a.createElement("img",{className:e.image,src:"/images/logo.svg",alt:""}))))}var O=a(12),j=a(176),w=a(627),k=a(614),S=a(6),C=a.n(S),N=E()((function(e){return{buttonStyle:{textTransform:"none",background:"rgba(57,164,209)",color:"white",fontWeight:"bold"}}}));function F(e){var t=e.className,a=e.disabled,n=e.content,c=e.onClick,o=e.style,l=N();return r.a.createElement(k.a,{className:C()(l.buttonStyle,t),disabled:a,onClick:c,style:o,variant:"contained"},n)}var D=a(22),T=a.n(D),L=a(38),I="https://envolve-feedback.herokuapp.com";function W(){return(W=Object(L.a)(T.a.mark((function e(t,a){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a})});case 2:if(200===(n=e.sent).status){e.next=5;break}throw new Error("failed to login: ".concat(n.statusText));case 5:return e.next=7,n.text();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=a(615),z=E()((function(e){return{about:{backgroundImage:"url(".concat("./images/greenback3.svg",")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",minHeight:"100%",display:"flex",flexDirection:"column",alignItems:"center"},aboutSmall:{minHeight:"100%",display:"flex",flexDirection:"column",alignItems:"center"},headline:{fontSize:"4.5em",color:"#F7F7F7"},textTypo:{textAlign:"left",padding:"1em",fontSize:"1rem",lineHeight:"1.75"}}})),A=function(){var e=z(),t=Object(q.a)("(min-width:600px)");return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{pb:2,className:t?e.aboutSmall:e.about},r.a.createElement(j.a,{className:e.headline},"About"),r.a.createElement(v.a,{px:3,py:4,m:5,boxShadow:3,style:{maxWidth:"600px",backgroundColor:"#F7F7F7"}},r.a.createElement("img",{style:{height:"25vh"},src:"./images/twoPersons.png",alt:""}),r.a.createElement(j.a,{className:e.textTypo},r.a.createElement("span",{style:{letterSpacing:"-2.25px",fontSize:"1.5em",lineHeight:".75",fontWeight:"bold"}},"Envolve ")," is an app to ",r.a.createElement("b",null,"improve communication between students and their teachers "),".",r.a.createElement("br",null)," The approach is to establish a ",r.a.createElement("b",null,"continuous student-side feedback loop")," to allow students to share their interests, ideas, wishes, criticisms and so on.",r.a.createElement("br",null),"Based on this information, the teacher can ",r.a.createElement("b",null," design lessons in the interest of the students "),", thereby increasing their motivation to learn and ultimately improving the quality of learning."))))},R=E()((function(e){return{buttonStyle:{textTransform:"none",background:"rgba(57,164,209)",color:"white",fontWeight:"bold",borderRadius:"5px"},link:{textTransform:"none",textDecoration:"none",color:"white"}}})),G=function(){var e=R();return r.a.createElement(v.a,null,r.a.createElement(j.a,{color:"secondary",style:{fontWeight:"bold"}},"Not yet registered?"),r.a.createElement(v.a,{mt:2,boxShadow:2,p:1,className:e.buttonStyle},r.a.createElement(h.b,{className:e.link,to:"/register"},"Create Account")))},U=a(35),B=E()((function(e){return{centerPage:{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column",height:"70vh"},center:{display:"flex",flexDirection:"column"},loginBox:{padding:"1.5em",borderRadius:"5px",borderWidth:"1px",width:"250px",background:"#F7F7F7"}}}));function P(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(O.a)(o,2),i=l[0],s=l[1],u=B(),m=Object(U.b)();var d=Object(U.c)((function(e){return e.loggedUser})).authStatus,h=Object(b.h)();if("SUCCESS"===d){var g=h.state||{from:{pathname:"/overview"}};return r.a.createElement(b.a,{to:g.from.pathname})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{mt:5,className:u.centerPage},r.a.createElement(v.a,{boxShadow:2,className:u.loginBox},r.a.createElement("form",{className:u.center},r.a.createElement(j.a,{style:{fontWeight:"bold",fontSize:"1.5em"}},"Teacher Login"),r.a.createElement(w.a,{onChange:function(e){return c(e.target.value)},id:"standard-basic1",label:"Username",value:a,autoComplete:"on"}),r.a.createElement(w.a,{onChange:function(e){return s(e.target.value)},id:"standard-basic2",type:"password",label:"Password",value:i,autoComplete:"on"}),r.a.createElement(v.a,{pt:2},r.a.createElement(F,{onClick:function(){m({type:"LOGIN"}),function(e,t){return W.apply(this,arguments)}(a,i).then((function(e){f(e);var t=p();m({type:"LOGIN_SUCCESS",payload:t})})).catch((function(e){m({type:"LOGIN_FAILED"})}))},content:"Login"})))),r.a.createElement(G,null)),r.a.createElement("img",{style:{height:"5vh",padding:"0.5em"},src:"./images/arrowDown.svg",alt:""}),r.a.createElement(A,null))}var _=a(52),H=a(18),K="https://envolve-feedback.herokuapp.com";function J(e){var t=m();return fetch("".concat(K,"/api/classes"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(){return!0})).catch((function(){return!1}))}function M(){return(M=Object(L.a)(T.a.mark((function e(t){var a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m(),e.next=3,fetch("".concat(K,"/api/classes/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 3:if(200===(n=e.sent).status){e.next=6;break}throw new Error("something went wrong!!!");case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(L.a)(T.a.mark((function e(t){var a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m(),e.next=3,fetch("".concat(K,"/api/classes/class/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 3:if(200===(n=e.sent).status){e.next=6;break}throw new Error("something went wrong?");case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){var t=m();return fetch("".concat(K,"/api/classes/class/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(){return!0})).catch((function(){return!1}))}var Y=a(631),$=a(618),Z=Object($.a)((function(e){return{newFont:{fontFamily:"'Open Sans', sans-serif;",fontWeight:"800"},wrapper:{backgroundColor:"#F7F7F7",width:"300px",maxWidth:"800px",borderRadius:"10px"}}}));function ee(e){var t=e.children,a=e.style,n=Z();return r.a.createElement(v.a,{mt:4,p:3,style:a,boxShadow:2,className:C()(n.newFont,n.wrapper,n.backImg)},t)}var te=E()((function(e){return{outer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"50vh"},inner:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},link:{textDecoration:"none",color:"white",textTransform:"none"}}}));function ae(){var e=Object(U.b)(),t=te(),a=r.a.useState(null),c=Object(O.a)(a,2),o=c[0],l=c[1],i=Boolean(o),s=i?"simple-popover":void 0,u=Object(n.useState)({username:"",password:"",confirmpassword:"",firstname:"",lastname:"",email:""}),m=Object(O.a)(u,2),d=m[0],g=m[1];function E(e){var t=e.target,a=t.name,n=t.value;g(Object(H.a)(Object(H.a)({},d),{},Object(_.a)({},a,n)))}return"SUCCESS"===Object(U.c)((function(e){return e.loggedUser})).authStatus?r.a.createElement(b.a,{to:"/overview"}):r.a.createElement(v.a,{className:t.inner},r.a.createElement(ee,{style:{padding:"3em 2.25em 4em 2.25em"}},r.a.createElement(v.a,{className:t.outer},r.a.createElement("h2",null,"Register"),r.a.createElement("form",null,r.a.createElement(v.a,{className:t.inner},r.a.createElement(w.a,{style:{width:"320px"},onChange:E,name:"username",label:"Username"}),r.a.createElement(v.a,null,r.a.createElement(w.a,{style:{width:"150px",margin:"10px"},onChange:E,name:"firstname",label:"Name"}),r.a.createElement(w.a,{style:{width:"150px",margin:"10px"},onChange:E,name:"lastname",label:"Lastname"})),r.a.createElement(w.a,{style:{width:"320px"},name:"email",onChange:E,label:"Email Address"}),r.a.createElement(w.a,{style:{width:"320px",margin:"10px"},type:"password",onChange:E,name:"password",label:"Password"}),r.a.createElement(w.a,{style:{width:"320px"},onChange:E,name:"confirmpassword",type:"password",label:"Confirm Password"}),r.a.createElement(v.a,{mt:5},r.a.createElement(F,{onClick:function(t){var a;t.preventDefault(),d.confirmpassword!==d.password?l(t.currentTarget):(a=d,fetch("".concat(K,"/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(200!==e.status)throw new Error("invalid response");return e.text()}))).then((function(t){f(t);var a=p();e({type:"LOGIN_SUCCESS",payload:a})})).catch((function(){e({type:"LOGIN_FAILED"})}))},disabled:d.username.length<2||d.firstname.length<2||d.lastname.length<2||d.password.length<2||d.email.length<2,content:"Register"}),d.confirmpassword!==d.password&&r.a.createElement(Y.a,{id:s,open:i,anchorEl:o,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(j.a,{className:t.typography},"Passwords not matching"))))))),r.a.createElement(v.a,{pt:6,pb:2},r.a.createElement(k.a,null,r.a.createElement(h.b,{className:t.link,to:"/login"},"Back"))))}var ne=a(314),re=a(619),ce=Object($.a)((function(e){return{root:{display:"flex"}}}));function oe(){var e=ce();return r.a.createElement("div",{className:e.root},r.a.createElement(re.a,null))}function le(e){var t=e.component,a=Object(ne.a)(e,["component"]),c=Object(U.c)((function(e){return e.loggedUser})),o=c.authStatus,l=c.userData,i=Object(U.b)();return Object(n.useEffect)((function(){"SUCCESS"===o&&(new Date).getTime()/1e3>=l.exp&&(d(),i({type:"LOGOUT"}))})),r.a.createElement(b.b,Object.assign({},a,{render:function(e){return"FAILED"!==o&&o?"SUCCESS"===o?(new Date).getTime()/1e3>=l.exp?r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}}):r.a.createElement(t,e):r.a.createElement(oe,null):r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var ie=Object($.a)((function(e){return{link:{textDecoration:"none",color:"black",textTransform:"none",fontSize:"10px",padding:"0.4em"},center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},boxStyle:{width:"40%",height:"80px",borderRadius:"10px",background:"linear-gradient(to right top, #0071A0, #39A4D1)",border:"solid",borderWidth:"5px"},details:{color:"white",fontSize:"10px"},cNames:{color:"white",fontSize:"35px"}}}));function se(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],c=t[1],o=ie(),l=Object(U.c)((function(e){return e.loggedUser})).userData.sub;return Object(n.useEffect)((function(){(function(e){return M.apply(this,arguments)})(l).then((function(e){c(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{mt:2,key:a.id,className:o.center},a.map((function(e){return r.a.createElement(v.a,{mt:2,className:C()(o.boxStyle,o.center),boxShadow:6,key:e.id,m:1}," ",r.a.createElement(h.b,{className:C()(o.link,o.details),to:"/singleclass/".concat(e.id),key:a.id}," ",r.a.createElement(j.a,{style:{fontWeight:"800"},className:o.cNames},e.classname," ")))}))))}var ue=a(4),me=a(617),de=a(628),fe=Object($.a)((function(e){return{backImg:{background:"url(".concat("./images/diagonalNew.svg",")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100%"},newFont:{fontFamily:"'Open Sans', sans-serif;",fontWeight:"800"},wrapper:{backgroundColor:"#F7F7F7",width:"300px",maxWidth:"800px",borderRadius:"10px"}}}));function pe(e){var t=e.children,a=e.style,n=fe();return r.a.createElement(v.a,{mt:4,p:3,style:a,boxShadow:2,className:C()(n.newFont,n.wrapper,n.backImg)},t)}var he=Object($.a)((function(e){return{center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},list:{width:250},fullList:{width:"auto"},centerRow:{display:"flex",justifyContent:"flex-start",alignItems:"center",border:"solid",padding:"1em",borderRadius:"15px",cursor:"pointer",backgroundColor:"#F7F7F7"}}}));function be(){var e=Object(b.g)(),t=function(){e.push("/creation")},a=Object(U.b)(),n=Object(U.c)((function(e){return e.loggedUser}));function c(){d(),a({type:"LOGOUT"})}var o,l=r.a.useState({bottom:!1}),i=Object(O.a)(l,2),s=i[0],u=i[1],m=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&u(Object(H.a)(Object(H.a)({},s),{},Object(_.a)({},e,t)))}},f=he();return r.a.createElement(v.a,{className:f.center},r.a.createElement(pe,null,r.a.createElement("h1",null,"Hello ",n.userData.firstname,"!"),r.a.createElement("h4",null,"Check your latest survey results"),r.a.createElement(se,null)),r.a.createElement("div",null," ",r.a.createElement(r.a.Fragment,{key:"bottom"},r.a.createElement(v.a,{m:5,onClick:m("bottom",!0)},r.a.createElement("img",{style:{height:"8vh"},src:"./images/menu.svg",alt:""})),r.a.createElement(de.a,{anchor:"bottom",open:s.bottom,onClose:m("bottom",!1),onOpen:m("bottom",!0)},(o="bottom",r.a.createElement("div",{className:Object(ue.a)(f.list,Object(_.a)({},f.fullList,"top"===o||"bottom"===o)),role:"presentation",onClick:m(o,!1),onKeyDown:m(o,!1)},r.a.createElement(me.a,null,r.a.createElement(v.a,{boxShadow:3,mt:2,className:f.centerRow,onClick:t},r.a.createElement("img",{src:"../images/plus.svg",alt:"",style:{height:"4vh"}}),r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Create Class")),r.a.createElement(v.a,{boxShadow:3,mt:2,className:f.centerRow,onClick:c},r.a.createElement("img",{src:"../images/logout.svg",alt:"",style:{height:"4vh"}}),r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Logout")))))))))}var ge=Object($.a)((function(e){return{link:{textDecoration:"none",color:"white",textTransform:"none"}}}));function Ee(){var e=ge();return r.a.createElement(v.a,{pt:6,pb:2},r.a.createElement(k.a,null,r.a.createElement(h.b,{className:e.link,to:"/overview"},"Back")))}var ve=Object($.a)((function(e){return{column:{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",justifyContent:"center"}}}));function ye(){var e=ve(),t=Object(n.useState)(""),a=Object(O.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),i=Object(O.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(""),d=Object(O.a)(m,2),f=d[0],p=d[1],h=Object(n.useState)(!1),g=Object(O.a)(h,2),E=g[0],y=g[1],x=Object(n.useState)({classname:"",classmembers:[]}),k=Object(O.a)(x,2),S=k[0],C=k[1];function N(){return(N=Object(L.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(Object(H.a)(Object(H.a)({},S),{},{classname:f}));case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){C(Object(H.a)(Object(H.a)({},S),{},{classmembers:s}))}),[s]),E?r.a.createElement(b.a,{to:"/overview"}):r.a.createElement(v.a,{mt:3,className:e.column},r.a.createElement(ee,null,r.a.createElement("h4",null,"Classname"),r.a.createElement(w.a,{placeholder:"Enter Classname",onChange:function(e){return p(e.target.value)},value:f,required:!0}),r.a.createElement(v.a,{m:2},S.classmembers.map((function(e){return r.a.createElement(j.a,{key:e},e)}))),r.a.createElement(v.a,{mt:4},r.a.createElement("h4",null,"Students"),r.a.createElement(w.a,{onChange:function(e){return o(e.target.value)},value:c})),r.a.createElement(v.a,{mt:2},r.a.createElement(F,{onClick:function(){u(s.concat(c)),o("")},content:"Add new Student"})),r.a.createElement(v.a,{mt:4},r.a.createElement(F,{disabled:!(S.classname.length>=2||S.classmembers.length>=5),onClick:function(){return N.apply(this,arguments)},content:"Create"}))),r.a.createElement(Ee,null))}var xe=function(e){var t=e.id,a=Object(n.useState)(null),c=Object(O.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){V(t).then((function(e){l(e)}))}),[]),r.a.createElement(v.a,null,o&&r.a.createElement(ee,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},o.classmembers.map((function(e){return r.a.createElement(j.a,{style:{margin:"0 0.5em 0 0.5em"},key:e.student},e.student," (",e.code,")")}))," "))},Oe=a(311),je=a.n(Oe),we=a(40),ke=a(312),Se=a.n(ke),Ce="https://envolve-feedback.herokuapp.com";function Ne(e){var t=m();return fetch("".concat(Ce,"/api/survey"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(){return!0})).catch((function(){return!1}))}function Fe(){return(Fe=Object(L.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Ce,"/api/survey/").concat(t),{method:"GET"});case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function De(){return(De=Object(L.a)(T.a.mark((function e(t){var a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m(),e.next=3,fetch("".concat(Ce,"/api/survey/feedback/all/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 3:if(200===(n=e.sent).status){e.next=6;break}throw new Error("something went wrong!!!");case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Te=a(218),Le=a.n(Te),Ie=function(e){for(var t=0,a=0;a<e.length;a++)t+=e[a];return t/e.length},We=function(e){for(var t=[[],[],[],[],[]],a=0;a<e.length;a++)for(var n=0;n<e[a].questionList.length;n++)t[n].push(e[a].questionList[n].response);for(var r=[],c=0;c<t.length;c++)r.push(Ie(t[c]));return r},qe=function(e){for(var t=[],a=0;a<e.length;a++)for(var n=0;n<e[a].questionList.length;n++)t.push(e[a].questionList[n].response);return t.length>0?t.reduce((function(e,t){return e+t}))/t.length:null},ze=E()((function(e){return{center:{display:"flex",flexDirection:"column",height:"100%",alignItems:"center",justifyContent:"center"},graphHeadlineMobile:{fontSize:"2em",fontWeight:"bold",padding:"0.25em",textAlign:"left"},graphHeadlineDesktop:{fontSize:"3em",fontWeight:"bold",padding:"0.25em",textAlign:"center"}}})),Ae=function(e){var t=e.schoolClassId,a=ze(),c=Object(n.useState)([]),o=Object(O.a)(c,2),l=o[0],i=o[1],s=Object(n.useState)([]),u=Object(O.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)([]),p=Object(O.a)(f,2),h=p[0],b=p[1],g=Object(n.useState)([]),E=Object(O.a)(g,2),y=E[0],x=E[1],w=Object(n.useState)([]),k=Object(O.a)(w,2),S=k[0],C=k[1],N=Object(n.useState)({data1:void 0,data2:void 0,data3:void 0}),F=Object(O.a)(N,2),D=F[0],T=F[1];Object(n.useEffect)((function(){var e=S.map((function(e,t){return{subject:e,A:h[t]}})),t=[];S.map((function(e){for(var a="",n=0;n<4;n++)a+=e[n].toUpperCase();t.push(a)}));var a=t.map((function(e,t){return{name:e,lastWeek:y[t],currentWeek:h[t]}})),n=m.map((function(e,t){return{name:"W".concat(t+1),uv:e,pv:1.3,amt:2}}));T({data1:e,data2:a,data3:n})}),[S]),Object(n.useEffect)((function(){(function(e){return De.apply(this,arguments)})(t).then((function(e){i(e.map((function(e){return Object(H.a)(Object(H.a)({},e),{},{localDate:new Date(e.localDate)})})))}))}),[]),Object(n.useEffect)((function(){if(l.length>0){var e=[];console.log(e);for(var t=function(t){e.push(l.filter((function(e){return e.localDate.getTime()>(new Date).getTime()-7*(t+1)*24*60*60*1e3&&e.localDate.getTime()<(new Date).getTime()-7*t*24*60*60*1e3})))},a=0;a<5;a++)t(a);var n=[];l[0].questionList.map((function(e){n.push(e.keyWord)})),C(n),b(We(e[0])),x(We(e[1]));for(var r=[],c=0;c<e.length;c++)r.push(qe(e[c]));d(r)}}),[l]);var L=Object(q.a)("(min-width:800px)");return r.a.createElement(v.a,{mt:2,color:"secondary",className:a.center},D.data1&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{mt:-3},r.a.createElement(j.a,{className:L?a.graphHeadlineDesktop:a.graphHeadlineMobile},"LAST WEEK"),r.a.createElement(je.a,{cx:L?380:150,cy:L?220:110,outerRadius:L?200:70,width:L?750:300,height:L?450:225,data:D.data1},r.a.createElement(we.g,null),r.a.createElement(we.f,{dataKey:"subject"}),r.a.createElement(Le.a,{domain:[0,5]}),r.a.createElement(we.h,{name:"Mike",dataKey:"A",stroke:"#8884d8",fill:"#D9EFF9",fillOpacity:.6}))),r.a.createElement(v.a,{mt:6},r.a.createElement(j.a,{className:L?a.graphHeadlineDesktop:a.graphHeadlineMobile},"CHANGES"),r.a.createElement(v.a,{mt:2,ml:-6},r.a.createElement(Se.a,{width:L?700:350,height:L?475:300,data:D.data2,margin:{top:5,right:1,left:1,bottom:5}},r.a.createElement(we.d,{strokeDasharray:"3 3"}),r.a.createElement(we.i,{dataKey:"name"}),r.a.createElement(we.j,{domain:[0,5]}),r.a.createElement(we.e,null),r.a.createElement(we.c,{dataKey:"lastWeek",fill:"#39A4D1"}),r.a.createElement(we.c,{dataKey:"currentWeek",fill:"#82ca9d"})))),r.a.createElement(v.a,{mt:L?8:6},r.a.createElement(j.a,{className:L?a.graphHeadlineDesktop:a.graphHeadlineMobile},"OVERALL"),r.a.createElement(v.a,{mt:2,ml:-4},r.a.createElement(we.b,{width:L?700:350,height:L?475:300,data:D.data3,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(we.d,{strokeDasharray:"3 3"}),r.a.createElement(we.i,{dataKey:"name"}),r.a.createElement(we.j,{domain:[0,5]}),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"splitColor",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{stopColor:"green",stopOpacity:1}),r.a.createElement("stop",{stopColor:"#D9EFF9",stopOpacity:1}))),r.a.createElement(we.a,{type:"monotone",dataKey:"uv",stroke:"#000",fill:"url(#splitColor)"}))))))},Re=Object($.a)((function(e){return{wrapperMobile:{backgroundColor:"#F7F7F7",width:"300px",background:"url(".concat("/images/steps.svg",")"),backgroundRepeat:"no-repeat",backgroundPosition:"50% 0px",height:"100%"},wrapperDesktop:{backgroundColor:"#F7F7F7",width:"80%",maxWidth:"800px",borderRadius:"10px",background:"url(".concat("/images/stepsBig.svg",")"),backgroundRepeat:"no-repeat",backgroundPosition:"50% 0px",height:"100%"}}}));function Ge(e){var t=e.children,a=e.style,n=Re(),c=Object(q.a)("(min-width:800px)");return r.a.createElement(v.a,{mt:4,p:3,style:a,boxShadow:2,className:C()(c?n.wrapperDesktop:n.wrapperMobile)},t)}var Ue=E()((function(e){return{root:{flexGrow:1},center:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},centerRow:{display:"flex",justifyContent:"flex-start",alignItems:"center",border:"solid",padding:"1em",borderRadius:"15px",backgroundColor:"#F7F7F7",cursor:"pointer"},cName:{fontSize:"3em",fontWeight:"bold"},list:{width:250},fullList:{width:"auto"}}}));function Be(){var e=Object(n.useState)({bottom:!1}),t=Object(O.a)(e,2),a=t[0],c=t[1],o=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&c(Object(H.a)(Object(H.a)({},a),{},Object(_.a)({},e,t)))}},l=Ue(),i=Object(n.useState)(!1),s=Object(O.a)(i,2),u=s[0],m=s[1],d=Object(b.i)().id,f=Object(n.useState)(null),p=Object(O.a)(f,2),h=p[0],g=p[1],E=Object(n.useState)(!1),y=Object(O.a)(E,2),x=y[0],w=y[1];Object(n.useEffect)((function(){V(d).then((function(e){g(e)}))}),[]);var k=Object(b.g)(),S=function(){var e="/".concat(h.id);k.push(e)},C=function(){m(!0)},N=function(){m(!1)},F=function(){w(!0)},D=function(){var e=Object(L.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(d);case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(x)return r.a.createElement(b.a,{to:"/overview"});var I;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:l.center},h&&r.a.createElement(v.a,{mt:2}," ",r.a.createElement(j.a,{color:"secondary",className:l.cName},h.classname," ")),r.a.createElement(Ge,null,r.a.createElement(Ae,{schoolClassId:d})),u?r.a.createElement(xe,{id:d}):null),r.a.createElement(v.a,{m:6}," ",r.a.createElement(r.a.Fragment,{key:"bottom"},r.a.createElement(v.a,{onClick:o("bottom",!0)},r.a.createElement("img",{style:{height:"8vh"},src:"/images/menu.svg",alt:""})),r.a.createElement(de.a,{anchor:"bottom",open:a.bottom,onClose:o("bottom",!1),onOpen:o("bottom",!0)},(I="bottom",r.a.createElement("div",{className:Object(ue.a)(l.list,Object(_.a)({},l.fullList,"top"===I||"bottom"===I)),role:"presentation",onClick:o(I,!1),onKeyDown:o(I,!1)},r.a.createElement(me.a,null,u?r.a.createElement(v.a,{boxShadow:3,mb:2,className:l.centerRow,onClick:N}," ",r.a.createElement("img",{style:{height:"4vh"},src:"../images/hide.svg",alt:""})," ",r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Hide Students")," "):r.a.createElement(v.a,{boxShadow:3,mb:2,className:l.centerRow,onClick:C}," ",r.a.createElement("img",{style:{height:"4vh"},src:"../images/classIcon.svg",alt:""})," ",r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Show Students")," "),r.a.createElement(v.a,{boxShadow:3,mt:2,className:l.centerRow,onClick:S},r.a.createElement("img",{src:"../images/survey.svg",alt:"",style:{height:"4vh"}}),r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Create Survey")),r.a.createElement(v.a,{boxShadow:3,mt:2,className:l.centerRow,onClick:D},r.a.createElement("img",{src:"../images/delete.svg",alt:"",style:{height:"4vh"}}),r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Delete Class")),r.a.createElement(v.a,{boxShadow:3,mt:2,className:l.centerRow,onClick:F},r.a.createElement("img",{src:"../images/back.svg",alt:"",style:{height:"4vh"}}),r.a.createElement(j.a,{style:{marginLeft:"5px"}},"Overview")))))))))}var Pe=Object($.a)((function(e){return{stickToBottom:{width:"100%",position:"fixed",bottom:0},footerProps:{height:"60px",display:"flex",justifyContent:"space-around",textTransform:"none"},link:{textDecoration:"none",color:"#F7F7F7",textTransform:"none"}}}));function _e(){var e=Pe();return r.a.createElement("div",{className:C()(e.stickToBottom,e.footerProps)},r.a.createElement(k.a,null,r.a.createElement(h.b,{className:e.link,to:"/"},"Terms")),r.a.createElement(k.a,null,r.a.createElement(h.b,{className:e.link,to:"/login"},"Teacher?")))}var He=E()((function(e){return{center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"65vh"},codeBox:{backgroundColor:"#F7F7F7",borderRadius:"5px"}}}));function Ke(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],o=He();console.log(a);var l=Object(b.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o.center},r.a.createElement(v.a,{p:5,boxShadow:3,style:{boxShadow:"#FFFFF"},className:o.codeBox},r.a.createElement("form",null,r.a.createElement(j.a,{color:"primary",style:{fontWeight:"bold",fontSize:"1.5em"}},"Start Survey"),r.a.createElement(v.a,{mt:2},r.a.createElement(w.a,{onChange:function(e){return c(e.target.value)},value:a,id:"outlined-basic",label:"Enter Code",variant:"outlined"}))),r.a.createElement(v.a,{mt:4},r.a.createElement(F,{style:{fontSize:"1em"},content:"Start",onClick:function(){var e="/answer/".concat(a);l.push(e)}})))),r.a.createElement(_e,null))}var Je=a(620),Me=a(621),Ve=a(622),Qe=a(632),Xe=a(623),Ye=a(624),$e=a(625),Ze=Object($.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function et(e){var t=e.popoverContent,a=Ze(),n=r.a.useState(null),c=Object(O.a)(n,2),o=c[0],l=c[1],i=Boolean(o),s=i?"simple-popover":void 0;return r.a.createElement("div",null,r.a.createElement(v.a,{"aria-describedby":s,onClick:function(e){l(e.currentTarget)}},r.a.createElement("img",{src:"../images/info.svg",alt:"",style:{height:"3.5vh"}})),r.a.createElement(Y.a,{id:s,open:i,anchorEl:o,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(j.a,{className:a.typography},t)))}var tt=E()((function(e){return{root:{flexGrow:1},center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},headline:{fontSize:"2em",marginTop:"1em"},headlinetwo:{fontSize:"1.25em",fontWeight:"bold"}}}));function at(){var e=tt(),t=Object(b.i)().id,a=Object(n.useState)(null),c=Object(O.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(!1),s=Object(O.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)({questionText:"",keyWord:"",response:0}),f=Object(O.a)(d,2),p=f[0],h=f[1],g=Object(n.useState)([]),E=Object(O.a)(g,2),y=E[0],x=E[1],k=Object(n.useState)({schoolClassId:"",questionList:[]}),S=Object(O.a)(k,2),C=S[0],N=S[1];function D(e){var t=e.target,a=t.name,n=t.value;h(Object(H.a)(Object(H.a)({},p),{},Object(_.a)({},a,n)))}var I=function(){var e=Object(L.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne(Object(H.a)(Object(H.a)({},C),{},{schoolClassId:o.id}));case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N(Object(H.a)(Object(H.a)({},C),{},{questionList:y}))}),[y]),Object(n.useEffect)((function(){V(t).then((function(e){l(e)}))}),[]),u?r.a.createElement(b.a,{to:"/overview"}):r.a.createElement(v.a,{color:"secondary",className:e.center},o&&r.a.createElement(j.a,{className:e.headline,color:"secondary"}," Create Survey - ",r.a.createElement("b",null,o.classname)),r.a.createElement(Je.a,{container:!0,spacing:2,className:e.center},r.a.createElement(Je.a,{item:!0,xs:12,md:6},r.a.createElement(ee,null,r.a.createElement(j.a,{className:e.headlinetwo,color:"primary"},"Questionlist"),r.a.createElement(me.a,null,y&&y.map((function(e,t){return r.a.createElement(Me.a,{key:y.id},r.a.createElement(Ve.a,null,r.a.createElement(Qe.a,{style:{backgroundColor:"#272635"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"4vh"}},t+1))),r.a.createElement(Xe.a,{key:y.id,primary:e.questionText}),r.a.createElement(v.a,{m:2},r.a.createElement(Ye.a,{key:y.id},r.a.createElement($e.a,{edge:"end","aria-label":"delete"},r.a.createElement("img",{src:"../images/delete.svg",alt:"",style:{height:"2vh"}})))))}))),r.a.createElement(v.a,{className:e.center},r.a.createElement(w.a,{onChange:D,id:"standard-basic1",label:"Question",name:"questionText",value:p.questionText,autoComplete:"on"}),r.a.createElement(v.a,{ml:-6,style:{display:"flex",alignItems:"flex-end"}},r.a.createElement(v.a,{mr:3},r.a.createElement(et,{popoverContent:"Please add a descriptive keyword each question"})),r.a.createElement(w.a,{onChange:D,id:"standard-basic2",label:"Keyword",name:"keyWord",value:p.keyWord,autoComplete:"on"})),r.a.createElement(F,{style:{marginTop:"20px"},onClick:function(){x(y.concat(p)),h({questionText:"",keyWord:"",response:0})},content:"Add question"}))))),r.a.createElement(v.a,{mt:2}," ",r.a.createElement(F,{style:{fontSize:"2em"},content:"Create",onClick:I})),r.a.createElement(Ee,null))}var nt=a(222),rt=a(633),ct=a(626);function ot(e){return r.a.createElement(v.a,{display:"flex",alignItems:"center"},r.a.createElement(v.a,{width:"100%",mr:1},r.a.createElement(ct.a,Object.assign({variant:"determinate"},e))),r.a.createElement(v.a,{minWidth:35},r.a.createElement(j.a,{variant:"body2",color:"textSecondary"},"".concat(Math.round(e.value),"%"))))}var lt=Object($.a)({root:{width:"100%"}});function it(e){var t=e.progressVal,a=lt();return r.a.createElement("div",{className:a.root},r.a.createElement(ot,{value:t}))}var st=Object($.a)({center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},qHeadline:{fontSize:"1.25em",textAlign:"left",fontWeight:"normal"},q:{fontSize:"1.5em",textAlign:"left",fontWeight:"bold"}}),ut=function(){var e=st(),t=Object(b.i)().id,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(0),s=Object(O.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)([]),f=Object(O.a)(d,2),p=f[0],h=f[1],g=Object(n.useState)(3),E=Object(O.a)(g,2),y=E[0],x=E[1];Object(n.useEffect)((function(){(function(e){return Fe.apply(this,arguments)})(t).then((function(e){e?l(e):S()}))}),[]);var w=Object(b.g)(),k=function(){w.push("/thankyou")},S=function(){w.push("/nosurvey")},C=function(){var e=Object(L.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t,fetch("".concat(Ce,"/api/survey/feedback"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(){return!0})).catch((function(){return!1}));case 2:a=e.sent,console.log(a);case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),N=[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}];return console.log(o),r.a.createElement(v.a,{className:e.center,mt:4},r.a.createElement(v.a,null),r.a.createElement(ee,null,r.a.createElement(v.a,{mb:1,className:e.qHeadline},"Question ",u+1),o.questionList&&r.a.createElement(it,{progressVal:u/o.questionList.length*100}),o.questionList&&r.a.createElement(j.a,{className:e.q}," ",o.questionList[u].questionText),r.a.createElement(v.a,{my:5},r.a.createElement(rt.a,{min:1,max:5,onChange:function(e,t){x(t)},value:y,valueLabelFormat:function(e){return N.findIndex((function(t){return t.value===e}))+1},getAriaValueText:function(e){return"".concat(e)},"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:N}),r.a.createElement(v.a,{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(j.a,{id:"discrete-slider-restrict",gutterBottom:!0},"very low"),r.a.createElement(j.a,{id:"discrete-slider-restrict",gutterBottom:!0},"very high"))),o.questionList&&u<o.questionList.length-1?r.a.createElement(F,{className:e.q,content:"Next Question",onClick:function(){h([].concat(Object(nt.a)(p),[{questionText:o.questionList[u].questionText,keyWord:o.questionList[u].keyWord,response:y}])),x(3),m(u+1)}}):r.a.createElement(F,{className:e.q,onClick:function(){var e=[].concat(Object(nt.a)(p),[{questionText:o.questionList[u].questionText,keyWord:o.questionList[u].keyWord,response:y}]);C({studentCode:t,questionList:e}).then(k)},content:"Finish"})))},mt=a(174),dt=a.n(mt),ft=Object($.a)((function(e){return{backImg:{background:"url(".concat("./images/diagonal2.svg",")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100%"},newFont:{fontFamily:"'Open Sans', sans-serif;",fontWeight:"800"},wrapper:{backgroundColor:"#F7F7F7",width:"300px",maxWidth:"800px",borderRadius:"10px"}}}));function pt(e){var t=e.children,a=e.style,n=ft();return r.a.createElement(v.a,{mt:4,p:3,style:a,boxShadow:2,className:C()(n.newFont,n.wrapper,n.backImg)},t)}var ht=dt()({center:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}});function bt(){var e=ht();return r.a.createElement(v.a,{className:e.center},r.a.createElement(pt,{style:{fontSize:"2em"}},r.a.createElement(j.a,{style:{fontSize:"1.4em",fontWeight:"bold"}},"See you soon!"),r.a.createElement(j.a,null,"Thank you for completing the survey")),r.a.createElement(v.a,{mt:5}," ",r.a.createElement(j.a,{style:{color:"white",fontSize:"0.75em"}},"You can close this window now")))}var gt=dt()({center:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}});function Et(){var e=gt();return r.a.createElement(v.a,{className:e.center,mt:6},r.a.createElement(pt,{style:{fontSize:"2em",padding:"1.5em 0.5em"}},r.a.createElement(j.a,{style:{fontSize:"1.4em",fontWeight:"bold"}},"See you soon!"),r.a.createElement(j.a,null,"It looks like there's currently no survey for you")),r.a.createElement(v.a,{mt:5}," ",r.a.createElement(j.a,{style:{color:"white",fontSize:"0.75em"}},"You can close this window now")))}function vt(){var e=Object(U.b)();return Object(n.useEffect)((function(){!function(){if(!m())return!1;var e=p();return(new Date).getTime()/1e3<e.exp}()?e({type:"LOGIN_FAILED"}):e({type:"LOGIN_SUCCESS",payload:p()})}),[e]),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(x,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/login",component:P,exact:!0}),r.a.createElement(b.b,{path:"/register",component:ae}),r.a.createElement(b.b,{path:"/answer/:id",component:ut,exact:!0}),r.a.createElement(b.b,{path:"/thankyou",component:bt,exact:!0}),r.a.createElement(b.b,{path:"/nosurvey",component:Et,exact:!0}),r.a.createElement(le,{path:"/overview",component:be,exact:!0}),r.a.createElement(le,{path:"/creation",component:ye,exact:!0}),r.a.createElement(le,{path:"/singleclass/:id",component:Be,exact:!0}),r.a.createElement(le,{path:"/:id",component:at,exact:!0}),r.a.createElement(b.b,{path:"/"},r.a.createElement(Ke,null)))))}var yt=Object(l.a)({palette:{primary:{main:"#272635"},secondary:{main:"#F7F7F7"}},typography:{fontFamily:["Josefin Sans","sans-serif"].join(",")}});var xt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{theme:yt},r.a.createElement(vt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ot=a(104),jt={authStatus:"PENDING"};var wt=Object(Ot.b)({loggedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(H.a)(Object(H.a)({},e),{},{authStatus:"PENDING"});case"LOGIN_SUCCESS":return Object(H.a)(Object(H.a)({},e),{},{authStatus:"SUCCESS",userData:t.payload});case"LOGIN_FAILED":return Object(H.a)(Object(H.a)({},e),{},{authStatus:"FAILED"});case"LOGOUT":return{};default:return e}}}),kt=Object(Ot.c)(wt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(U.a,{store:kt},r.a.createElement(xt,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[346,1,2]]]);
//# sourceMappingURL=main.e06e8437.chunk.js.map