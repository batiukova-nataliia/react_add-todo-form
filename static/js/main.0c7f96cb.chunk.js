(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),o=(a(14),a(1)),l=a(9),d=a.n(l),u=a(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:t.email,children:t.name})},j=function(e){var t=e.todo,a=t.completed,n=t.title;return Object(u.jsxs)("article",{"data-id":"1",className:d()("TodoInfo",{"TodoInfo--completed":a}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),t.user&&Object(u.jsx)(m,{user:t.user})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function O(e){return h.find((function(t){return t.id===e}))||null}var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),f=function(){var e=Object(o.useState)(0),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),l=c[0],d=c[1],m=Object(o.useState)(p),j=Object(s.a)(m,2),f=j[0],x=j[1],v=Object(o.useState)(!1),y=Object(s.a)(v,2),S=y[0],N=y[1],g=Object(o.useState)(!1),I=Object(s.a)(g,2),C=I[0],_=I[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),N(Boolean(!l)),_(Boolean(!a)),l&&a){var t={id:Math.max.apply(Math,Object(r.a)(p.map((function(e){return e.id}))))+1,title:l,completed:!1,userId:a,user:O(a)};x([].concat(Object(r.a)(f),[t])),d(""),n(0)}},children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{children:["Title: ",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:l,onChange:function(e){d(e.target.value.replace(/[^a-z\u0430-\u044f\u04510-9\s]/gi," ").replace(/[^a-z]/g,""))}}),S&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{children:["User: ",Object(u.jsxs)("select",{"data-cy":"userSelect",value:a,onChange:function(e){n(+e.target.value)},children:[Object(u.jsx)("option",{children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]})}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:f})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0c7f96cb.chunk.js.map