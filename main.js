(()=>{class e{constructor(e,t,s){this.name=e,this.color=t,this.favorite=s,this.tasks=[]}changeName(e){this.name=e}changeColor(e){this.color=e}changeFavorite(e){this.favorite=e}}class t{constructor(e,t,s,o,r){this.title=e,this.description=t,this.dueDate=s,this.priority=o,this.notes=[],this.projectId=r}changeTitle(e){this.title=e}changeDescription(e){this.description=e}changeDueDate(e){this.dueDate=e}changePriority(e){this.priority=e}}class s{constructor(e,t){this.note=e,this.taskId=t}}const o=(()=>{let e=[];return{generateId:()=>{let t="";function s(){for(let e=0;e<8;e++){const e=Math.floor(72*Math.random());t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".charAt(e)}}return s(),e.includes(t)&&(t="",s()),e.push(t),t},removeId:t=>{const s=e.indexOf(t);e.splice(s,1)},usedIDs:e}})(),r=(()=>{let t=[];return{projects:t,createProject:(s,r,i)=>{const a=new e(s,r,i);a.id=o.generateId(),t.push(a)},deleteProject:e=>{const s=t.indexOf(t.find((t=>t.id===e)));t.splice(s,1),i.clearTasksFromDeletedProject(e)},insertTaskToProject:e=>{t.find((t=>t.id===e.projectId)).tasks.push(e)}}})(),i=(()=>{let e=[];return{tasks:e,createTask:(s,i,a,c,n)=>{const d=new t(s,i,a,c,n);d.id=o.generateId(),e.push(d),r.insertTaskToProject(d)},deleteTask:t=>{const s=e.indexOf(e.find((e=>e.id===t)));e.splice(s,1),a.clearNotesFromDeletedTask(t)},clearTasksFromDeletedProject:t=>{const s=e.filter((e=>e.projectId===t)).map((e=>e.id));if(s.length>0)for(let e=0;e<s.length;e++)a.clearNotesFromDeletedTask(s[e]);const o=e.filter((e=>e.projectId!==t));e.length=0,e.push(...o)},insertNoteToTask:t=>{e.find((e=>e.id===t.taskId)).notes.push(t)}}})(),a=(()=>{let e=[];return{notes:e,createNote:(t,r)=>{const a=new s(t,r);a.id=o.generateId(),e.push(a),i.insertNoteToTask(a)},deleteNote:t=>{const s=e.indexOf(e.find((e=>e.id===t)));e.splice(s,1)},clearNotesFromDeletedTask:t=>{const s=e.filter((e=>e.taskId!==t));e.length=0,e.push(...s)}}})();r.createProject("Parkour","red",!0),r.createProject("Drumming","white",!1),r.projects[0].id="cxNHxBHN",r.projects[1].id="7tPb2SWL",i.createTask("Kong Vault","monkey style","date Magellan died","least Prio","cxNHxBHN"),i.createTask("Drum Fill Lesson","just the basics","january 1, 1947","no prio","7tPb2SWL"),i.tasks[0].id="0K*b4HIW",i.tasks[1].id="YhtETU7z",a.createNote("warmup","0K*b4HIW"),a.createNote("dive and raise hips","0K*b4HIW"),a.createNote("drumeo vid 1","YhtETU7z"),console.log(r.projects),console.log(i.tasks),console.log(a.notes)})();