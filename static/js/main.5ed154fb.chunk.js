(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,n){e.exports=n(346)},346:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(15),l=n(8);var u=n(45),s=n.n(u),d={list:"list2",item:4},m=r.a.createContext();function b(e){var t=e.children,n=s()("selection",d),a=Object(l.a)(n,2),c=a[0],o=a[1];return r.a.createElement(m.Provider,{value:[c,o]},t)}var f={list1:[{id:1,title:"todo1",subtitle:"subtitle",estimated:3,completed:0},{id:2,title:"todo2",subtitle:"subtitle",estimated:2,completed:1,expanded:!0,children:[{id:3,title:"todo2.1",subtitle:"subtitle",estimated:4,completed:0}]}],list2:[{id:4,title:"todo1",subtitle:"subtitle",estimated:4,completed:0}]},v=r.a.createContext();function j(e){var t=e.children,n=s()("items",f),a=Object(l.a)(n,2),c=a[0],o=a[1];return r.a.createElement(v.Provider,{value:[c,o]},t)}var O=n(29);var p={border:"1px solid #ccc",background:"#fff",fontSize:"2em",padding:15,margin:5,width:200},g={pomodoro:{seconds:2,title:"Pomodoro"},"short-break":{seconds:300,title:"Short break"},"long-break":{seconds:900,title:"Long break"}};function E(){var e=(Object(a.useEffect)(function(){Notification.requestPermission()},[]),[function(e){new Notification("".concat(e," is over!"),{})}]),t=Object(l.a)(e,1)[0],n=function(){var e=Object(a.useContext)(m),t=Object(l.a)(e,2),n=t[0],r=(t[1],Object(a.useContext)(v)),c=Object(l.a)(r,2),o=c[0],u=c[1],s=function(e){return e.node.id};return{update:function(){console.log("update");var e=o[n.list],t=n.item;Object(O.d)({getNodeKey:s,treeData:e,searchMethod:function(e){return e.node.id===t}}),u(function(e){return Object(i.a)({},e)})}}}().update,c=Object(a.useReducer)(function(e,t){return Object(i.a)({},e,t)},{running:!1,seconds:0,title:""}),o=Object(l.a)(c,2),u=o[0],s=u.seconds,d=u.title,b=u.running,f=o[1],j=Object(a.useRef)(null);function E(e){var t=Math.floor(e%3600/60),n=Math.floor(e%3600%60);return["".concat(t<10?"0":"").concat(t),"".concat(n<10?"0":"").concat(n)]}Object(a.useEffect)(function(){return f({seconds:g.pomodoro.seconds,title:g.pomodoro.title}),function(){return clearInterval(j.current)}},[]),Object(a.useEffect)(function(){var e=E(s),t=Object(l.a)(e,2),n=t[0],a=t[1];document.title="".concat(n,":").concat(a," - ").concat(d)},[s]);var h=E(s),y=Object(l.a)(h,2),C=y[0],k=y[1],w="".concat(C,"m:").concat(k,"s");return r.a.createElement(r.a.Fragment,null,Object.keys(g).map(function(e){return r.a.createElement("button",{key:e,onClick:function(){return function(e){clearInterval(j.current),f({seconds:e.seconds,title:e.title,running:!1})}(g[e])},style:p},g[e].title)}),r.a.createElement("label",{style:{fontSize:"5em",display:"block"}},w),r.a.createElement("button",{onClick:function(){if(b)clearInterval(j.current);else{var e=s-1;f({seconds:e}),j.current=setInterval(function(){0===e?(clearInterval(j.current),t(d),n()):f({seconds:--e})},1e3)}f({running:!b})},style:p,disabled:0===s},b?"Stop":"Start"))}var h=n(47),y=n(24),C=(n(345),r.a.createContext());function k(e){var t=e.children,n=Object(a.useContext)(v),c=Object(l.a)(n,2),o=c[0],u=c[1],s=Object(a.useContext)(m),d=Object(l.a)(s,2),b=d[0],f=(d[1],Object(a.useState)(function(){return o[b.list]})),j=Object(l.a)(f,2),O=j[0],p=j[1];return Object(a.useEffect)(function(){u(Object(i.a)({},o,Object(y.a)({},b.list,Object(h.a)(O))))},[O]),Object(a.useEffect)(function(){console.log("selection changed"),p(function(e){return Object(h.a)(o[b.list])})},[b.list,b.item]),r.a.createElement(C.Provider,{value:[O,p]},t)}function w(){var e=Object(a.useContext)(C),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(m),u=Object(l.a)(o,2),s=u[0],d=u[1],b=function(e){return e.node.id},f=function(){return{id:Math.random(),title:"new title",subtitle:"new subtitle",estimated:0,completed:0}},v=function(e,t,n,a){c(function(r){return Object(O.b)({treeData:r,path:a,getNodeKey:b,newNode:Object(i.a)({},n,Object(y.a)({},e,t))})})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return c(function(e){return[].concat(Object(h.a)(e),[f()])})}},"Add"),r.a.createElement(O.c,{style:{height:"50rem"},treeData:n,rowHeight:80,getNodeKey:function(e){return e.node.id},onChange:function(e){return c(e)},generateNodeProps:function(e){var t=e.node,n=e.path;return{title:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{style:{},value:t.title,onChange:function(e){return v("title",e.target.value,t,n)}}),r.a.createElement("input",{style:{width:"40px"},value:t.estimated,type:"number",onChange:function(e){return v("estimated",e.target.value,t,n)}}),r.a.createElement("label",null,t.completed),!t.children&&r.a.createElement("label",null,'"selectable"')),subtitle:r.a.createElement("input",{style:{},value:t.subtitle,onChange:function(e){return v("subtitle",e.target.value,t,n)}}),buttons:[r.a.createElement("button",{onClick:function(){console.log(n,b),c(function(e){return Object(O.a)({treeData:e,parentKey:n[n.length-1],expandParent:!0,getNodeKey:b,newNode:f()}).treeData})}},"Add"),r.a.createElement("button",{onClick:function(){return c(function(e){return Object(O.e)({treeData:e,path:n,getNodeKey:b})})}},"X"),r.a.createElement("input",{type:"radio",readOnly:!0,checked:t.id===s.item,onClick:function(){d(function(e){return Object(i.a)({},e,{item:t.id})})}})]}}}))}var x=n(145);function N(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function S(e){var t=Object(a.useContext)(m),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useContext)(v),s=Object(l.a)(u,2),d=s[0],b=s[1],f=Object(a.useContext)(v),j=Object(l.a)(f,2),O=(j[0],j[1],Object(a.useState)("")),p=Object(l.a)(O,2),g=p[0],E=p[1],h=Object.keys(d);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g&&(b(function(e){return Object(i.a)({},e,Object(y.a)({},g.trim(),[]))}),E(""))}},r.a.createElement("label",{htmlFor:"name-id"},"Add new list"),r.a.createElement("input",{name:"name",value:g,onChange:function(e){return E(e.target.value)},placeholder:"Name of the list",id:"name-id"}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),1!==Object.keys(d).length?(b(function(e){return e[c.list],Object(x.a)(e,[c.list].map(N))}),o(function(e){return{list:Object.keys(d)[0],item:""}})):alert("cannot remove last list")}},r.a.createElement("label",{htmlFor:"name-id"},"Remove a list"),r.a.createElement("select",{name:"list",value:c.list,onChange:function(e){console.log("tar",e.target.value);var t=e.target.value;o(function(e){return{list:t,item:""}})}},h&&h.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("button",{type:"submit"},"Remove"))))}var P=function(){return r.a.createElement(b,null,r.a.createElement(j,null,r.a.createElement(k,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(E,null),r.a.createElement(S,null),r.a.createElement("div",{style:{height:400}},r.a.createElement(w,null))))))};o.a.render(r.a.createElement(function(){return r.a.createElement(P,null)},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,1,2]]]);
//# sourceMappingURL=main.5ed154fb.chunk.js.map