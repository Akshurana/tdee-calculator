(this["webpackJsonptdee-calculator"]=this["webpackJsonptdee-calculator"]||[]).push([[0],{31:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(13),a=c.n(i),r=(c(31),c(11)),j=c(12),l=c(47),o=c(48),b=c(49),d=c(53),h=c(50),m=c(51),u=c(52),O=c(1);var x=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(l.a,{color:"dark",dark:!0,expand:"md",children:[Object(O.jsx)(o.a,{href:"/",children:"TDEE CALCULATOR"}),Object(O.jsx)(b.a,{}),Object(O.jsx)(d.a,{isOpen:!1,navbar:!0,children:Object(O.jsxs)(h.a,{className:"mr-auto",navbar:!0,children:[Object(O.jsx)(m.a,{children:Object(O.jsx)(j.b,{to:"/",children:Object(O.jsx)(u.a,{children:"Home"})})}),Object(O.jsx)(m.a,{children:Object(O.jsx)(j.b,{to:"/about",children:Object(O.jsx)(u.a,{children:"About"})})})]})})]})})};var g=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(0),a=Object(r.a)(i,2),j=a[0],l=a[1],o=Object(n.useState)(0),b=Object(r.a)(o,2),d=b[0],h=b[1],m=Object(n.useState)("male"),u=Object(r.a)(m,2),g=u[0],p=u[1],v=Object(n.useState)(0),f=Object(r.a)(v,2),N=f[0],C=f[1],F=Object(n.useState)(0),w=Object(r.a)(F,2),E=w[0],S=w[1],L=Object(n.useState)("normal"),y=Object(r.a)(L,2),A=y[0],T=y[1];return Object(n.useEffect)((function(){E<=18.5&&T("Underweight"),E>18.5&&E<=24.9&&T("Normal"),E>24.9&&E<=29.9&&T("Overweight"),E>29.9&&T("Obese")}),[E]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{classNameName:"jumbotron text-center",children:[Object(O.jsx)("h1",{children:"TDEE CALCULATOR"}),Object(O.jsx)("p",{})]}),Object(O.jsxs)("div",{classNameName:"container",children:[Object(O.jsxs)("div",{classNameName:"row",children:[Object(O.jsx)("h2",{children:"Enter Your Details"}),Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"age",children:"Age:"}),Object(O.jsx)("input",{type:"number",onChange:function(e){!function(e){s(e.target.value)}(e)},className:"form-control",id:"age",placeholder:"Enter Age",name:"age",value:c})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"weight",children:"Weight:"}),Object(O.jsx)("input",{type:"number",onChange:function(e){!function(e){h(e.target.value)}(e)},className:"form-control",id:"weight",placeholder:"Enter Weight",name:"weight",value:d})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"height",children:"Height:"}),Object(O.jsx)("input",{type:"number",onChange:function(e){!function(e){l(e.target.value)}(e)},className:"form-control",id:"height",placeholder:"Enter Height",name:"height",value:j})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"gender",children:"Gender:"}),Object(O.jsxs)("select",{onChange:function(e){!function(e){p(e.target.value)}(e)},className:"form-control",id:"gender",value:g,children:[Object(O.jsx)("option",{value:"male",children:"Male"}),Object(O.jsx)("option",{value:"female",children:"Female"})]})]}),Object(O.jsx)("button",{type:"button",onClick:function(){!function(){var e="male"==g?88.362+13.397*d+4.799*j-5.677*c:447.593+9.247*d+3.098*j-4.33*c,t=j/100;S((d/(t*t)).toFixed(2)),C(e.toFixed(2))}()},className:"btn btn-primary",children:"Submit"})]})]}),Object(O.jsxs)("div",{className:"row",children:["BMR = ",N," ",Object(O.jsx)("br",{}),"BMI = ",E," ",Object(O.jsx)("br",{}),"Bodytype = ",A]})]})]})};var p=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"jumbotron text-center",children:[Object(O.jsx)("h1",{children:"About"}),Object(O.jsx)("p",{children:"Resize this responsive page to see the effect!"})]}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-sm-4",children:[Object(O.jsx)("h3",{children:"Column 1"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit..."}),Object(O.jsx)("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..."})]}),Object(O.jsxs)("div",{className:"col-sm-4",children:[Object(O.jsx)("h3",{children:"Column 2"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit..."}),Object(O.jsx)("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..."})]}),Object(O.jsxs)("div",{className:"col-sm-4",children:[Object(O.jsx)("h3",{children:"Column 3"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit..."}),Object(O.jsx)("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..."})]})]})})]})},v=(c(45),c(5));var f=function(){return Object(O.jsx)(j.a,{basename:"/tdee-calculator",children:Object(O.jsxs)(v.c,{children:[Object(O.jsx)(v.a,{exact:!0,path:"/about",children:Object(O.jsx)(p,{})}),Object(O.jsx)(v.a,{exact:!0,path:"/",children:Object(O.jsx)(g,{})})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root")),N()}},[[46,1,2]]]);
//# sourceMappingURL=main.58e2f65d.chunk.js.map