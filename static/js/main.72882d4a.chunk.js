(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,n){e.exports=n(393)},393:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(16),l=n(9);var u=n(33),s=n(26),d=n(45),m=n.n(d),b={list:"list2",item:4},f=r.a.createContext();function v(e){var t=e.children,n=m()("selection",b),a=Object(l.a)(n,2),c=a[0],o=a[1];return r.a.createElement(f.Provider,{value:[c,o]},t)}var j={list1:[{id:1,title:"todo1",subtitle:"subtitle",estimated:3,completed:0},{id:2,title:"todo2",subtitle:"subtitle",estimated:2,completed:1,expanded:!0,children:[{id:3,title:"todo2.1",subtitle:"subtitle",estimated:4,completed:0}]}],list2:[{id:4,title:"todo1",subtitle:"subtitle",estimated:4,completed:0}]},O=r.a.createContext();function p(e){var t=e.children,n=m()("items",j),a=Object(l.a)(n,2),c=a[0],o=a[1];return r.a.createElement(O.Provider,{value:[c,o]},t)}var E=r.a.createContext();function h(e){var t=e.children,n=Object(a.useContext)(O),c=Object(l.a)(n,2),o=c[0],d=c[1],m=Object(a.useContext)(f),b=Object(l.a)(m,2),v=b[0],j=(b[1],Object(a.useState)(function(){return o[v.list]})),p=Object(l.a)(j,2),h=p[0],g=p[1];return Object(a.useEffect)(function(){d(Object(i.a)({},o,Object(s.a)({},v.list,Object(u.a)(h))))},[h]),Object(a.useEffect)(function(){g(function(e){return Object(u.a)(o[v.list])})},[v.list,v.item]),r.a.createElement(E.Provider,{value:[h,g]},t)}var g=n(27);var y={border:"1px solid #ccc",background:"#fff",fontSize:"2em",padding:15,margin:5,width:200},w={pomodoro:{seconds:1500,title:"Pomodoro"},"short-break":{seconds:300,title:"Short break"},"long-break":{seconds:900,title:"Long break"}};function C(){var e=(Object(a.useEffect)(function(){Notification.requestPermission()},[]),[function(e){new Notification("".concat(e," is over!"),{})}]),t=Object(l.a)(e,1)[0],n=function(){var e=Object(a.useContext)(f),t=Object(l.a)(e,2),n=t[0],r=(t[1],Object(a.useContext)(E)),c=Object(l.a)(r,2),o=c[0],s=c[1],d=function(e){return e.node.id};return{update:function(){var e=n.item,t=Object(g.d)({getNodeKey:d,treeData:o,searchMethod:function(t){return t.node.id===e}}).matches[0],a=Object(g.b)({treeData:o,path:t.path,getNodeKey:d,newNode:Object(i.a)({},t.node,{completed:t.node.completed+1})});s(function(e){return Object(u.a)(a)})}}}().update,c=Object(a.useReducer)(function(e,t){return Object(i.a)({},e,t)},{running:!1,seconds:0,title:""}),o=Object(l.a)(c,2),s=o[0],d=s.seconds,m=s.title,b=s.running,v=o[1],j=Object(a.useRef)(null);function O(e){var t=Math.floor(e%3600/60),n=Math.floor(e%3600%60);return["".concat(t<10?"0":"").concat(t),"".concat(n<10?"0":"").concat(n)]}Object(a.useEffect)(function(){return v({seconds:w.pomodoro.seconds,title:w.pomodoro.title}),function(){return clearInterval(j.current)}},[]),Object(a.useEffect)(function(){var e=O(d),t=Object(l.a)(e,2),n=t[0],a=t[1];document.title="".concat(n,":").concat(a," - ").concat(m)},[d]);var p=O(d),h=Object(l.a)(p,2),C=h[0],k=h[1],x="".concat(C,"m:").concat(k,"s");return r.a.createElement(r.a.Fragment,null,Object.keys(w).map(function(e){return r.a.createElement("button",{key:e,onClick:function(){return function(e){clearInterval(j.current),v({seconds:e.seconds,title:e.title,running:!1})}(w[e])},style:y},w[e].title)}),r.a.createElement("label",{style:{fontSize:"5em",display:"block"}},x),r.a.createElement("button",{onClick:function(){if(b)clearInterval(j.current);else{var e=d-1;v({seconds:e}),j.current=setInterval(function(){0===e?(clearInterval(j.current),t(m),n()):v({seconds:--e})},1e3)}v({running:!b})},style:y,disabled:0===d},b?"Stop":"Start"))}n(392);var k=n(163),x=n.n(k);function N(){var e=Object(a.useContext)(E),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(f),d=Object(l.a)(o,2),m=d[0],b=d[1],v=function(e){return e.node.id},j=function(){return{id:Math.random(),title:"new title",subtitle:"new subtitle",estimated:0,completed:0}},O=function(e,t,n,a){c(function(r){return Object(g.b)({treeData:r,path:a,getNodeKey:v,newNode:Object(i.a)({},n,Object(s.a)({},e,t))})})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return c(function(e){return[].concat(Object(u.a)(e),[j()])})}},"Add"),r.a.createElement(g.c,{style:{height:"50rem"},treeData:n,rowHeight:80,theme:x.a,getNodeKey:function(e){return e.node.id},onChange:function(e){return c(e)},generateNodeProps:function(e){var t=e.node,n=e.path;return{title:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{style:{},value:t.title,onChange:function(e){return O("title",e.target.value,t,n)}}),r.a.createElement("input",{style:{width:"40px"},value:t.estimated,type:"number",onChange:function(e){return O("estimated",e.target.value,t,n)}}),r.a.createElement("label",null,t.completed),!t.children&&r.a.createElement("label",null,'"selectable"')),subtitle:r.a.createElement("input",{style:{},value:t.subtitle,onChange:function(e){return O("subtitle",e.target.value,t,n)}}),buttons:[r.a.createElement("button",{onClick:function(){c(function(e){return Object(g.a)({treeData:e,parentKey:n[n.length-1],expandParent:!0,getNodeKey:v,newNode:j()}).treeData})}},"Add"),r.a.createElement("button",{onClick:function(){return c(function(e){return Object(g.e)({treeData:e,path:n,getNodeKey:v})})}},"X"),r.a.createElement("input",{type:"radio",readOnly:!0,checked:t.id===m.item,onClick:function(){b(function(e){return Object(i.a)({},e,{item:t.id})})}})]}}}))}var S=n(164);function D(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function P(e){var t=Object(a.useContext)(f),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useContext)(O),d=Object(l.a)(u,2),m=d[0],b=d[1],v=Object(a.useContext)(O),j=Object(l.a)(v,2),p=(j[0],j[1],Object(a.useState)("")),E=Object(l.a)(p,2),h=E[0],g=E[1],y=Object.keys(m);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h&&(b(function(e){return Object(i.a)({},e,Object(s.a)({},h.trim(),[]))}),g(""))}},r.a.createElement("label",{htmlFor:"name-id"},"Add new list"),r.a.createElement("input",{name:"name",value:h,onChange:function(e){return g(e.target.value)},placeholder:"Name of the list",id:"name-id"}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),1!==Object.keys(m).length?(b(function(e){return e[c.list],Object(S.a)(e,[c.list].map(D))}),o(function(e){return{list:Object.keys(m)[0],item:""}})):alert("cannot remove last list")}},r.a.createElement("label",{htmlFor:"name-id"},"Remove a list"),r.a.createElement("select",{name:"list",value:c.list,onChange:function(e){var t=e.target.value;o(function(e){return{list:t,item:""}})}},y&&y.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("button",{type:"submit"},"Remove"))))}var K=function(){return r.a.createElement(v,null,r.a.createElement(p,null,r.a.createElement(h,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(C,null),r.a.createElement(P,null),r.a.createElement("div",{style:{height:400}},r.a.createElement(N,null))))))};o.a.render(r.a.createElement(function(){return r.a.createElement(K,null)},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[165,1,2]]]);
//# sourceMappingURL=main.72882d4a.chunk.js.map