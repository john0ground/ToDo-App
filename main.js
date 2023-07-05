(()=>{"use strict";var e={192:(e,t,o)=>{o.d(t,{Z:()=>d});var r=o(81),n=o.n(r),a=o(645),c=o.n(a)()(n());c.push([e.id,'*,*::before,*::after{box-sizing:border-box;padding:0;margin:0}body{font-family:"Helvetica",sans-serif;font-size:.9rem;color:#202020}header{background:#2e2e2e;display:flex;justify-content:space-between;padding:7px 25px 7px 20px;position:fixed;min-width:100%;z-index:1}.header-icon{width:36px;height:36px}.header-icon:hover{background:rgba(255,255,255,.4);border-radius:5px;cursor:pointer}.title{display:flex;align-items:center;color:#fff}.title h2{margin-left:10px}.profile{display:flex;align-items:center}.profile #add-task-icon{margin-right:4em;width:29px;height:29px}.profile img{width:30px;height:30x;object-fit:cover;margin-left:15px}.profile img:hover{cursor:pointer}.sidebar{position:relative;height:100vh;width:300px;background:#fafafa;padding:30px 20px}.sidebar ul{display:flex;flex-direction:column}.sidebar p{user-select:none}.tasks-timeline{margin-bottom:25px;margin-top:45px}.nav-file{display:flex;align-items:center;padding:3px 0;border-radius:5px}.nav-file svg{width:33px;height:33px;margin-right:3px}.nav-file p{white-space:nowrap}.nav-file .file-amount{margin-left:auto;text-align:end;padding-right:10px;color:#646464;font-size:.8rem}.nav-file:hover{background:#eee;cursor:pointer}.projects-nav-section{position:relative}.favorites{width:100%;padding-left:5px}.nav-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}.nav-head p{color:#646464;font-weight:bold}.nav-head .dropdown-arrow{width:30px;height:30px;border-radius:5px;padding:5px;transition:transform .3s}.nav-head .dropdown-arrow path{fill:#646464}.dropdown-arrow:hover{background:#eee;cursor:pointer}.dropdown-arrow:hover path{fill:#292929}.drop{transform:rotate(90deg)}.favorites-list{width:100%;z-index:-2}.nav-project{display:flex;align-items:center;padding:3px 0;border-radius:5px;padding:10px 0;position:relative}.nav-project .project-color{width:10px;height:10px;border-radius:50%;margin-left:12px;margin-right:12px}.nav-project p{white-space:nowrap;overflow:hidden}.nav-project .file-amount{margin-left:auto;text-align:end;padding-right:10px;color:#646464;font-size:.8rem}.nav-project .project-menu-icon{display:none;margin-left:auto;padding:5px 7px 5px 0}.nav-project .project-menu-icon div{width:3px;height:3px;background:#646464;border-radius:50%;margin-left:3px;pointer-events:none}.nav-project:hover{background:#eee;cursor:pointer}.nav-project:hover>.file-amount{display:none !important}.nav-project:hover>.project-menu-icon{display:flex !important}.project-menu-icon:hover div{background:#292929}.projects{padding:20px 0 60px 5px;width:100%;background:#fafafa;position:absolute;top:30px;transition:top .3s;overflow:hidden}.projects .nav-head .add-icon{fill:#646464;width:27px;height:27px;margin-left:auto;border-radius:5px}.add-icon:hover{fill:#292929 !important;background:#eee;cursor:pointer}.hide-projects{width:100%;background:#fafafa;position:absolute;left:0;top:50px;transition:top .3s}#project-delete-modal,#add-project-modal,.menu-modal{border:none;outline:none;border-radius:5px;position:absolute}.menu-modal{box-shadow:0 0 10px 1px rgba(0,0,0,.1);transform:translate(-45%, 20px)}.menu-modal::backdrop{background-color:rgba(0,0,0,0)}.project-menu{width:270px;padding:7px;background:#fff;border-radius:5px;border:1px solid rgba(0,0,0,.2039215686)}.project-menu li{display:flex;align-items:center;padding:3px 5px;border-radius:5px;color:#202020}.project-menu li *{pointer-events:none;user-select:none}.project-menu li:hover{background:#eee;cursor:pointer}.project-menu svg{width:26px;height:26px;margin-right:7px}.project-menu svg g#SVGRepo_iconCarrier>path{stroke:#292929}.project-menu p{width:fit-content}.form-modal{top:50%;left:50%;transform:translate(-50%, -50%)}#add-project-modal{width:80%;max-width:450px;overflow:visible;border-radius:10px}#add-project-modal .add-project-form{background:#fff;color:#202020;padding:20px;border-radius:10px}#add-project-modal .add-project-form .form-title{font-size:1.3rem;font-weight:bold}#add-project-modal .add-project-form .form-row{display:flex;flex-direction:column;margin-top:1.3rem}.form-row{position:relative}.form-row label{font-weight:bold;margin-bottom:10px}.form-row input{padding:7px 5px;color:#202020;border-radius:5px;border:1px solid rgba(0,0,0,.2274509804);transition:border .3s}.form-row input:focus{border:1px solid #646464;outline:none}.form-row input:valid{border:1px solid #009600}.form-row button{padding:9px 12px;display:flex;align-items:center;background:none;border:1px solid rgba(0,0,0,.2274509804);border-radius:5px;color:#202020}.form-row button #current-color{border-radius:50%;width:13px;height:13px;background:#6accbc;margin-right:10px}.form-row button p{line-height:1}.form-row button:focus{border:1px solid #646464}.form-row button:hover{cursor:pointer}label[for=form-project-color]{width:fit-content}.color-list{background:#fff;height:200px;overflow-y:scroll;border-radius:5px;position:absolute;top:100%;width:100%;z-index:2;display:none}.color-list ul li{list-style:none;width:100%;display:flex;align-items:center;padding:10px 12px}.color-list ul li>div{margin-right:12px;width:12px;height:12px;border-radius:50%}.color-list ul li>p{white-space:nowrap;font-size:.8rem;color:#202020}.color-list ul li *{user-select:none;pointer-events:none}.color-list ul li[data-color-hex="#B8256F"]>div{background:#b8256f}.color-list ul li[data-color-hex="#DB4035"]>div{background:#db4035}.color-list ul li[data-color-hex="#FF9933"]>div{background:#f93}.color-list ul li[data-color-hex="#FAD000"]>div{background:#fad000}.color-list ul li[data-color-hex="#AFB83B"]>div{background:#afb83b}.color-list ul li[data-color-hex="#7ECC49"]>div{background:#7ecc49}.color-list ul li[data-color-hex="#299438"]>div{background:#299438}.color-list ul li[data-color-hex="#6ACCBC"]>div{background:#6accbc}.color-list ul li[data-color-hex="#158FAD"]>div{background:#158fad}.color-list ul li[data-color-hex="#14AAF5"]>div{background:#14aaf5}.color-list ul li[data-color-hex="#96C3EB"]>div{background:#96c3eb}.color-list ul li[data-color-hex="#4073FF"]>div{background:#4073ff}.color-list ul li[data-color-hex="#884DFF"]>div{background:#884dff}.color-list ul li[data-color-hex="#AF38EB"]>div{background:#af38eb}.color-list ul li[data-color-hex="#EB96EB"]>div{background:#eb96eb}.color-list ul li[data-color-hex="#808080"]>div{background:gray}.color-list ul li[data-color-hex="#B8B8B8"]>div{background:#b8b8b8}.color-list ul li[data-color-hex="#CCAC93"]>div{background:#ccac93}.color-list ul li:hover{background:#eee;cursor:pointer}input#favorites-checkbox{display:none}#switch{width:36px;height:18px;background:gray;border-radius:50px;position:relative}#switch:after{content:"";position:absolute;width:12px;height:12px;left:3px;top:3px;background:#fff;border-radius:12px;transition:.3s}#favorites-checkbox:checked+label #switch:after{left:21px}#favorites-checkbox:checked+label #switch{background:#ccac93}#favorites-checkbox:active+label #switch:after{width:18px}label[for=favorites-checkbox]:hover{cursor:pointer}label[for=favorites-checkbox]{display:flex;align-items:center;width:fit-content;font-weight:100}#switch{margin-right:1.5rem}.line-row{border-bottom:1px solid rgba(0,0,0,.1294117647);width:100%;height:1px;margin-top:20px}#project-select-add,#cancel-add-task,#cancel-task,#cancel-delete,#confirm-delete,#save-project,#cancel-project,#add-project{width:4rem;height:1.8rem;display:flex;align-items:center;justify-content:center;margin-left:1rem;font-weight:bold}#cancel-add-task,#cancel-delete,#cancel-project{background:#fafafa;color:#202020;border:1px solid #dfdada !important}#cancel-add-task *,#cancel-delete *,#cancel-project *{pointer-events:none}#cancel-add-task:hover,#project-select-add:hover,#cancel-delete:hover,#cancel-project:hover{background:#eee;color:#202020}#add-task,#confirm-delete,#save-project,#add-project{color:#fff;background:#2e2e2e}#add-task *,#confirm-delete *,#save-project *,#add-project *{pointer-events:none}#add-project{opacity:.5}#add-project,#save-project:hover{cursor:pointer}#form-btn{display:flex !important;justify-content:right !important;flex-direction:row !important;width:100%}#project-delete-modal{left:50%;top:50%;transform:translate(-50%, -50%);width:80%;max-width:450px;border-radius:10px}.project-delete-form{background:#fff;color:#202020;border-radius:10px;display:flex;flex-direction:column;align-items:center}.project-delete-form .form-head{display:flex;justify-content:space-between;align-items:center;background:#2e2e2e;padding:10px 20px;width:100%}.project-delete-form .form-head h3{color:#fff;font-size:1.1rem}.project-delete-form .form-head svg{width:35px;height:35px}.project-delete-form .form-head svg g#SVGRepo_iconCarrier>path{stroke:#fff}.project-delete-form img{width:50%;height:auto;margin-top:2rem;border-radius:10px;object-fit:cover}.project-delete-form p{align-self:flex-start;margin-left:20px;margin-top:2rem;font-size:1rem}.project-delete-form p span{font-weight:bold}.project-delete-form #form-btn{margin:20px;padding-right:20px}#cancel-delete,#confirm-delete{outline:none}#cancel-delete{border:1px solid rgba(0,0,0,.3568627451);border-radius:5px}#confirm-delete{border-radius:5px;border:none}#cancel-delete,#confirm-delete{cursor:pointer}.add-task-modal{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;max-width:570px;border:none;border-radius:10px;padding:15px;background:#fff;overflow:visible}.add-task-modal input{width:100%;outline:none;font-family:"Helvetica",sans-serif;border:none}.add-task-modal .form-task-name{font-size:1.3rem}.add-task-modal .form-task-description{margin-top:7px;font-size:.8rem}.add-task-modal .line-row{margin-bottom:1.5rem}.schedule-btn{display:flex;margin-top:1.5rem;user-select:none}.schedule-btn .form-task-date,.schedule-btn .form-task-priority{display:flex;align-items:center;margin-right:10px;padding:2px;padding-right:5px;outline:none;border:1px solid #dfdada;background:none;border-radius:5px}.schedule-btn .form-task-date>*,.schedule-btn .form-task-priority>*{pointer-events:none}.schedule-btn .form-task-date::placeholder,.schedule-btn .form-task-priority::placeholder{color:#646464}.schedule-btn #task-date-add{outline:none;width:8rem}.schedule-btn #task-date-add:hover{cursor:pointer}.schedule-btn svg{width:22px;height:22px}.schedule-btn svg path{stroke:#646464}.schedule-btn p{font-size:.8rem;white-space:nowrap;color:#646464}.schedule-btn .form-task-priority svg{transform:scale(0.8)}.schedule-btn>button:hover{cursor:pointer;background:#eee}.schedule-btn>button:hover p{color:#292929}.schedule-btn>button:hover svg path{stroke:#292929}#project-select-add,#cancel-add-task,#cancel-task{border-radius:5px;border:none}#project-select-add{color:#646464;height:2rem;margin-right:auto;margin-left:0;justify-content:space-evenly;background:#fff;padding:0 10px;width:fit-content;position:relative}#project-select-add #project-select-add-color{width:7px;height:7px;background:red;border-radius:50%;margin-right:9px}#project-select-add svg{width:20px;height:20px;fill:#646464;margin-left:6px;margin-right:8px}#project-select-add>*:not(.choose-project-list){pointer-events:none}#project-select-add:hover>svg{fill:#292929}#add-task{width:5rem;border-radius:5px;border:none;margin-left:10px;height:1.8rem}#project-select-add,#cancel-add-task,#add-task:hover{cursor:pointer}.choose-project-list{border:1px solid #dfdada;border-radius:5px;width:275px;overflow-y:scroll;position:absolute;top:100%;background:#fff;font-weight:lighter;display:none}.choose-project-list #check-project-icon{width:19px;height:19px;margin-left:auto;margin-right:12px}.choose-project-list #check-project-icon path#Vector{stroke:#202020}.open-list{display:block}.project-option{padding:9px 0;list-style-type:none;display:flex;align-items:center;user-select:none}.project-option *{pointer-events:none}.project-option:first-child{padding:6px 0}.project-option #inbox-svg{width:23px;height:23px;margin:0 6px}.project-option .project-option-color{width:10px;height:10px;border-radius:50%;background:red;margin:0 12px}.project-option .project-option-name{color:#202020;font-size:.8rem}.project-option:hover{cursor:pointer;background:#eee}',""]);const d=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",r=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,r,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(c[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,r=0;r<t.length;r++)if(t[r].identifier===e){o=r;break}return o}function r(e,r){for(var a={},c=[],d=0;d<e.length;d++){var i=e[d],s=r.base?i[0]+r.base:i[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=o(p),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=n(f,r);r.byIndex=d,t.splice(d,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function n(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,n){var a=r(e=e||[],n=n||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var d=o(a[c]);t[d].references--}for(var i=r(e,n),s=0;s<a.length;s++){var l=o(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},569:e=>{var t={};e.exports=function(e,o){var r=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{class e{constructor(e,t,o){this.name=e,this.color=t,this.favorite=o,this.tasks=[]}changeName(e){this.name=e}changeColor(e){this.color=e}changeFavorite(e){this.favorite=e}addTask(e){this.tasks.push(e)}removeTask(e){const t=this.tasks.filter((t=>t.id!==e.id));this.tasks.length=0,this.tasks.push(...t)}}class t{constructor(e,t,o,r,n){this.title=e,this.description=t,this.dueDate=o,this.priority=r,this.notes=[],this.projectId=n}changeTitle(e){this.title=e}changeDescription(e){this.description=e}changeDueDate(e){this.dueDate=e}changePriority(e){this.priority=e}changeProjectId(e){this.projectId=e}addNote(e){this.notes.push(e)}removeNote(e){const t=this.notes.filter((t=>t.id!==e.id));this.notes.length=0,this.notes.push(...t)}}class r{constructor(e,t,o){this.note=e,this.taskId=t,this.projectId=o}updateNote(e){this.note=e}}const n=(()=>{let e=[];const t=()=>{localStorage.setItem("usedIDs",JSON.stringify(e))};return{generateId:()=>{let o="";function r(){for(let e=0;e<8;e++){const e=Math.floor(72*Math.random());o+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".charAt(e)}}return r(),e.includes(o)&&(o="",r()),e.push(o),t(),o},removeId:o=>{const r=e.indexOf(o);e.splice(r,1),t()},usedIDs:e}})(),a=(()=>{let t=[];const o=()=>{localStorage.setItem("projects",JSON.stringify(t))};return{projects:t,createProject:(r,a,c)=>{const d=new e(r,a,c);d.id=n.generateId(),t.push(d),o()},deleteProject:e=>{const r=t.indexOf(t.find((t=>t.id===e)));t.splice(r,1),c.clearTasksFromDeletedProject(e),d.clearNotesFromDeletedProject(e),n.removeId(e),o()},placeTask:e=>{t.find((t=>t.id===e.projectId)).addTask(e),o()},removeTask:e=>{t.find((t=>t.id===e.projectId)).removeTask(e),o()},transferTask:(e,r)=>{const n=t.find((t=>t.id===e.projectId)),a=n.tasks.indexOf(e);n.tasks.splice(a,1),t.find((e=>e.id===r)).tasks.push(e),o()},updateProjectStorage:o}})(),c=(()=>{let e=[];const o=()=>{localStorage.setItem("tasks",JSON.stringify(e))};return{tasks:e,createTask:(r,c,d,i,s)=>{const l=new t(r,c,d,i,s);l.id=n.generateId(),e.push(l),a.placeTask(l),o()},deleteTask:t=>{const r=e.find((e=>e.id===t));a.removeTask(r);const c=e.indexOf(e.find((e=>e.id===t)));e.splice(c,1),d.clearNotesFromDeletedTask(t),n.removeId(t),o()},clearTasksFromDeletedProject:t=>{e.filter((e=>e.projectId===t)).map((e=>e.id)).forEach((e=>n.removeId(e)));const r=e.filter((e=>e.projectId!==t));e.length=0,e.push(...r),o()},placeNote:t=>{e.find((e=>e.id===t.taskId)).addNote(t),o(),a.updateProjectStorage()},removeNote:t=>{const r=e.find((e=>e.id===t.taskId));console.log(r),r.removeNote(t),o(),a.updateProjectStorage()},transferToOtherProject:(t,r)=>{const n=e.find((e=>e.id===t));a.transferTask(n,r),n.changeProjectId(r),o()},updateTaskStorage:o}})(),d=(()=>{let e=[];const t=()=>{localStorage.setItem("notes",JSON.stringify(e))};return{notes:e,createNote:(o,a,d)=>{const i=new r(o,a,d);i.id=n.generateId(),e.push(i),t(),c.placeNote(i)},deleteNote:o=>{localStorage.removeItem("notes");const r=e.find((e=>e.id===o));c.removeNote(r);const a=e.indexOf(e.find((e=>e.id===o)));e.splice(a,1),n.removeId(o),t()},clearNotesFromDeletedTask:o=>{e.filter((e=>e.taskId===o)).map((e=>e.id)).forEach((e=>n.removeId(e)));const r=e.filter((e=>e.taskId!==o));e.length=0,e.push(...r),t()},clearNotesFromDeletedProject:o=>{e.filter((e=>e.projectId===o)).map((e=>e.id)).forEach((e=>n.removeId(e)));const r=e.filter((e=>e.projectId!==o));e.length=0,e.push(...r),t()},updateNoteStorage:t}})(),i={toggleFavorites:(()=>{const e=document.querySelector("#dropdown-favorites"),t=document.querySelector(".projects");return e.addEventListener("click",(()=>{e.classList.contains("drop")?(e.classList.remove("drop"),t.style.top="30px"):(()=>{e.classList.add("drop");const o=document.querySelector(".favorites").clientHeight;t.style.top=o+"px"})()})),{extend:()=>{if(e.classList.contains("drop")){const e=document.querySelector(".favorites").clientHeight;t.style.top=e+"px"}}}})(),toggleProjects:(()=>{const e=document.querySelector("#dropdown-projects"),t=document.querySelector(".hide-projects"),o=()=>{e.classList.remove("drop");const o=document.querySelector(".projects").clientHeight;t.style.height=o+"px",t.style.top="50px"};return e.addEventListener("click",(()=>{e.classList.contains("drop")?o():(()=>{e.classList.add("drop");const o=document.querySelector(".projects").clientHeight;t.style.top=o+"px"})()})),{hide:o,extend:()=>{if(e.classList.contains("drop")){const e=document.querySelector(".projects").clientHeight;t.style.top=e+"px"}}}})()},s=(()=>{const e=(()=>{const e=document.querySelector(".favorites-list"),t=document.querySelector(".projects-list");return{generateFavoritesToNav:()=>{e.innerHTML="",a.projects.filter((e=>e.favorite)).forEach((t=>(t=>{const o=document.createElement("li");o.classList.add("nav-project"),o.id=t.id;const r=document.createElement("div");r.classList.add("project-color"),r.style.background=t.color,o.appendChild(r);const a=document.createElement("p");a.textContent=t.name,o.appendChild(a);const c=document.createElement("p");c.classList.add("file-amount"),c.textContent=t.tasks.length,o.appendChild(c);const d=document.createElement("div");d.classList.add("project-menu-icon"),d.appendChild(document.createElement("div")),d.appendChild(document.createElement("div")),d.appendChild(document.createElement("div")),d.addEventListener("click",n.openMenu),o.appendChild(d),e.appendChild(o)})(t)))},generateProjectsToNav:()=>{t.innerHTML="",a.projects.filter((e=>"Inbox@XFvW$W7"!==e.name)).forEach((e=>(e=>{const o=document.createElement("li");o.classList.add("nav-project"),o.id=e.id;const r=document.createElement("div");r.classList.add("project-color"),r.style.background=e.color,o.appendChild(r);const a=document.createElement("p");a.textContent=e.name,o.appendChild(a);const c=document.createElement("p");c.classList.add("file-amount"),c.textContent=e.tasks.length,o.appendChild(c);const d=document.createElement("div");d.classList.add("project-menu-icon"),d.appendChild(document.createElement("div")),d.appendChild(document.createElement("div")),d.appendChild(document.createElement("div")),d.addEventListener("click",n.openMenu),o.appendChild(d),t.appendChild(o)})(e)))}}})(),t=(()=>{const t=document.querySelector("#add-project-modal"),o=document.querySelector(".add-project-form"),r=document.querySelector("#add-project-icon"),n=document.querySelector("#cancel-project"),c=document.querySelector(".color-list"),s=o.querySelector("#form-project-name"),l=o.querySelector("#form-project-color"),p=o.querySelector("#favorites-checkbox");let u;const f=e=>{const t=document.querySelector("#add-project"),o=document.querySelector("#save-project");"add"===e?(o.style.display="none",t.style.display="flex"):"edit"===e&&(t.style.display="none",o.style.display="flex")},h=()=>{o.reset(),document.querySelector(".form-title").textContent="Add Project",s.value="",p.removeAttribute("checked")},m=()=>{c.style.display="none"},g=()=>{if("block"===c.style.display)return m();t.close(),h()};r.addEventListener("click",(()=>(f("add"),void t.showModal()))),o.addEventListener("click",(e=>{e.stopPropagation(),m()})),n.addEventListener("click",(()=>g())),t.addEventListener("click",(e=>{e.target===t&&g()})),l.addEventListener("click",(e=>{e.stopPropagation(),c.style.display="block"}));const x=document.querySelectorAll(".color-option"),v=l.querySelector("#current-color"),b=l.querySelector("p");x.forEach((e=>{e.addEventListener("click",(e=>{v.style.background=e.target.dataset.colorHex,b.textContent=e.target.dataset.colorName,l.dataset.colorSelected=e.target.dataset.colorHex}))}));const j=document.querySelector("#add-project"),y=document.querySelector("#save-project"),k=e=>{o.checkValidity()?(e.style.opacity="1",e.removeAttribute("disabled")):(e.style.opacity="0.5",e.setAttribute("disabled",""))};return o.addEventListener("input",(()=>{k(j),k(y)})),j.addEventListener("click",(t=>{if(t.preventDefault(),!o.checkValidity())return;const r=document.querySelector("#form-project-name").value,n=document.querySelector("#form-project-color").dataset.colorSelected,c=document.querySelector("#favorites-checkbox").checked;a.createProject(r,n,c),e.generateProjectsToNav(),d.generateProjectsToForm(),i.toggleProjects.extend(),c&&(e.generateFavoritesToNav(),i.toggleFavorites.extend()),g(),h(),k(j)})),y.addEventListener("click",(t=>{if(t.preventDefault(),!o.checkValidity())return;const r=s.value,n=l.dataset.colorSelected,c=p.checked;u.changeName(r),u.changeColor(n),u.changeFavorite(c),a.updateProjectStorage(),e.generateFavoritesToNav(),e.generateProjectsToNav(),d.generateProjectsToForm(),i.toggleFavorites.extend(),i.toggleProjects.extend(),g()})),{editProjectModal:e=>{o.querySelector(".form-title").textContent="Edit Project",f("edit");const r=a.projects.find((t=>t.id===e));u=r,s.value=r.name,l.dataset.colorSelected=r.color,l.querySelector("#current-color").style.background=r.color;const n=l.querySelector("p"),c=[...document.querySelectorAll(".color-option")];n.textContent=c.find((e=>e.dataset.colorHex===r.color)).dataset.colorName,r.favorite&&p.setAttribute("checked",""),t.showModal()}}})(),o=e=>{let t=0;for(;e;)t+=e.offsetLeft,e=e.offsetParent;return t},r=e=>{let t=0;for(;e;)t+=e.offsetTop,e=e.offsetParent;return t},n=(()=>{const n=document.querySelector("#project-menu-modal"),c=document.querySelector("#add-to-favorites"),s=document.querySelector("#remove-from-favorites");let l,p,u;const f=()=>{n.close(),l.style.display="none",p.style.display="block"};n.addEventListener("click",(e=>{e.target===n&&f()})),document.querySelector("#edit-project").addEventListener("click",(()=>{f();const e=l.parentNode.id;t.editProjectModal(e)})),c.addEventListener("click",(()=>{u.changeFavorite(!0),a.updateProjectStorage(),e.generateFavoritesToNav(),i.toggleFavorites.extend(),f()})),s.addEventListener("click",(()=>{u.changeFavorite(!1),a.updateProjectStorage(),e.generateFavoritesToNav(),e.generateProjectsToNav(),i.toggleFavorites.extend(),f()}));const h=document.querySelector("#delete-project"),m=document.querySelector("#project-delete-modal");return h.addEventListener("click",(()=>{f();const e=document.querySelector(".project-delete-form > p > span"),t=[...document.querySelectorAll(".project-delete-form img")];1===Math.floor(2*Math.random())+1?(t[0].style.display="none",t[1].style.display="block"):(t[0].style.display="block",t[1].style.display="none"),e.textContent=u.name,m.showModal()})),document.querySelector("#cancel-delete").addEventListener("click",(()=>m.close())),m.addEventListener("click",(e=>{e.target===m&&m.close()})),document.querySelector("#confirm-delete").addEventListener("click",(()=>{m.close(),a.deleteProject(u.id),e.generateFavoritesToNav(),e.generateProjectsToNav(),d.generateProjectsToForm(),i.toggleFavorites.extend(),i.toggleFavorites.extend()})),{openMenu:e=>{e.stopPropagation(),l=e.target,p=e.target.parentNode.querySelector(".file-amount"),l.style.display="flex",p.style.display="none";const t=e.target.parentNode.id,d=a.projects.find((e=>e.id===t));u=d,d.favorite?(c.style.display="none",s.style.display="flex"):(c.style.display="flex",s.style.display="none"),n.style.left=o(l)+"px",n.style.top=r(l)+"px",n.showModal()}}})(),c=(()=>{const e=document.querySelector(".add-task-modal");let t;const o=document.querySelector("#add-task-icon"),r=document.querySelector("#project-select-add-color"),n=document.querySelector("#project-select-add-svg"),c=e=>{"inbox"===e?(r.style.display="none",n.style.display="inline"):(r.style.display="block",n.style.display="none")},d=e=>{document.querySelector("#project-select-add").dataset.projectSelected=e};return o.addEventListener("click",(()=>{void 0===t?(c("inbox"),t=a.projects.find((e=>"Inbox@XFvW$W7"===e.name)),d(t.id)):"Inbox@XFvW$W7"!==t.name?(c("custom-project"),d(t.id),r.style.background=t.color):(c("inbox"),d(t.id));const o=document.querySelector("#project-select-add-name");o.textContent=t.name,"Inbox@XFvW$W7"===o.textContent&&(o.textContent="Inbox"),e.showModal()})),{toggleProjectBtnIcon:c,assignIdToProjectBtn:d}})(),d=(()=>{const e=document.querySelector("#project-select-add"),t=document.querySelector(".choose-project-list"),o=t.querySelector(".choose-project-list > ul"),r=t.querySelector("#inbox-option"),n=document.querySelector("#check-project-icon");e.addEventListener("click",(()=>{const r=[...o.childNodes].find((t=>t.dataset.projectId===e.dataset.projectSelected));console.log(o.childNodes),r.appendChild(n),t.classList.toggle("open-list")}));const d=t=>{const o=t.target.dataset.projectId,n=a.projects.find((e=>e.id===o)),d=e.querySelector("#project-select-add-color"),i=e.querySelector("#project-select-add-name");t.target===r?(c.toggleProjectBtnIcon("inbox"),c.assignIdToProjectBtn(o),i.textContent="Inbox"):(c.toggleProjectBtnIcon("custom-project"),c.assignIdToProjectBtn(o),i.textContent=t.target.textContent,d.style.background=n.color),e.dataset.projectSelected=o};return{generateProjectsToForm:()=>{o.innerHTML="",a.projects.filter((e=>"Inbox@XFvW$W7"!==e.name)).forEach((e=>(e=>{const t=document.createElement("li");t.classList.add("project-option"),t.setAttribute("data-project-id",e.id);const r=document.createElement("div");r.classList.add("project-option-color"),r.style.background=e.color,t.appendChild(r);const n=document.createElement("p");n.classList.add("project-option-name"),n.textContent=e.name,t.appendChild(n),o.appendChild(t),t.addEventListener("click",d)})(e))),r.setAttribute("data-project-id",a.projects.find((e=>"Inbox@XFvW$W7"===e.name)).id),r.addEventListener("click",d),o.insertBefore(r,o.firstChild)}}})();return{NavModule:e,ProjectFormModule:t,FormProjectList:d}})();var l=o(379),p=o.n(l),u=o(795),f=o.n(u),h=o(569),m=o.n(h),g=o(565),x=o.n(g),v=o(216),b=o.n(v),j=o(589),y=o.n(j),k=o(192),w={};w.styleTagTransform=y(),w.setAttributes=x(),w.insert=m().bind(null,"head"),w.domAPI=f(),w.insertStyleElement=b(),p()(k.Z,w),k.Z&&k.Z.locals&&k.Z.locals,function(){const o=localStorage.getItem("projects"),l=localStorage.getItem("tasks"),p=localStorage.getItem("notes"),u=localStorage.getItem("usedIDs");o&&a.projects.push(...JSON.parse(o)),l&&c.tasks.push(...JSON.parse(l)),p&&d.notes.push(...JSON.parse(p)),u&&n.usedIDs.push(...JSON.parse(u));const f=(e,t)=>{const o=(e=>Object.getOwnPropertyNames(e.prototype).filter((e=>"constructor"!==e)))(e),r={};o.forEach((t=>{const o=e.prototype[t];r[t]=o})),t.forEach((e=>{Object.assign(e,r)}))};f(t,c.tasks),f(e,a.projects),f(r,d.notes),a.projects.forEach((e=>e.tasks=[])),c.tasks.forEach((e=>e.notes=[])),d.notes.forEach((e=>{c.tasks.find((t=>t.id===e.taskId)).addNote(e)})),c.tasks.forEach((e=>{a.projects.find((t=>t.id===e.projectId)).addTask(e)})),a.projects.find((e=>"Inbox@XFvW$W7"===e.name))||a.createProject("Inbox@XFvW$W7",null,!1),s.NavModule.generateFavoritesToNav(),s.NavModule.generateProjectsToNav(),s.FormProjectList.generateProjectsToForm(),i.toggleProjects.hide()}(),console.log(a.projects),console.log(c.tasks),console.log(d.notes)})()})();