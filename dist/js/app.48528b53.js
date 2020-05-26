(function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],u=0,v=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(v.length)v.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={app:0},a=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0f4df123"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,o[1](c)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"7faf":function(e,t,o){"use strict";var n=o("b8ff"),r=o.n(n);r.a},a112:function(e,t,o){},ad5e:function(e,t,o){"use strict";var n=o("a112"),r=o.n(n);r.a},b8ff:function(e,t,o){},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("section",{staticClass:"todoapp"},[o("header",{staticClass:"header"},[o("h1",[e._v("todos")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:"What needs to be done?"},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}})]),o("section",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"main"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.allDone,expression:"allDone"}],staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:Array.isArray(e.allDone)?e._i(e.allDone,null)>-1:e.allDone},on:{change:function(t){var o=e.allDone,n=t.target,r=!!n.checked;if(Array.isArray(o)){var a=null,i=e._i(o,a);n.checked?i<0&&(e.allDone=o.concat([a])):i>-1&&(e.allDone=o.slice(0,i).concat(o.slice(i+1)))}else e.allDone=r}}}),o("label",{attrs:{for:"toggle-all"}}),o("ul",{staticClass:"todo-list"},e._l(e.filteredTodos,(function(t){return o("li",{key:t.id,staticClass:"todo",class:{completed:t.completed,editing:t==e.editedTodo}},[o("div",{staticClass:"view"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var n=t.completed,r=o.target,a=!!r.checked;if(Array.isArray(n)){var i=null,l=e._i(n,i);r.checked?l<0&&e.$set(t,"completed",n.concat([i])):l>-1&&e.$set(t,"completed",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(t,"completed",a)}}}),o("label",{on:{dblclick:function(o){return e.editTodo(t)}}},[e._v(e._s(t.title))]),o("button",{staticClass:"destroy",on:{click:function(o){return e.removeTodo(t)}}})]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"todo.title"},{name:"todo-focus",rawName:"v-todo-focus",value:t==e.editedTodo,expression:"todo == editedTodo"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.title},on:{blur:function(o){return e.doneEdit(t)},keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.doneEdit(t)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:e.cancelEdit(t)}],input:function(o){o.target.composing||e.$set(t,"title",o.target.value)}}})])})),0)]),o("footer",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",[e._v(e._s(e.remaining))]),e._v(" "+e._s(e._f("pluralize")(e.remaining))+" left ")]),o("ul",{staticClass:"filters"},[o("li",[o("a",{class:{selected:"all"==e.visibility},attrs:{href:"javascript:;"},on:{click:function(t){return e.updateVisbility("all")}}},[e._v("All")])]),o("li",[o("a",{class:{selected:"active"==e.visibility},attrs:{href:"javascript:;"},on:{click:function(t){return e.updateVisbility("active")}}},[e._v("Active")])]),o("li",[o("a",{class:{selected:"completed"==e.visibility},attrs:{href:"javascript:;"},on:{click:function(t){return e.updateVisbility("completed")}}},[e._v("Completed")])])]),o("button",{directives:[{name:"show",rawName:"v-show",value:e.todos.length>e.remaining,expression:"todos.length > remaining"}],staticClass:"clear-completed",on:{click:e.removeCompleted}},[e._v("Clear completed")])])]),e._m(0)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"info"},[o("p",[e._v("Double-click to edit a todo")]),o("p",[e._v(" Part of "),o("a",{attrs:{href:"http://todomvc.com"}},[e._v("TodoMVC")])])])}],i=(o("4160"),o("caad"),o("c975"),o("a434"),o("498a"),o("159b"),o("d4ec")),l=o("bee2"),s=o("262e"),c=o("2caf"),u=o("9ab4"),d=o("60a3"),v="todos-vuejs-2.0",p=function(){function e(){Object(i["a"])(this,e)}return Object(l["a"])(e,null,[{key:"fetch",value:function(){var e=JSON.parse(localStorage.getItem(v)||"[]");return e.forEach((function(e,t){e.id=t})),this.uid=e.length,e}},{key:"save",value:function(e){localStorage.setItem(v,JSON.stringify(e))}}]),e}();p.uid=0;o("4de4");var f,h=function(){function e(){Object(i["a"])(this,e)}return Object(l["a"])(e,null,[{key:"all",value:function(e){return e}},{key:"active",value:function(e){return e.filter((function(e){return!e.completed}))}},{key:"completed",value:function(e){return e.filter((function(e){return e.completed}))}}]),e}();(function(e){e["all"]="all",e["active"]="active",e["completed"]="completed"})(f||(f={}));var m=function(e){Object(s["a"])(o,e);var t=Object(c["a"])(o);function o(){var e;return Object(i["a"])(this,o),e=t.apply(this,arguments),e.todos=[],e.newTodo="",e.editedTodo=null,e.visibility=f.all,e.beforeEditCache="",e}return Object(l["a"])(o,[{key:"onHandler",value:function(e){p.save(e)}},{key:"updateVisbility",value:function(e){this.visibility=e}},{key:"addTodo",value:function(){var e=this.newTodo&&this.newTodo.trim();e&&(this.todos.push({id:p.uid++,title:e,completed:!1}),this.newTodo="")}},{key:"removeTodo",value:function(e){this.todos.splice(this.todos.indexOf(e),1)}},{key:"editTodo",value:function(e){this.beforeEditCache=e.title,this.editedTodo=e}},{key:"doneEdit",value:function(e){this.editedTodo&&(this.editedTodo=null,e.title=e.title.trim(),e.title||this.removeTodo(e))}},{key:"cancelEdit",value:function(e){this.editedTodo=null,e.title=this.beforeEditCache}},{key:"removeCompleted",value:function(){this.todos=h.active(this.todos)}},{key:"filteredTodos",get:function(){return["all","active","completed"].includes(this.visibility)?h[this.visibility](this.todos):[]}},{key:"remaining",get:function(){return h.active(this.todos).length}},{key:"allDone",get:function(){return 0===this.remaining},set:function(e){this.todos.forEach((function(t){t.completed=e}))}}]),o}(d["c"]);Object(u["a"])([Object(d["d"])("todos",{immediate:!0,deep:!0})],m.prototype,"onHandler",null),m=Object(u["a"])([Object(d["a"])({filters:{pluralize:function(e){return 1===e?"item":"items"}},directives:{"todo-focus":function(e,t){t.value&&e.focus()}}})],m);var g=m,b=g,_=(o("7faf"),o("2877")),y=Object(_["a"])(b,r,a,!1,null,null,null),k=y.exports,j=o("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7");var w=o("8c4f"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},C=[],T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))]),e._m(0),o("h3",[e._v("Installed CLI Plugins")]),e._m(1),o("h3",[e._v("Essential Links")]),e._m(2),o("h3",[e._v("Ecosystem")]),e._m(3)])},x=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),o("br"),e._v(" check out the "),o("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),o("li",[o("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),o("li",[o("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),o("li",[o("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],E=function(e){Object(s["a"])(o,e);var t=Object(c["a"])(o);function o(){return Object(i["a"])(this,o),t.apply(this,arguments)}return o}(d["c"]);Object(u["a"])([Object(d["b"])()],E.prototype,"msg",void 0),E=Object(u["a"])([d["a"]],E);var A=E,P=A,N=(o("ad5e"),Object(_["a"])(P,T,x,!1,null,"51a47fdc",null)),$=N.exports,D={name:"Home",components:{HelloWorld:$}},S=D,V=Object(_["a"])(S,O,C,!1,null,null,null),H=V.exports;n["a"].use(w["a"]);var M=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],F=new w["a"]({mode:"history",base:"/",routes:M}),I=F,J=o("2f62");n["a"].use(J["a"]);var L=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:I,store:L,render:function(e){return e(k)}}).$mount("#app")},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.48528b53.js.map