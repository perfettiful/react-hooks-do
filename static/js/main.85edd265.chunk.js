(this["webpackJsonpreact-hooks-do"]=this["webpackJsonpreact-hooks-do"]||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(6),c=o.n(r),l=(o(12),o(3)),i=o(4);o(13);function u(e){var t=e.todo,o=e.index,a=e.completeTodo,r=e.removeTodo;return n.a.createElement("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":""}},t.text,n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return a(o)}},"Complete"),n.a.createElement("button",{onClick:function(){return r(o)}},"x")))}function s(e){var t=e.addTodo,o=n.a.useState(""),a=Object(i.a)(o,2),r=a[0],c=a[1];return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),c(""))}},n.a.createElement("input",{type:"text",className:"input",value:r,onChange:function(e){return c(e.target.value)}}))}var d=function(){var e=n.a.useState([{text:"Learn about React",isCompleted:!1},{text:"Meet friend for lunch",isCompleted:!1},{text:"Build really cool todo app",isCompleted:!1}]),t=Object(i.a)(e,2),o=t[0],a=t[1],r=function(e){var t=Object(l.a)(o);t[e].isCompleted=!0,a(t)},c=function(e){var t=Object(l.a)(o);t.splice(e,1),a(t)};return n.a.createElement("div",{className:"app"},n.a.createElement("h1",{className:"heading"},"Strike That TODO Through",n.a.createElement("br",null),n.a.createElement("code",{className:"heading"},"A task tacker powered by React Hooks")),n.a.createElement("div",{className:"todo-list"},o.map((function(e,t){return n.a.createElement(u,{key:t,index:t,todo:e,completeTodo:r,removeTodo:c})})),n.a.createElement(s,{addTodo:function(e){var t=[].concat(Object(l.a)(o),[{text:e}]);a(t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,o){e.exports=o(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.85edd265.chunk.js.map