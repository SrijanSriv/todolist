(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{25:function(t,e,c){},32:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c.n(n),i=c(18),a=c.n(i),o=(c(25),c(2)),r=c(20),j=c(11),l=c(1),u=function(t){var e="",c={color:e},i=Object(n.useState)(c),a=Object(j.a)(i,2),o=a[0];a[1];return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"SingleTask",style:o,onDoubleClick:function(){t.tap(t.id)},children:t.input})})})},d=function(t){var e=Object(n.useState)(""),c=Object(j.a)(e,2),i=c[0],a=c[1],o=Object(n.useState)([]),d=Object(j.a)(o,2),b=d[0],h=d[1],O=function(t){h((function(e){return e.filter((function(e,c){return c!==t}))}))};return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsxs)("div",{className:"TaskHolder",children:[Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===i||h((function(t){return[].concat(Object(r.a)(t),[i])})),a("")},children:[Object(l.jsx)("input",{type:"text",value:i,className:"TodoTask",placeholder:"Add a Task",onChange:function(t){a(t.target.value)}}),Object(l.jsx)("button",{className:"AddButton",children:"Add"})]}),b.map((function(t,e){return Object(l.jsx)(u,{id:e,input:t,tap:O})}))]})})},b=c(8),h=function(){return Object(l.jsx)("div",{className:"Nav",children:Object(l.jsxs)("div",{className:"Link",children:[Object(l.jsx)(b.b,{exact:!0,activeClassName:"active",to:"/",children:"List"}),Object(l.jsx)(b.b,{exact:!0,activeClassName:"active",to:"instructions",children:"Instructions"})]})})},O=function(){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)("div",{className:"Fullscreen",children:Object(l.jsx)(d,{})})]})},x=function(){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Thank you for using this Simple but Sublime TodoList! Following are the Interactions."}),Object(l.jsx)("p",{children:"Add a task using the input field."}),Object(l.jsx)("p",{children:"Double click on the task to delete it."}),Object(l.jsxs)("h2",{children:["Want to contribute or enhance? Check out the",Object(l.jsx)("button",{className:"SourceCode",onClick:function(){window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank")},children:"sourcecode"}),"."]})]})]})},m=function(){return Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",component:O,exact:!0}),Object(l.jsx)(o.a,{path:"/instructions",component:x})]})};a.a.render(Object(l.jsx)(s.a.Fragment,{children:Object(l.jsx)(b.a,{basename:"/todolist",children:Object(l.jsx)(m,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2a3ed52e.chunk.js.map