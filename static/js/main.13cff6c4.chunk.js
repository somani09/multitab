(this.webpackJsonpudayy_assignment=this.webpackJsonpudayy_assignment||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){},67:function(e,t){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),i=n(9),l=n.n(i),o=(n(38),n(8)),r=n(15),j=n(18),u=(n(12),n(39),n(2)),d=(n(40),n(11));var m=function(e){e.isLoggedIn,e.setIsLoggedIn;var t=Object(c.useState)(""),n=Object(o.a)(t,2),s=(n[0],n[1]),i=Object(c.useState)(""),l=Object(o.a)(i,2),m=(l[0],l[1]),b=Object(c.useState)(""),x=Object(o.a)(b,2),h=x[0],O=x[1],f=Object(c.useState)(""),g=Object(o.a)(f,2),p=g[0],v=g[1],w=Object(c.useState)({user:"",pass:""}),N=Object(o.a)(w,2),k=N[0],y=N[1];function L(e){y(Object(j.a)(Object(j.a)({},k),{},Object(r.a)({},e.target.name,e.target.value)))}var I=document.cookie.split("=");return console.log(I[1]),"true"==I[1]?Object(a.jsx)(u.a,{to:"/multitab/home"}):Object(a.jsxs)("div",{className:"logindiv d-flex justify-content-center align-item-center",children:[Object(a.jsxs)(d.a.form,{initial:{x:1e3},animate:{x:0,transition:{duration:.2}},className:"login align-self-center p-5 d-flex flex-column col-lg-4 col-md-6 col-sm-8 col-11 w-100  justify-content-center",onSubmit:function(e){e.preventDefault(),O(""),v(""),"vaibhav"===k.user&&"abcd1234"===k.pass?(O(""),v(""),s(k.user),m(k.pass),document.cookie="loggedIn=true",console.log(document.cookie)):(""===k.user?O("Username Cannot be blank"):"vaibhav"!==k.user&&O("invalid Username"),"abcd1234"!=k.pass&&v("Invalid Password"))},children:[Object(a.jsx)("h1",{className:"m-auto log",children:"LOGIN"}),Object(a.jsx)("input",{className:"input my-auto mx-5",placeholder:"Username",type:"text",name:"user",value:k.user,onChange:L}),Object(a.jsx)("h5",{className:"mx-auto justify-content-center errormsg p-",children:h}),Object(a.jsx)("input",{className:"input my-auto mx-5",placeholder:"Password",type:"password",name:"pass",value:k.pass,onChange:L}),Object(a.jsx)("h5",{className:"mx-auto justify-content-center errormsg",children:p}),Object(a.jsx)("button",{className:"logbut btn-primary my-auto mx-5",children:"LogIn"})]}),Object(a.jsxs)(d.a.div,{initial:{x:1e3},animate:{x:0,transition:{duration:.5}},className:"cred",children:[Object(a.jsx)("p",{children:"userName : vaibhav"}),Object(a.jsx)("p",{children:"password : abcd1234"})]})]})},b=(n(45),n(46),n(13));var x=function(e){var t=e.handleLink1,n=e.handleLink2,c=document.cookie.split("=");return console.log(c[1]),"false"==c[1]?Object(a.jsx)(u.a,{to:"/"}):Object(a.jsxs)("div",{className:"row h-100 w-100 m-0 head",children:[Object(a.jsx)("div",{className:"col-xl-1 col-lg-2 col-3 d-flex align-self-center justify-content-center",children:Object(a.jsx)("p",{className:"  m-auto name",children:"Vaibhav"})}),Object(a.jsx)("div",{className:"col-xl-10 col-lg-8 col-6 m-auto d-flex justify-content-center",children:Object(a.jsxs)("div",{className:"row w-100 m-2 d-flex align-self-center justify-content-center",children:[Object(a.jsx)("input",{className:" link my-auto w-100 col-lg-5    mx-3 w-100",placeholder:"Enter Link 1",type:"text",name:"link1",onChange:t}),Object(a.jsx)("input",{className:" link col-lg-5  link my-auto mx-3 w-100",placeholder:"Enter Link 2",type:"text",name:"link2",onChange:n})]})}),Object(a.jsx)("div",{className:"col-xl-1 col-lg-2 col-3 d-flex align-items-center justify-content-center ",children:Object(a.jsx)(b.b,{to:"/multitab",onClick:function(){document.cookie="loggedIn=false;expires=Thu, 01 Jan 1970 00:00:01 GMT"},className:"logout m-auto ",children:"LogOut"})})]})};n(47),n(48);var h=function(e){var t=e.link1,n=e.link2;return t.includes("www.")||(t="www."+t),t.includes("https://")||t.includes("https://")||(t="http://"+t),n.includes("www.")||(n="www."+n),n.includes("https://")||n.includes("https://")||(n="http://"+n),console.log(t),console.log(n),Object(a.jsxs)("div",{className:"row h-100 justify-content-around",children:[Object(a.jsx)("div",{className:"col-6 h-100 frameContainer d-flex ",children:"http://www."==t?Object(a.jsx)("div",{className:"enterUrl  align-self-center m-auto p-1",children:"Enter Link 1 To Open In This View"}):Object(a.jsx)("iframe",{className:"frame",frameborder:"0",src:t})}),Object(a.jsx)("div",{className:"col-6 h-100 frameContainer d-flex",children:"http://www."==n?Object(a.jsx)("div",{className:"enterUrl align-self-center m-auto p-1",children:"Enter Link 2 To Open In This View"}):Object(a.jsx)("iframe",{className:"frame m-0 p-0",frameborder:"0",src:n})})]})};n(66);var O=function(){return Object(a.jsx)("div",{className:"d-flex w-100 h-100",children:Object(a.jsx)("h5",{className:"d-flex m-auto",children:"Created by Vaibhav Somani"})})},f=n(21),g=n.n(f);var p=function(e){e.isLoggedIn,e.setIsLoggedIn;var t=Object(c.useState)(""),n=Object(o.a)(t,2),s=n[0],i=n[1],l=Object(c.useState)(""),r=Object(o.a)(l,2),j=r[0],m=r[1],b=Object(c.useCallback)(g()((function(e){return i(e)}),1e3),[]),f=Object(c.useCallback)(g()((function(e){return m(e)}),1e3),[]),p=document.cookie.split("=");return console.log(p[1]),"true"!=p[1]?Object(a.jsx)(u.a,{to:"multitab/"}):Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(d.a.div,{initial:{x:2e3},animate:{x:0,transition:{duration:.5}},className:"header",children:Object(a.jsx)(x,{handleLink1:function(e){var t=e.target.value;b(t)},handleLink2:function(e){var t=e.target.value;f(t)}})}),Object(a.jsx)(d.a.div,{initial:{x:2e3},animate:{x:0,transition:{duration:.7}},className:"mid",children:Object(a.jsx)(h,{link1:s,link2:j})}),Object(a.jsx)(d.a.div,{initial:{x:2e3},animate:{x:0,transition:{duration:1}},className:"footer",children:Object(a.jsx)(O,{})})]})};n(67);var v=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2);return t[0],t[1],Object(a.jsx)(b.a,{children:Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{path:"/multitab/",exact:!0,children:Object(a.jsx)(m,{})}),Object(a.jsx)(u.b,{path:"/multitab/home",exact:!0,children:Object(a.jsx)(p,{})})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),w()}},[[68,1,2]]]);
//# sourceMappingURL=main.13cff6c4.chunk.js.map