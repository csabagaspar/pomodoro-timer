(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,n){e.exports=n(393)},393:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(19),l=n(9);var u=n(37),d=n(26),s=n(33),m=n.n(s),b="list2",f=r.a.createContext();function v(e){var t=e.children,n=m()("activeListName",b),a=Object(l.a)(n,2),c=a[0],o=a[1];return r.a.createElement(f.Provider,{value:[c,o]},t)}var j={list1:[{id:1,title:"todo1",subtitle:"subtitle",estimated:3,completed:0},{id:2,title:"todo2",subtitle:"subtitle",estimated:2,completed:1,expanded:!0,children:[{id:3,title:"todo2.1",subtitle:"subtitle",estimated:4,completed:0}]}],list2:[{id:4,title:"todo1",subtitle:"subtitle",estimated:4,completed:0}]},O=r.a.createContext();function p(e){var t=e.children,n=m()("items",j),a=Object(l.a)(n,2),c=a[0],o=a[1];return r.a.createElement(O.Provider,{value:[c,o]},t)}var h=r.a.createContext();function E(e){var t=e.children,n=Object(a.useContext)(O),c=Object(l.a)(n,2),o=c[0],s=c[1],m=Object(a.useContext)(f),b=Object(l.a)(m,2),v=b[0],j=(b[1],Object(a.useState)(function(){return o[v]})),p=Object(l.a)(j,2),E=p[0],g=p[1];return Object(a.useEffect)(function(){s(Object(i.a)({},o,Object(d.a)({},v,Object(u.a)(E))))},[E]),r.a.createElement(h.Provider,{value:[E,g]},t)}var g=4,y=r.a.createContext();function w(e){var t=e.children,n=m()("activeListItemId",g),a=Object(l.a)(n,2),c=a[0],o=a[1];return r.a.createElement(y.Provider,{value:[c,o]},t)}var C=n(27);var k={border:"1px solid #ccc",background:"#fff",fontSize:"2em",padding:15,margin:5,width:200},x={pomodoro:{seconds:1500,title:"Pomodoro"},"short-break":{seconds:300,title:"Short break"},"long-break":{seconds:900,title:"Long break"}};function N(){var e=(Object(a.useEffect)(function(){Notification.requestPermission()},[]),[function(e){new Notification("".concat(e," is over!"),{})}]),t=Object(l.a)(e,1)[0],n=function(){var e=Object(a.useContext)(y),t=Object(l.a)(e,2),n=t[0],r=(t[1],Object(a.useContext)(h)),c=Object(l.a)(r,2),o=c[0],d=c[1],s=function(e){return e.node.id};return{update:function(){var e=n;if(e){var t=Object(C.d)({getNodeKey:s,treeData:o,searchMethod:function(t){return t.node.id===e}}).matches[0],a=Object(C.b)({treeData:o,path:t.path,getNodeKey:s,newNode:Object(i.a)({},t.node,{completed:t.node.completed+1})});d(function(e){return Object(u.a)(a)})}}}}().update,c=Object(a.useReducer)(function(e,t){return Object(i.a)({},e,t)},{running:!1,seconds:0,title:""}),o=Object(l.a)(c,2),d=o[0],s=d.seconds,m=d.title,b=d.running,f=o[1],v=Object(a.useRef)(null);Object(a.useEffect)(function(){return f({seconds:x.pomodoro.seconds,title:x.pomodoro.title}),function(){return clearInterval(v.current)}},[]),Object(a.useEffect)(function(){var e=O(s),t=Object(l.a)(e,2),n=t[0],a=t[1];document.title="".concat(n,":").concat(a," - ").concat(m)},[s]);var j=function(e){v.current=setInterval(function(){0===e?(clearInterval(v.current),t(m),"Pomodoro"===m&&n()):f({seconds:--e})},1e3)};function O(e){var t=Math.floor(e%3600/60),n=Math.floor(e%3600%60);return["".concat(t<10?"0":"").concat(t),"".concat(n<10?"0":"").concat(n)]}var p=O(s),E=Object(l.a)(p,2),g=E[0],w=E[1],N="".concat(g,"m:").concat(w,"s");return r.a.createElement(r.a.Fragment,null,Object.keys(x).map(function(e){return r.a.createElement("button",{key:e,onClick:function(){return function(e){clearInterval(v.current);var t=e.seconds-1;f({seconds:t,title:e.title,running:!1}),j(t),f({running:!0})}(x[e])},style:k},x[e].title)}),r.a.createElement("label",{style:{fontSize:"5em",display:"block"}},N),r.a.createElement("button",{onClick:function(){if(b)clearInterval(v.current);else{var e=s-1;f({seconds:e}),j(e)}f({running:!b})},style:k,disabled:0===s},b?"Stop":"Start"))}n(392);var S=n(163),P=n.n(S);function D(){var e=Object(a.useContext)(h),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(y),s=Object(l.a)(o,2),m=s[0],b=s[1];console.log("activeListintodotree",n);var f=function(e){return e.node.id},v=function(){return{id:Math.random(),title:"new title",subtitle:"new details",estimated:0,completed:0}},j=function(e,t,n,a){c(function(r){return Object(C.b)({treeData:r,path:a,getNodeKey:f,newNode:Object(i.a)({},n,Object(d.a)({},e,t))})})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return c(function(e){return[].concat(Object(u.a)(e),[v()])})}},"Add"),r.a.createElement(C.c,{style:{height:"50rem"},treeData:n,rowHeight:150,theme:P.a,getNodeKey:function(e){return e.node.id},onChange:function(e){return c(e)},generateNodeProps:function(e){var t=e.node,n=e.path;return{title:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{style:{width:"90%"},value:t.title,onChange:function(e){return j("title",e.target.value,t,n)}}),r.a.createElement("input",{style:{width:"40px"},value:t.estimated,type:"number",onChange:function(e){return j("estimated",e.target.value,t,n)}}),r.a.createElement("label",null,t.completed)),subtitle:r.a.createElement("textarea",{style:{},rows:5,cols:60,value:t.subtitle,onChange:function(e){return j("subtitle",e.target.value,t,n)}}),buttons:[r.a.createElement("button",{onClick:function(){c(function(e){return Object(C.a)({treeData:e,parentKey:n[n.length-1],expandParent:!0,getNodeKey:f,newNode:v()}).treeData})}},"Add"),r.a.createElement("button",{onClick:function(){return c(function(e){return Object(C.e)({treeData:e,path:n,getNodeKey:f})})}},"X"),r.a.createElement("input",{type:"radio",readOnly:!0,checked:t.id===m,onClick:function(){return b(t.id)}})]}}}))}var I=n(164);function K(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function A(e){var t=Object(a.useContext)(O),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useContext)(h),s=Object(l.a)(u,2),m=(s[0],s[1]),b=Object(a.useContext)(f),v=Object(l.a)(b,2),j=v[0],p=v[1],E=Object(a.useState)(""),g=Object(l.a)(E,2),y=g[0],w=g[1],C=Object.keys(c);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),y&&(o(function(e){return Object(i.a)({},e,Object(d.a)({},y.trim(),[]))}),w(""))}},r.a.createElement("label",{htmlFor:"name-id"},"Add new list"),r.a.createElement("input",{name:"name",value:y,onChange:function(e){return w(e.target.value)},placeholder:"Name of the list",id:"name-id"}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),1!==Object.keys(c).length){c[j];var t=Object(I.a)(c,[j].map(K));o(function(e){return t}),m(c[Object.keys(t)[0]]),p(Object.keys(t)[0])}else alert("cannot remove last list")}},r.a.createElement("label",{htmlFor:"name-id"},"Remove a list"),r.a.createElement("select",{name:"list",value:j,onChange:function(e){var t=e.target.value;p(t),m(c[t])}},C&&C.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("button",{type:"submit"},"Remove"))))}var F=function(){return r.a.createElement(v,null,r.a.createElement(w,null,r.a.createElement(p,null,r.a.createElement(E,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement("div",{style:{height:400}},r.a.createElement(D,null)))))))};o.a.render(r.a.createElement(function(){return r.a.createElement(F,null)},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[165,1,2]]]);
//# sourceMappingURL=main.93318abc.chunk.js.map