(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a,s=c(5),n=c.n(s),l=c(2),i=c(1),o=(c(10),c(11),c(3)),r=c.n(o),d=(c(12),c(0)),j=function(e){var t=e.todos,c=e.selectedTodoId,a=e.setSelectedTodoId,s=function(e){return c!==e};return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),t.map((function(e){var t=e.id,c=e.title,n=e.completed;return Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{"data-cy":"todo",className:"todo",children:[Object(d.jsx)("td",{className:"is-vcentered",children:t}),Object(d.jsx)("td",{className:"is-vcentered",children:n&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:r()({"has-text-danger":!n,"has-text-success":n}),children:c})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(t)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:r()("far",{"fa-eye":s(t),"fa-eye-slash":!s(t)})})})})})]})},t)}))]})};!function(e){e.Default="all",e.Active="active",e.Completed="completed"}(a||(a={}));var u=function(e){var t=e.changeFilterBy,c=e.query,s=e.changeQuery,n=e.onClearField;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{onChange:function(e){t(e.target.value)},"data-cy":"statusSelect",children:[Object(d.jsx)("option",{value:"all",children:a.Default}),Object(d.jsx)("option",{value:"active",children:a.Active}),Object(d.jsx)("option",{value:"completed",children:a.Completed})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){s(e.target.value.trim())}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"clear field",type:"button",className:"delete",onClick:n})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}c(14);var h,m=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.closeModal,c=e.todo,a=Object(i.useState)(),s=Object(l.a)(a,2),n=s[0],o=s[1],j=Object(i.useState)(!1),u=Object(l.a)(j,2),h=u[0],O=u[1];return Object(i.useEffect)((function(){var e;O(!0),(e=c.userId,b("/users/".concat(e))).then(o).catch((function(){return O(!0)})).finally((function(){return O(!1)}))}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),h?Object(d.jsx)(m,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===c||void 0===c?void 0:c.id)}),Object(d.jsx)("button",{type:"button","aria-label":"close modal",className:"delete","data-cy":"modal-close",onClick:t})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:null===c||void 0===c?void 0:c.title}),n&&Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(d.jsx)("strong",{className:r()({"has-text-danger":!c.completed,"has-text-success":c.completed}),children:null!==c&&void 0!==c&&c.completed?"Done":"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})};!function(e){e.LoadingError="An error occured when loading goods!"}(h||(h={}));c(15);var x=function(e){return Object(d.jsx)("div",{className:"error",children:Object(d.jsx)("p",{className:"error-text",children:e.text})})},f=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!1),o=Object(l.a)(n,2),r=o[0],f=o[1],v=Object(i.useState)(0),p=Object(l.a)(v,2),N=p[0],y=p[1],g=Object(i.useState)(null),S=Object(l.a)(g,2),k=S[0],C=S[1],w=Object(i.useState)(a.Default),T=Object(l.a)(w,2),E=T[0],I=T[1],F=Object(i.useState)(""),L=Object(l.a)(F,2),B=L[0],_=L[1],D=Object(i.useState)(!1),A=Object(l.a)(D,2),q=A[0],J=A[1],M=Object(i.useState)(!1),P=Object(l.a)(M,2),Q=P[0],U=P[1];Object(i.useEffect)((function(){J(!0),b("/todos").then(s).catch((function(){return U(!0)})).finally((function(){return J(!1)}))}),[]);var z=function(e,t){return e.filter((function(e){switch(t){case"active":return!e.completed;case"completed":return e.completed;default:return e}}))}(c,E);z=function(e,t){return e.filter((function(e){return e.title.toLocaleUpperCase().includes(t.toLocaleUpperCase())}))}(z,B),Object(i.useEffect)((function(){var e=z.find((function(e){return e.id===N}));e&&(C(e),f(!0))}),[N]);var G=k&&r;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(u,{changeFilterBy:I,query:B,changeQuery:_,onClearField:function(){_("")}})}),Object(d.jsx)("div",{className:"block",children:q?Object(d.jsx)(m,{}):Object(d.jsx)(d.Fragment,{children:Q?Object(d.jsx)(x,{text:h.LoadingError}):Object(d.jsx)(j,{todos:z,selectedTodoId:N,setSelectedTodoId:y})})})]})})}),G&&Object(d.jsx)(O,{closeModal:function(){y(0),f(!1)},todo:k})]})};n.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3bdf761b.chunk.js.map