(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(15),s=a.n(r),l=a(9),o=a(3),i=Object(n.createContext)(),u=Object(n.createContext)(),j=a(0),d=function(e){e.title;var t=e.icon,a=Object(n.useContext)(i),c=Object(n.useContext)(u),r=a.isAuthenticated,s=a.logout,o=a.user,d=c.clearContacts,p=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("li",{style:{marginRight:"10px"},children:["Hello ",o&&o.firstName]}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#!",onClick:function(){s(),d()},children:[Object(j.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(j.jsx)("span",{className:"hide-sm",children:"Logout"})]})})]}),b=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/register",children:"Register"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/login",children:"Login"})})]});return Object(j.jsxs)("div",{className:"navbar bg-primary",children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("i",{className:t})," ","File-O-Fax"]}),Object(j.jsxs)("ul",{children:[r?p:b,Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/about",children:"About"})})]})]})};d.defaultProps={title:"Title Place-holder",icon:"fas fa-exclamation-triangle"};var p=d,b=a(65),h=a(63),O={float:"right"},m=function(e){var t=e.contact,a=Object(n.useContext)(u),c=t._id,r=t.firstName,s=t.lastName,l=t.email,o=t.telephone,i=t.contactType,d=void 0===i?"personal":i,p=a.deleteContact,b=a.setCurrentContact,h=a.clearCurrentContact;return Object(j.jsxs)("div",{className:"card bg-light",children:[Object(j.jsxs)("h3",{className:"text-primary text-left",children:[r," ",s,Object(j.jsx)("span",{style:O,className:"badge-success",children:d.charAt(0).toUpperCase()+d.slice(1)})]}),Object(j.jsxs)("ul",{className:"list",children:[l&&Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-envelope-open"})," ",l]}),o&&Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-phone"})," ",o]})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("button",{className:"btn btn-dark btn-sm",onClick:function(){return b(t)},children:"Edit"}),Object(j.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return function(){var e="".concat(c.substring(c.length-7));return prompt("You must confirm that you would like to delete this contact. Please type, or, copy & paste the "+"following id into the field and select enter to continue with removal\n\n\t ".concat(e))===e?(p(c),h(),null):alert("Contact was not deleted.")}()},children:"Delete"})]})]},c)},x=a.p+"static/media/spinner.5271b348.gif",f={width:"200px",margin:"auto",display:"block"},g=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("img",{src:x,alt:"Loading...",style:f})})},y=function(){var e=Object(n.useContext)(u),t=e.contacts,a=e.filtered,c=e.getAllContacts,r=e.loading;return Object(n.useEffect)((function(){c()}),[]),null===t||0!==t.length||r?Object(j.jsx)(j.Fragment,{children:r||null===t?Object(j.jsx)(g,{}):Object(j.jsx)(b.a,{children:null!==a?a.map((function(e){return Object(j.jsx)(h.a,{timeout:500,className:"item",children:Object(j.jsx)(m,{contact:e})},e._id)})):t.map((function(e){return Object(j.jsx)(h.a,{timeout:500,className:"item",children:Object(j.jsx)(m,{contact:e})},e._id)}))})}):Object(j.jsx)("h4",{children:"Please Create A Contact To Start A List!"})},v=a(11),C=a(2),N=a(4),T=function(e){var t=Object(n.useContext)(u),a=t.addContact,c=t.current,r=t.clearCurrentContact,s=t.updateContact,l=Object(n.useState)({firstName:"",lastName:"",company:"",birthday:"",notes:"",email:"",telephone:"",url:"",contactType:"personal"}),o=Object(N.a)(l,2),i=o[0],d=o[1];Object(n.useEffect)((function(){d(null!==c?c:{firstName:"",lastName:"",company:"",birthday:"",notes:"",email:"",telephone:"",url:"",contactType:"personal"})}),[t,c]);var p=i.firstName,b=i.lastName,h=i.company,O=i.birthday,m=i.notes,x=i.url,f=i.email,g=i.telephone,y=i.contactType,T=function(e){return d(Object(C.a)(Object(C.a)({},i),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c?s(i):a(i),d({firstName:"",lastName:"",company:"",birthday:"",notes:"",email:"",telephone:"",url:"",contactType:"personal"})},children:[Object(j.jsx)("h2",{className:"text-primary",children:c?"Update Contact":"New Contact"}),Object(j.jsx)("input",{type:"text",placeholder:"John",name:"firstName",value:p,onChange:T}),Object(j.jsx)("input",{type:"text",placeholder:"Hammond",name:"lastName",value:b,onChange:T}),Object(j.jsx)("input",{type:"text",placeholder:"Jurassic Park",name:"company",value:h,onChange:T}),Object(j.jsx)("input",{type:"text",placeholder:"Date Of Birth - MM/DD/YYYY",name:"birthday",value:O,onChange:T}),Object(j.jsx)("input",{type:"email",placeholder:"jhammond@jurassic.park",name:"email",value:f,onChange:T}),Object(j.jsx)("input",{type:"text",placeholder:"+009 411 5555",name:"telephone",value:g,onChange:T}),Object(j.jsx)("input",{type:"text",placeholder:"https://jurassic.park",name:"url",value:x,onChange:T}),Object(j.jsx)("h5",{children:"Notes"}),Object(j.jsx)("input",{type:"text",placeholder:"Additional Notes Or Information",name:"notes",value:m,onChange:T}),Object(j.jsx)("h5",{children:"Contact Type"}),Object(j.jsx)("input",{type:"radio",name:"contactType",value:"personal",checked:"personal"===y,onChange:T})," ","Personal"," ",Object(j.jsx)("input",{type:"radio",name:"contactType",value:"professional",checked:"professional"===y,onChange:T})," ","Professional"," ",Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"submit",value:c?"Update Contact":"Create Contact",className:"btn btn-primary btn-block"})}),c&&Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn btn-light btn-block",onClick:function(){r()},children:"Clear"})})]})},k=function(){var e=Object(n.useRef)(),t=Object(n.useContext)(u),a=t.filterContacts,c=t.clearFilter,r=t.filtered;Object(n.useEffect)((function(){null===r&&(e.current.value="")}));return Object(j.jsx)("form",{children:Object(j.jsx)("input",{ref:e,type:"text",placeholder:"Filter Contacts...",onChange:function(t){""!==e.current.value?a(t.target.value):c()}})})},w=function(){var e=Object(n.useContext)(i).loadUser;return Object(n.useEffect)((function(){e()}),[]),Object(j.jsxs)("div",{className:"grid-2",children:[Object(j.jsx)("div",{children:Object(j.jsx)(T,{})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{}),Object(j.jsx)(y,{})]})]})},E=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"About The Application"}),Object(j.jsx)("p",{children:"This is a Full-Stack MERN App inspired by the File-O-Fax concept..."}),Object(j.jsxs)("p",{className:"bg-dark p",children:[Object(j.jsx)("strong",{children:"Version:"})," ","1.0.0"]})]})},A=Object(n.createContext)(),R=function(e){var t=Object(n.useContext)(i),a=Object(n.useContext)(A),c=Object(n.useState)({firstName:"",middleInitial:"",lastName:"",email:"",password:"",password_confirmation:""}),r=Object(N.a)(c,2),s=r[0],l=r[1],u=a.setAlert,d=t.register,p=t.error,b=t.clearErrors,h=t.isAuthenticated,O=Object(o.g)();Object(n.useEffect)((function(){if(h)return O("/");p&&(u(p,"danger"),b())}),[p,h]);var m=s.firstName,x=s.middleInitial,f=s.lastName,g=s.email,y=s.password_confirmation,T=s.password,k=function(e){return l(Object(C.a)(Object(C.a)({},s),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsxs)("h1",{children:["Account ",Object(j.jsx)("span",{className:"text-primary",children:"Register"})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===g||""===T?u("Please enter all fields","danger"):T!==y?u("Passwords Do Not Match"):d({firstName:m,middleInitial:x,lastName:f,email:g,password:T})},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(j.jsx)("input",{type:"text",name:"firstName",value:m,onChange:k})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"middleInitial",children:"Middle Initial"}),Object(j.jsx)("input",{type:"text",name:"middleInitial",value:x,onChange:k})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(j.jsx)("input",{type:"text",name:"lastName",value:f,onChange:k})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(j.jsx)("input",{type:"email",name:"email",value:g,onChange:k})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",value:T,onChange:k})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password_confirmation",children:"Password Confirmation"}),Object(j.jsx)("input",{type:"password",name:"password_confirmation",value:y,onChange:k})]}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"submit",value:"Register Account",className:"btn btn-primary btn-block"})})]})]})},S=function(){var e=Object(n.useContext)(A),t=Object(n.useContext)(i),a=Object(o.g)(),c=e.setAlert,r=t.login,s=t.error,l=t.clearErrors,u=t.isAuthenticated;Object(n.useEffect)((function(){if(u)return a("/");s&&(c(s,"danger"),l())}),[s,u]);var d=Object(n.useState)({email:"",password:"",tokenRequestType:"public"}),p=Object(N.a)(d,2),b=p[0],h=p[1],O=b.email,m=b.password,x=b.tokenRequestType,f=function(e){return h(Object(C.a)(Object(C.a)({},b),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsxs)("h1",{children:["Account ",Object(j.jsx)("span",{className:"text-primary",children:"Login"})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===O||""===m?c("Please fill in all fields","danger"):r({email:O,password:m})},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(j.jsx)("input",{type:"email",name:"email",value:O,onChange:f})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",value:m,onChange:f})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("h5",{children:"Authentication Token Type"}),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("input",{type:"radio",name:"tokenRequestType",value:"public",checked:"public"===x,onChange:f})," ","Secure"," ",Object(j.jsx)("input",{type:"radio",name:"tokenRequestType",value:"private",checked:"private"===x,onChange:f})," ","Semi-Secure"," "]}),Object(j.jsxs)("small",{children:["public"===x&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)("strong",{children:"On a public computer or un-trusted network?"})}),"Keep the default selection when logging in. The effect is that your login session times will only be valid for 5 minutes prior to auto-logout out of the application."]}),"private"===x&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)("strong",{children:"Connecting from a trusted network like your home or secure device?"})}),"Select the Semi-Secure option for a generous 8 hours of session time. This is not necessary nor really recommended: simply provided for your (insecure) convenience.",Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"img/lazy-guard.gif",alt:"Lazy Security Guard Gif",style:{width:"25%",height:"200px"}})})]})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary btn-block"})})]})]})},F=function(e){var t=Object(n.useContext)(A);return t.alerts.length>0&&t.alerts.map((function(e){return Object(j.jsxs)("div",{className:"alert alert-".concat(e.type),children:[Object(j.jsx)("i",{className:"fas fa-info-circle"})," ",e.msg]},e.id)}))};var _=function(e){var t=e.children,a=Object(n.useContext)(i),c=a.isAuthenticated,r=a.loading;return c||r?t:Object(j.jsx)(o.a,{to:"/login"})},L=a(5),I=a.n(L),D=a(10),P=a(8),U=a.n(P),G=a(21),M="GET_CONTACTS",Y="CLEAR_CONTACTS",q="ADD_CONTACT",H="UPDATE_CONTACT",J="DELETE_CONTACT",B="CONTACT_ERROR",z="SET_CURRENT",V="CLEAR_CURRENT",K="FILTER_CONTACTS",Q="CLEAR_FILTER",W="SET_ALERT",X="REMOVE_ALERT",Z="REGISTER_SUCCESS",$="REGISTER_FAIL",ee="USER_LOADED",te="AUTH_ERROR",ae="LOGIN_SUCCESS",ne="LOGIN FAILURE",ce="LOGOUT",re="CLEAR_ERRORS",se=function(e,t){switch(t.type){case M:return Object(C.a)(Object(C.a)({},e),{},{contacts:t.payload,loading:!1});case Y:return Object(C.a)(Object(C.a)({},e),{},{contacts:null,filtered:null,contact:null,error:null});case q:return Object(C.a)(Object(C.a)({},e),{},{contacts:[t.payload].concat(Object(G.a)(e.contacts)),loading:!1});case H:return Object(C.a)(Object(C.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===t.payload._id?t.payload:e})),loading:!1});case J:return console.log("contacts are: ",e.contacts),Object(C.a)(Object(C.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.payload})),loading:!1});case z:return Object(C.a)(Object(C.a)({},e),{},{current:t.payload,loading:!1});case V:return Object(C.a)(Object(C.a)({},e),{},{current:null,loading:!1});case K:return Object(C.a)(Object(C.a)({},e),{},{filtered:e.contacts.filter((function(e){var a=new RegExp("".concat(t.payload),"gi");return e.firstName.match(a)||e.lastName.match(a)||e.email.match(a)})),loading:!1});case Q:return Object(C.a)(Object(C.a)({},e),{},{filtered:null,loading:!1});case B:return Object(C.a)(Object(C.a)({},e),{},{error:t.payload,loading:!1});default:return e}},le=function(e){var t=Object(n.useReducer)(se,{contacts:null,current:null,error:null,filtered:null}),a=Object(N.a)(t,2),c=a[0],r=a[1],s=function(){var e=Object(D.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("/api/contacts");case 3:t=e.sent,console.log("res is: ",t),r({type:M,payload:t.data.results}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r({type:B,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(D.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,U.a.post("/api/contacts",t,a);case 4:n=e.sent,console.log("FROM ADD CONTACT: ",n),r({type:q,payload:n.data.results}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),r({type:B,payload:e.t0});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(D.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,U.a.put("/api/contacts/".concat(t._id),t,a);case 4:n=e.sent,r({type:H,payload:n.data.results}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),r({type:B,payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(D.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("INSIDE DELETE"),e.prev=1,e.next=4,U.a.delete("/api/contacts/".concat(t));case 4:r({type:J,payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r({type:B,payload:e.t0});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(u.Provider,{value:{contacts:c.contacts,current:c.current,error:c.error,filtered:c.filtered,getAllContacts:s,clearContacts:function(){r({type:Y})},addContact:l,updateContact:o,deleteContact:i,setCurrentContact:function(e){r({type:z,payload:e})},clearCurrentContact:function(){r({type:V})},filterContacts:function(e){r({type:K,payload:e})},clearFilter:function(){r({type:Q})}},children:e.children})},oe=function(e,t){switch(t.type){case ee:return Object(C.a)(Object(C.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});case Z:case ae:return localStorage.setItem("autoken",t.payload.token),Object(C.a)(Object(C.a)(Object(C.a)({},e),t.payload),{},{isAuthenticated:!0,loading:!1});case $:case ne:case te:case ce:return localStorage.removeItem("autoken"),Object(C.a)(Object(C.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null,error:t.payload});case re:return Object(C.a)(Object(C.a)({},e),{},{error:null});default:return e}},ie=function(e){e?U.a.defaults.headers.common["x-auth-token"]=e:delete U.a.defaults.headers.common["x-auth-token"]},ue=function(e){var t={token:localStorage.getItem("autoken"),isAuthenticated:null,user:null,loading:!0,error:null},a=Object(n.useReducer)(oe,t),c=Object(N.a)(a,2),r=c[0],s=c[1],l=function(){var e=Object(D.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.autoken&&ie(localStorage.autoken),e.prev=1,e.next=4,U.a.get("/api/auth");case 4:t=e.sent,s({type:ee,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:te});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(D.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,U.a.post("/api/users",t,a);case 4:return n=e.sent,s({type:Z,payload:n.data}),e.next=8,l();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),s({type:$,payload:e.t0.response.data.msg||"Unspecified Register Error"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(D.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,U.a.post("/api/auth",t,a);case 4:return n=e.sent,s({type:ae,payload:n.data}),e.next=8,l();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),s({type:ne,payload:e.t0.response.data.msg||"Unspecified Register Error"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(i.Provider,{value:{token:r.token,isAuthenticated:r.isAuthenticated,loading:r.loading,user:r.user,error:r.error,loadUser:l,login:u,logout:function(){return s({type:ce})},register:o,clearErrors:function(){return s({type:re})}},children:e.children})},je=a(64),de=function(e,t){switch(t.type){case W:return[].concat(Object(G.a)(e),[t.payload]);case X:return e.filter((function(e){return e.id!==t.payload}));default:return e}},pe=function(e){var t=Object(n.useReducer)(de,[]),a=Object(N.a)(t,2),c=a[0],r=a[1];return Object(j.jsx)(A.Provider,{value:{alerts:c,setAlert:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,n=Object(je.a)();r({type:W,payload:{msg:e,type:t,id:n}}),setTimeout((function(){return r({type:X,payload:n})}),a)}},children:e.children})};a(59);localStorage.autoken&&ie(localStorage.autoken);var be=function(){return Object(j.jsx)(ue,{children:Object(j.jsx)(le,{children:Object(j.jsx)(pe,{children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(F,{}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/",element:Object(j.jsx)(_,{children:Object(j.jsx)(w,{})})}),Object(j.jsx)(o.b,{path:"/about",element:Object(j.jsx)(E,{})}),Object(j.jsx)(o.b,{path:"/register",element:Object(j.jsx)(R,{})}),Object(j.jsx)(o.b,{path:"/login",element:Object(j.jsx)(S,{})})]})]})]})})})})})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(be,{})}),document.getElementById("root")),he()}},[[60,1,2]]]);
//# sourceMappingURL=main.8ade7c6b.chunk.js.map