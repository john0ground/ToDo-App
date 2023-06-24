(()=>{"use strict";var e={192:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(81),a=o.n(r),n=o(645),i=o.n(n)()(a());i.push([e.id,'*,*::before,*::after{box-sizing:border-box;padding:0;margin:0}body{font-family:"Helvetica",sans-serif;font-size:.9rem;color:#202020}header{background:#2e2e2e;display:flex;justify-content:space-between;padding:7px 25px 7px 20px;position:fixed;min-width:100%;z-index:1}.header-icon{width:36px;height:36px}.header-icon:hover{background:rgba(255,255,255,.4);border-radius:5px;cursor:pointer}.title{display:flex;align-items:center;color:#fff}.title h2{margin-left:10px}.profile{display:flex;align-items:center}.profile img{width:30px;height:30x;object-fit:cover;margin-left:15px}.profile img:hover{cursor:pointer}.sidebar{position:relative;height:100vh;width:300px;background:#fafafa;padding:30px 20px}.sidebar ul{display:flex;flex-direction:column}.sidebar p{user-select:none}.tasks-timeline{margin-bottom:25px;margin-top:45px}.nav-file{display:flex;align-items:center;padding:3px 0;border-radius:5px}.nav-file svg{width:33px;height:33px;margin-right:3px}.nav-file p{white-space:nowrap}.nav-file .file-amount{margin-left:auto;text-align:end;padding-right:10px;color:#707070;font-size:.8rem}.nav-file:hover{background:#eee;cursor:pointer}.favorites{width:100%;position:relative;padding-left:5px}.nav-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}.nav-head p{color:#707070;font-weight:bold}.nav-head .dropdown-arrow{width:30px;height:30px;border-radius:5px;padding:5px;transition:transform .3s}.nav-head .dropdown-arrow path{fill:#707070}.dropdown-arrow:hover{background:#eee;cursor:pointer}.dropdown-arrow:hover path{fill:#3b3b3b}.drop{transform:rotate(90deg)}.favorites-list{width:100%;z-index:-2}.nav-project{display:flex;align-items:center;padding:3px 0;border-radius:5px;padding:10px 0}.nav-project .project-color{width:10px;height:10px;background:skyblue;border-radius:50%;margin-left:12px;margin-right:12px}.nav-project p{white-space:nowrap;overflow:hidden}.nav-project .file-amount{margin-left:auto;text-align:end;padding-right:10px;color:#707070;font-size:.8rem}.nav-project:hover{background:#eee;cursor:pointer}.projects{padding-top:20px;padding-left:5px}.projects .nav-head .add-icon{fill:#707070;width:27px;height:27px;margin-left:auto;border-radius:5px}.add-icon:hover{fill:#3b3b3b !important;background:#eee;cursor:pointer}.add-project-modal{position:absolute;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);color:#202020;display:none;user-select:none}.add-project-modal .add-project-form{background:#fff;position:fixed;left:50%;top:50%;transform:translate(-50%, -50%);width:80%;max-width:450px;padding:20px;border-radius:10px}.add-project-modal .add-project-form .form-title{font-size:1.3rem;font-weight:bold}.add-project-modal .add-project-form .form-row{display:flex;flex-direction:column;margin-top:1.3rem}.form-row{position:relative}.form-row label{font-weight:bold;margin-bottom:10px}.form-row input{padding:7px 5px;color:#202020;border-radius:5px;border:1px solid rgba(0,0,0,.2274509804);transition:border .3s}.form-row input:focus{border:1px solid #707070;outline:none}.form-row input:valid{border:1px solid #009600}.form-row button{padding:9px 12px;display:flex;align-items:center;background:none;border:1px solid rgba(0,0,0,.2274509804);border-radius:5px;color:#202020}.form-row button #current-color{border-radius:50%;width:13px;height:13px;background:#6accbc;margin-right:10px}.form-row button p{line-height:1}.form-row button:focus{border:1px solid #707070}.form-row button:hover{cursor:pointer}label[for=form-project-color]{width:fit-content}.color-list{background:#fff;height:200px;overflow-y:scroll;border-radius:5px;position:absolute;top:100%;width:100%;z-index:2;display:none}.color-list ul li{list-style:none;width:100%;display:flex;align-items:center;padding:10px 12px}.color-list ul li>div{margin-right:12px;width:12px;height:12px;border-radius:50%}.color-list ul li>p{white-space:nowrap;font-size:.8rem;color:#202020}.color-list ul li *{user-select:none;pointer-events:none}.color-list ul li[data-color-hex="#B8256F"]>div{background:#b8256f}.color-list ul li[data-color-hex="#DB4035"]>div{background:#db4035}.color-list ul li[data-color-hex="#FF9933"]>div{background:#f93}.color-list ul li[data-color-hex="#FAD000"]>div{background:#fad000}.color-list ul li[data-color-hex="#AFB83B"]>div{background:#afb83b}.color-list ul li[data-color-hex="#7ECC49"]>div{background:#7ecc49}.color-list ul li[data-color-hex="#299438"]>div{background:#299438}.color-list ul li[data-color-hex="#6ACCBC"]>div{background:#6accbc}.color-list ul li[data-color-hex="#158FAD"]>div{background:#158fad}.color-list ul li[data-color-hex="#14AAF5"]>div{background:#14aaf5}.color-list ul li[data-color-hex="#96C3EB"]>div{background:#96c3eb}.color-list ul li[data-color-hex="#4073FF"]>div{background:#4073ff}.color-list ul li[data-color-hex="#884DFF"]>div{background:#884dff}.color-list ul li[data-color-hex="#AF38EB"]>div{background:#af38eb}.color-list ul li[data-color-hex="#EB96EB"]>div{background:#eb96eb}.color-list ul li[data-color-hex="#808080"]>div{background:gray}.color-list ul li[data-color-hex="#B8B8B8"]>div{background:#b8b8b8}.color-list ul li[data-color-hex="#CCAC93"]>div{background:#ccac93}.color-list ul li:hover{background:#eee;cursor:pointer}input#favorites-checkbox{display:none}#switch{width:36px;height:18px;background:gray;border-radius:50px;position:relative}#switch:after{content:"";position:absolute;width:12px;height:12px;left:3px;top:3px;background:#fff;border-radius:12px;transition:.3s}#favorites-checkbox:checked+label #switch:after{left:21px}#favorites-checkbox:checked+label #switch{background:#ccac93}#favorites-checkbox:active+label #switch:after{width:18px}label[for=favorites-checkbox]:hover{cursor:pointer}label[for=favorites-checkbox]{display:flex;align-items:center;width:fit-content;font-weight:100}#switch{margin-right:1.5rem}.line-row{border-bottom:1px solid rgba(0,0,0,.1294117647);width:100%;height:1px;margin-top:20px}#save-project,#cancel-project,#add-project{width:4rem;height:1.8rem;display:flex;align-items:center;justify-content:center;margin-left:1rem;font-weight:bold}#cancel-project{background:#fafafa;color:#707070}#cancel-project:hover{background:#eee;color:#3b3b3b}#save-project,#add-project{color:#fff;background:#2e2e2e;opacity:.5}#add-project,#save-project:hover{cursor:pointer}#form-btn{display:flex;justify-content:right;flex-direction:row;width:100%}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",r=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,r,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==n&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,r=0;r<t.length;r++)if(t[r].identifier===e){o=r;break}return o}function r(e,r){for(var n={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=n[d]||0,p="".concat(d," ").concat(l);n[d]=l+1;var u=o(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,a){var n=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<n.length;i++){var c=o(n[i]);t[c].references--}for(var s=r(e,a),d=0;d<n.length;d++){var l=o(n[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}n=s}}},569:e=>{var t={};e.exports=function(e,o){var r=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var a=void 0!==o.layer;a&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,a&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var n=o.sourceMap;n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={id:r,exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{class e{constructor(e,t,o){this.name=e,this.color=t,this.favorite=o,this.tasks=[]}changeName(e){this.name=e}changeColor(e){this.color=e}changeFavorite(e){this.favorite=e}addTask(e){this.tasks.push(e)}removeTask(e){const t=this.tasks.filter((t=>t.id!==e.id));this.tasks.length=0,this.tasks.push(...t)}}class t{constructor(e,t,o,r,a){this.title=e,this.description=t,this.dueDate=o,this.priority=r,this.notes=[],this.projectId=a}changeTitle(e){this.title=e}changeDescription(e){this.description=e}changeDueDate(e){this.dueDate=e}changePriority(e){this.priority=e}changeProjectId(e){this.projectId=e}addNote(e){this.notes.push(e)}removeNote(e){const t=this.notes.filter((t=>t.id!==e.id));this.notes.length=0,this.notes.push(...t)}}class r{constructor(e,t,o){this.note=e,this.taskId=t,this.projectId=o}updateNote(e){this.note=e}}const a=(()=>{let e=[];const t=()=>{localStorage.setItem("usedIDs",JSON.stringify(e))};return{generateId:()=>{let o="";function r(){for(let e=0;e<8;e++){const e=Math.floor(72*Math.random());o+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".charAt(e)}}return r(),e.includes(o)&&(o="",r()),e.push(o),t(),o},removeId:o=>{const r=e.indexOf(o);e.splice(r,1),t()},usedIDs:e}})(),n=(()=>{let t=[];const o=()=>{localStorage.setItem("projects",JSON.stringify(t))};return{projects:t,createProject:(r,n,i)=>{const c=new e(r,n,i);c.id=a.generateId(),t.push(c),o()},deleteProject:e=>{const r=t.indexOf(t.find((t=>t.id===e)));t.splice(r,1),i.clearTasksFromDeletedProject(e),c.clearNotesFromDeletedProject(e),a.removeId(e),o()},placeTask:e=>{t.find((t=>t.id===e.projectId)).addTask(e),o()},removeTask:e=>{t.find((t=>t.id===e.projectId)).removeTask(e),o()},transferTask:(e,r)=>{const a=t.find((t=>t.id===e.projectId)),n=a.tasks.indexOf(e);a.tasks.splice(n,1),t.find((e=>e.id===r)).tasks.push(e),o()},updateProjectStorage:o}})(),i=(()=>{let e=[];const o=()=>{localStorage.setItem("tasks",JSON.stringify(e))};return{tasks:e,createTask:(r,i,c,s,d)=>{const l=new t(r,i,c,s,d);l.id=a.generateId(),e.push(l),n.placeTask(l),o()},deleteTask:t=>{const r=e.find((e=>e.id===t));n.removeTask(r);const i=e.indexOf(e.find((e=>e.id===t)));e.splice(i,1),c.clearNotesFromDeletedTask(t),a.removeId(t),o()},clearTasksFromDeletedProject:t=>{e.filter((e=>e.projectId===t)).map((e=>e.id)).forEach((e=>a.removeId(e)));const r=e.filter((e=>e.projectId!==t));e.length=0,e.push(...r),o()},placeNote:t=>{e.find((e=>e.id===t.taskId)).addNote(t),o(),n.updateProjectStorage()},removeNote:t=>{const r=e.find((e=>e.id===t.taskId));console.log(r),r.removeNote(t),o(),n.updateProjectStorage()},transferToOtherProject:(t,r)=>{const a=e.find((e=>e.id===t));n.transferTask(a,r),a.changeProjectId(r),o()},updateTaskStorage:o}})(),c=(()=>{let e=[];const t=()=>{localStorage.setItem("notes",JSON.stringify(e))};return{notes:e,createNote:(o,n,c)=>{const s=new r(o,n,c);s.id=a.generateId(),e.push(s),t(),i.placeNote(s)},deleteNote:o=>{localStorage.removeItem("notes");const r=e.find((e=>e.id===o));i.removeNote(r);const n=e.indexOf(e.find((e=>e.id===o)));e.splice(n,1),a.removeId(o),t()},clearNotesFromDeletedTask:o=>{e.filter((e=>e.taskId===o)).map((e=>e.id)).forEach((e=>a.removeId(e)));const r=e.filter((e=>e.taskId!==o));e.length=0,e.push(...r),t()},clearNotesFromDeletedProject:o=>{e.filter((e=>e.projectId===o)).map((e=>e.id)).forEach((e=>a.removeId(e)));const r=e.filter((e=>e.projectId!==o));e.length=0,e.push(...r),t()},updateNoteStorage:t}})(),s=(()=>{const e=(()=>{const e=document.querySelector(".favorites-list"),t=document.querySelector(".projects-list"),o=t=>{const o=document.createElement("li");o.classList.add("nav-project"),o.id=t.id;const r=document.createElement("div");r.classList.add("project-color"),r.style.background=t.color,o.appendChild(r);const a=document.createElement("p");a.textContent=t.name,o.appendChild(a);const n=document.createElement("p");n.classList.add("file-amount"),n.textContent=t.tasks.length,o.appendChild(n),e.appendChild(o)},r=e=>{const o=document.createElement("li");o.classList.add("nav-project"),o.id=e.id;const r=document.createElement("div");r.classList.add("project-color"),r.style.background=e.color,o.appendChild(r);const a=document.createElement("p");a.textContent=e.name,o.appendChild(a);const n=document.createElement("p");n.classList.add("file-amount"),n.textContent=e.tasks.length,o.appendChild(n),t.appendChild(o)};return{addProjectToFavorites:o,generateFavoritesToNav:()=>{e.innerHTML="",n.projects.filter((e=>e.favorite)).forEach((e=>o(e)))},addProject:r,generateProjectsToNav:()=>{t.innerHTML="",n.projects.filter((e=>"Inbox@XFvW$W7"!==e.name)).forEach((e=>r(e)))}}})(),t=(()=>{const t=document.querySelector(".add-project-modal"),o=document.querySelector(".add-project-form"),r=document.querySelector("#add-project-icon"),a=document.querySelector("#cancel-project"),i=document.querySelector("#form-project-color"),c=document.querySelector(".color-list"),s=()=>{if("block"===c.style.display)return d();t.style.display="none"},d=()=>{c.style.display="none"};r.addEventListener("click",(()=>(o.reset(),(e=>{const t=document.querySelector("#add-project");document.querySelector("#save-project").style.display="none",t.style.display="flex"})(),void(t.style.display="block")))),o.addEventListener("click",(e=>{e.stopPropagation(),d()})),t.addEventListener("click",(()=>s())),a.addEventListener("click",(()=>s())),document.addEventListener("keydown",(e=>{"Escape"===e.key&&s()})),i.addEventListener("click",(e=>{e.stopPropagation(),c.style.display="block"}));const l=document.querySelectorAll(".color-option"),p=i.querySelector("#current-color"),u=i.querySelector("p");l.forEach((e=>{e.addEventListener("click",(e=>{p.style.background=e.target.dataset.colorHex,u.textContent=e.target.dataset.colorName,i.dataset.colorSelected=e.target.dataset.colorHex}))}));const f=document.querySelector("#add-project"),h=document.querySelector("#save-project"),g=e=>{o.checkValidity()?(e.style.opacity="1",e.removeAttribute("disabled")):(e.style.opacity="0.5",e.setAttribute("disabled",""))};o.addEventListener("input",(()=>{g(f),g(h)})),f.addEventListener("click",(t=>{if(t.preventDefault(),!o.checkValidity())return;const r=document.querySelector("#form-project-name").value,a=document.querySelector("#form-project-color").dataset.colorSelected,i=document.querySelector("#favorites-checkbox").checked;n.createProject(r,a,i),e.generateProjectsToNav(),!0===i&&e.generateFavoritesToNav(),s(),o.reset(),g(f)}))})();return{NavModule:e,ProjectFormModule:t}})();var d=o(379),l=o.n(d),p=o(795),u=o.n(p),f=o(569),h=o.n(f),g=o(565),m=o.n(g),v=o(216),b=o.n(v),x=o(589),k=o.n(x),y=o(192),j={};j.styleTagTransform=k(),j.setAttributes=m(),j.insert=h().bind(null,"head"),j.domAPI=u(),j.insertStyleElement=b(),l()(y.Z,j),y.Z&&y.Z.locals&&y.Z.locals,function(){const o=localStorage.getItem("projects"),d=localStorage.getItem("tasks"),l=localStorage.getItem("notes"),p=localStorage.getItem("usedIDs");o&&n.projects.push(...JSON.parse(o)),d&&i.tasks.push(...JSON.parse(d)),l&&c.notes.push(...JSON.parse(l)),p&&a.usedIDs.push(...JSON.parse(p));const u=(e,t)=>{const o=(e=>Object.getOwnPropertyNames(e.prototype).filter((e=>"constructor"!==e)))(e),r={};o.forEach((t=>{const o=e.prototype[t];r[t]=o})),t.forEach((e=>{Object.assign(e,r)}))};u(t,i.tasks),u(e,n.projects),u(r,c.notes),n.projects.forEach((e=>e.tasks=[])),i.tasks.forEach((e=>e.notes=[])),c.notes.forEach((e=>{i.tasks.find((t=>t.id===e.taskId)).addNote(e)})),i.tasks.forEach((e=>{n.projects.find((t=>t.id===e.projectId)).addTask(e)})),n.projects.find((e=>"Inbox@XFvW$W7"===e.name))||n.createProject("Inbox@XFvW$W7",null,!1),s.NavModule.generateFavoritesToNav(),s.NavModule.generateProjectsToNav()}(),console.log(n.projects),console.log(i.tasks),console.log(c.notes)})()})();