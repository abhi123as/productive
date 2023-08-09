"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[770],{7770:function(e,s,a){a.r(s),a.d(s,{default:function(){return P}});var t=a(4165),r=a(5861),n=a(885),l=a(2791),c=a(9680),i=a(4880),d=a(8691),o=a(7586),m=a(8515),u=a(9741),h=a(1830),x=a.n(h),b=a(5985),p=a(1613),f=a(3329);function j(e){var s=e.tasks,a=e.setModal,c=(0,l.useState)({f1:"",f2:""}),i=(0,n.Z)(c,2),h=i[0],j=i[1],v=new p.Z("#table1",{destroy:!0,pageLength:5,lengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],search:!0,columnDefs:[{targets:"no-order",orderable:!1}]});(0,m.k6)();var g=(0,l.useState)([]),N=(0,n.Z)(g,2),k=N[0],y=N[1];function w(e){switch(e){case"1":return(0,f.jsx)("span",{className:"badge badge-success",children:"Done"});case"2":return(0,f.jsx)("span",{className:"badge badge-warning",children:"In-Progress"});case"3":return(0,f.jsx)("span",{className:"badge badge-danger",children:"Over Due"});default:return(0,f.jsx)("span",{className:"badge badge-secondary",children:"Not-started"})}}return(0,l.useEffect)((function(){y(s)}),[s]),(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:"card-body py-3 react-table",children:(0,f.jsx)("div",{className:"table-responsive",children:k.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"text-end me-12",children:[(0,f.jsx)("div",{className:"mx-2 btn btn-icon btn-bg-solid btn-active-color-primary btn-sm dropdown-toggle ","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,f.jsx)("i",{className:"bi bi-funnel fs-1"})}),(0,f.jsx)("ul",{className:"dropdown-menu bg-secondary fw-bold p-4",children:(0,f.jsxs)("form",{id:"filterFrm",onSubmit:function(e){return function(e){e.preventDefault(),v.column(2).search(h.f1).draw()}(e)},children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("span",{className:"",children:"By Date"}),(0,f.jsx)("input",{type:"date",className:"form-control mb-2 mb-md-0",id:"f1",onChange:function(e){return j({f1:e.target.value,f2:h.f2})}})]}),(0,f.jsx)("hr",{}),(0,f.jsxs)("li",{children:[(0,f.jsx)("span",{className:"",children:" By Status"}),(0,f.jsxs)("select",{className:"form-control mb-2 mb-md-0","aria-label":"Select example",id:"f2",onChange:function(e){return j({f2:e.target.value,f1:h.f1})},children:[(0,f.jsx)("option",{value:"",children:"Set an Status"}),(0,f.jsx)("option",{value:"1",className:"btn btn-success btn-sm ",children:"Done"}),(0,f.jsx)("option",{value:"2",className:"btn btn-warning btn-sm",children:"In-Progress"}),(0,f.jsx)("option",{value:"0",className:"badge badge-secondary",children:"Not Started"}),(0,f.jsx)("option",{value:"4",className:"badge badge-danger",children:"Over Due"})]})]}),(0,f.jsx)("li",{children:(0,f.jsxs)("div",{className:"d-flex justify-content-around mt-2",children:[(0,f.jsx)("div",{children:(0,f.jsx)("button",{type:"reset",id:"kt_login_signup_form_cancel_button",className:"btn btn-lg btn-light-primary btn-sm",onClick:function(){v.search("").columns().search("").draw()},children:"Reset"})}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{type:"submit",id:"filterSubmit",className:"btn btn-lg btn-primary btn-sm",children:"Apply"})})]})})]})})]}),(0,f.jsxs)("table",{className:"table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3",id:"table1",children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{className:"fw-bolder text-bolder",children:[(0,f.jsx)("th",{className:"min-w-150px text-center",children:"Status"}),(0,f.jsx)("th",{className:"min-w-140px text-center",children:"Task Title"}),(0,f.jsx)("th",{className:"min-w-120px text-center",children:"Due Date"}),(0,f.jsx)("th",{className:"min-w-120px text-center",children:"Description"}),(0,f.jsx)("th",{className:"min-w-100px text-center no-order",children:"Actions"})]})}),(0,f.jsx)("tbody",{className:"",children:(0,f.jsx)(f.Fragment,{children:k.map((function(e,s){return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:"text-center",style:{width:"15%"},children:w(e.status)}),(0,f.jsx)("td",{className:"text-center text-wrap",style:{width:"15%"},children:(0,f.jsx)("span",{className:"text-center",style:{width:"15%"},children:e.taskName})}),(0,f.jsx)("td",{style:{width:"15%"},className:"text-center text-wrap",children:(0,f.jsxs)("span",{className:"text",children:[" ",e.taskDueDate]})}),(0,f.jsx)("td",{className:"text-center text-wrap",children:(0,f.jsx)("div",{className:"scrollable-cell d-flex justify-content-evenly",children:e.taskDescription})}),(0,f.jsxs)("td",{className:"d-flex justify-content-evenly ",children:[(0,f.jsx)("div",{children:(0,f.jsx)(u.rU,{to:"/crafted/pages/edit/".concat(e.taskId),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm",children:(0,f.jsx)(d.D8,{path:"/media/icons/duotune/art/art005.svg",className:"svg-icon-3"})})}),(0,f.jsx)("div",{children:(0,f.jsx)(o.Z,{className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm",onClick:function(){var s,n;s=e.taskName,n=e.taskId,x().fire({title:"Are You Sure?",html:"want to delete "+s+" Task ?",confirmButtonText:"Yes",showCloseButton:!0,showCancelButton:!0}).then(function(){var e=(0,r.Z)((0,t.Z)().mark((function e(s){var r,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.isConfirmed){e.next=8;break}return e.next=3,fetch("http://localhost:8081/api/app/deletetask/".concat(n),{method:"DELETE"});case 3:return r=e.sent,e.next=6,r.json();case 6:"success"==(l=e.sent).messageType?(b.Am.success(l.message,{hideProgressBar:!0}),a(!0)):(b.Am.error(l.message,{hideProgressBar:!0}),a(!0));case 8:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}())},children:(0,f.jsx)(d.D8,{path:"/media/icons/duotune/general/gen027.svg",className:"svg-icon-3"})})})]})]},s)})}))})})]})]}):(0,f.jsx)("div",{className:"text-center py-4 my-6",children:(0,f.jsx)("h1",{children:"No Tasks At Present"})})})})})}var v=a(2982),g=a(1413),N=a(2506),k=a(6863),y=a(8182),w=(a(1083),a(5165)),D=JSON.parse(localStorage.getItem("user")),T={title:"",desc:"",due:"",status:"",remainder:["NINE_AM_ON_DUE_DATE"],users:D.userId},Z=k.Ry().shape({title:k.Z_().min(1,"Minimum 1 symbols").max(50,"Maximum 50 symbols").required("Title is required"),desc:k.Z_().min(2,"Minimum 2 Characters").max(2e3,"Maximum 2000 characters").required("Description is required"),due:k.hT().min(new Date(Date.now()-864e5),"Invalid Date").required("Due Date is required"),remainder:k.IX()}),S=function(e){var s=e.setModal,a=(0,l.useState)(!1),c=(0,n.Z)(a,2),i=c[0],d=(c[1],(0,m.k6)(),(0,N.TA)({initialValues:T,validationSchema:Z,onSubmit:function(){var e=(0,r.Z)((0,t.Z)().mark((function e(a,r){var n,l,c,i,d,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=r.setStatus,r.setSubmitting,r.setFieldValue,c=r.resetForm,console.log(a),l(null),i={taskName:a.title,taskDescription:a.desc,taskDueDate:a.due,status:a.status,reminders:a.remainder,userId:a.users,assignedby:D.userId},console.log("task data=={}",i),e.next=7,fetch("http://localhost:8081/api/app/addtask",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 7:return d=e.sent,e.next=10,d.json();case 10:(o=e.sent)&&(b.Am.success(o.message,{hideProgressBar:!0}),c(),s(!0)),null===(n=document.getElementById("clsBtn"))||void 0===n||n.click();case 13:case"end":return e.stop()}}),e)})));return function(s,a){return e.apply(this,arguments)}}()})),o=(0,l.useState)([]),u=(0,n.Z)(o,2),h=u[0],x=u[1];(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var s,a,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8082/api/auth/getAllUsers",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,r=a.map((function(e){return{name:e.userName,id:e.userId}})),x(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return(0,f.jsx)("div",{className:"modal fade mx-auto",id:"addTask",children:(0,f.jsx)("div",{className:"modal-dialog",children:(0,f.jsxs)("div",{className:"modal-content",children:[(0,f.jsxs)("div",{className:"modal-header",children:[(0,f.jsx)("h5",{className:"modal-title",children:"Add Task"}),(0,f.jsx)("div",{className:"btn btn-icon btn-sm btn-active-light-primary ms-2","data-bs-dismiss":"modal","aria-label":"Close",id:"clsBtn",children:(0,f.jsx)(w.D,{path:"/media/icons/duotune/arrows/arr061.svg",className:"svg-icon svg-icon-2x"})})]}),(0,f.jsx)("div",{className:"modal-body",children:(0,f.jsx)("div",{className:"fs-6",children:(0,f.jsxs)("form",{className:"form w-100 fv-plugins-bootstrap5 fv-plugins-framework",noValidate:!0,id:"kt_login_signup_form",onSubmit:d.handleSubmit,children:[d.status&&(0,f.jsxs)("div",{className:"mb-lg-15 alert d-flex justify-content-between alert-danger",children:[(0,f.jsx)("div",{className:"alert-text font-weight-bold",children:d.status}),(0,f.jsx)("div",{})]}),(0,f.jsxs)("dl",{className:"mb-4",children:[(0,f.jsx)("div",{className:"row fv-row ",children:(0,f.jsxs)("div",{className:"fv-row mb-6",children:[(0,f.jsxs)("dt",{children:[(0,f.jsx)("label",{className:'class="form-label fw-bolder fs-5 text-dark required',children:"Task Title"}),(0,f.jsx)("input",(0,g.Z)((0,g.Z)({placeholder:"Enter Task title",type:"text",autoComplete:"off"},d.getFieldProps("title")),{},{className:(0,y.Z)("form-control form-control-solid")}))]}),(0,f.jsx)("dd",{className:"position-absolute",children:d.touched.title&&d.errors.title&&(0,f.jsx)("div",{className:"fv-plugins-message-container fs-5",children:(0,f.jsx)("div",{className:"fv-help-block",children:(0,f.jsx)("span",{role:"alert",className:"text-danger",children:d.errors.title})})})})]})}),(0,f.jsxs)("div",{className:"fv-row mb-6",children:[(0,f.jsxs)("dt",{children:[(0,f.jsx)("label",{className:"form-label fw-bolder text-dark required",children:"Task Description"}),(0,f.jsx)("textarea",(0,g.Z)((0,g.Z)({rows:5,placeholder:"Enter Task Desc",autoComplete:"off"},d.getFieldProps("desc")),{},{className:(0,y.Z)("form-control  form-control-solid")}))]}),(0,f.jsx)("dd",{className:"position-absolute",children:d.touched.desc&&d.errors.desc&&(0,f.jsx)("div",{className:"fv-plugins-message-container fs-5",children:(0,f.jsx)("div",{className:"fv-help-block",children:(0,f.jsx)("span",{role:"alert",className:"text-danger",children:d.errors.desc})})})})]}),(0,f.jsxs)("div",{className:" fv-row mb-6","data-kt-password-meter":"true",children:[(0,f.jsxs)("dt",{children:[(0,f.jsx)("label",{className:"form-label fw-bolder text-dark required",children:"Due Date"}),(0,f.jsx)("div",{className:"position-relative",children:(0,f.jsx)("input",(0,g.Z)((0,g.Z)({type:"datetime-local",placeholder:"date",autoComplete:"off"},d.getFieldProps("due")),{},{className:(0,y.Z)("form-control  form-control-solid")}))})]}),(0,f.jsx)("dd",{className:"position-absolute",children:d.touched.due&&d.errors.due&&(0,f.jsx)("div",{className:"fv-plugins-message-container fs-5",children:(0,f.jsx)("div",{className:"fv-help-block",children:(0,f.jsx)("span",{role:"alert",className:"text-danger",children:d.errors.due})})})})]}),(0,f.jsxs)("div",{className:"row ",children:[(0,f.jsxs)("div",{className:"col",children:[(0,f.jsxs)("dt",{children:[(0,f.jsx)("label",{className:"form-label fw-bolder text-dark",children:"Status"}),(0,f.jsx)("select",(0,g.Z)((0,g.Z)({className:"form-select form-select-solid","aria-label":"Select example"},d.getFieldProps("status")),{},{"aria-readonly":!0,children:(0,f.jsx)("option",{value:"0",className:"badge badge-secondary",selected:!0,children:"Not Started"})}))]}),(0,f.jsx)("dd",{className:"position-absolute",children:d.touched.status&&d.errors.status&&(0,f.jsx)("div",{className:"fv-plugins-message-container fs-5",children:(0,f.jsx)("div",{className:"fv-help-block",children:(0,f.jsx)("span",{role:"alert",className:"text-danger",children:d.errors.status})})})})]}),(0,f.jsxs)("div",{className:"col ",children:[" ",(0,f.jsx)("label",{className:'class="form-label fw-bolder text-dark required',children:"Set Remainder"}),(0,f.jsx)("br",{}),(0,f.jsx)("div",{className:"accordion ",id:"kt_accordion_1",children:(0,f.jsxs)("div",{className:"accordion-item",children:[(0,f.jsx)("button",{className:"btn form-select form-select-solid   collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#kt_accordion_1_body_1","aria-expanded":"false","aria-controls":"kt_accordion_1_body_1",children:"Select Reminder"}),(0,f.jsxs)("div",{id:"kt_accordion_1_body_1",className:"accordion-collapse collapse","aria-labelledby":"kt_accordion_1_header_1","data-bs-parent":"#kt_accordion_1",children:[(0,f.jsx)("div",{className:"accordion-body","aria-label":"Select example",children:["FOUR_HOURS_BEFORE","TWO_HOURS_BEFORE"].map((function(e){return(0,f.jsxs)("div",{className:"form-check form-check-custom form-check-solid",children:[(0,f.jsx)("input",{type:"checkbox",className:"form-check-input",autoComplete:"off",name:"reminders",value:e,checked:d.values.remainder.includes(e),onChange:function(e){var s=e.target.value;d.values.remainder.includes(s)?d.setFieldValue("remainder",d.values.remainder.filter((function(e){return e!==s}))):d.setFieldValue("remainder",[].concat((0,v.Z)(d.values.remainder),[s]))}}),(0,f.jsx)("label",{children:e}),(0,f.jsx)("br",{})]},e)}))})," ",(0,f.jsx)("dd",{className:"position-absolute",children:d.touched.remainder&&d.errors.remainder&&(0,f.jsx)("div",{className:"fv-plugins-message-container",children:(0,f.jsx)("div",{className:"fv-help-block",children:(0,f.jsx)("span",{role:"alert",className:"text-danger",children:d.errors.remainder})})})})]})]})})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("dt",{children:[(0,f.jsx)("label",{className:"form-label fw-bolder text-dark required",children:"assigned to"}),(0,f.jsxs)("select",(0,g.Z)((0,g.Z)({className:"form-select form-select-solid","aria-label":"Select example"},d.getFieldProps("users")),{},{children:[(0,f.jsx)("option",{value:D.userId,children:"select user"}),h.map((function(e,s){return(0,f.jsx)("option",{value:e.id,children:e.name},s)}))]}))]}),(0,f.jsx)("dd",{className:"position-absolute",children:d.touched.status&&d.errors.status&&(0,f.jsx)("div",{className:"fv-plugins-message-container",children:(0,f.jsx)("div",{className:"fv-help-block",children:(0,f.jsx)("span",{role:"alert",className:"text-danger",children:d.errors.status})})})})]})]}),(0,f.jsxs)("div",{className:"text-center mx-auto",children:[(0,f.jsxs)("button",{type:"submit",id:"kt_sign_up",className:"btn btn-lg btn-primary w-75 mb-5",disabled:!d.isValid,children:[!i&&(0,f.jsx)("span",{className:"indicator-label",children:"Add Task"}),i&&(0,f.jsxs)("span",{className:"indicator-progress",style:{display:"block"},children:["Please wait..."," ",(0,f.jsx)("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),(0,f.jsx)("button",{type:"button",id:"cancel_button",className:"btn btn-lg btn-light-primary w-75 mb-5","data-bs-dismiss":"modal",onClick:function(){return d.resetForm()},children:"Cancel"})]})]})})})]})})})},_=a(3513);function C(e){var s=e.tasks,a=e.setModal,c=((0,m.k6)(),(0,l.useState)([])),i=(0,n.Z)(c,2),o=i[0],h=i[1];(0,l.useEffect)((function(){h(s)}),[s]);var p=[{name:"status",selector:function(e){return function(e){switch(e){case"1":return(0,f.jsx)("span",{className:"badge badge-success",children:"Done"});case"2":return(0,f.jsx)("span",{className:"badge badge-warning",children:"In-Progress"});case"3":return(0,f.jsx)("span",{className:"badge badge-danger",children:"Over Due"});default:return(0,f.jsx)("span",{className:"badge badge-secondary",children:"Not-started"})}}(e.status)},sortable:!0},{name:"Title",selector:function(e){return e.taskName},sortable:!0},{name:"Due Date",selector:function(e){return e.taskDueDate},sortable:!0},{name:"Description",selector:function(e){return e.taskDescription}},{name:"Actions",selector:function(e){return(0,f.jsxs)("div",{className:"d-flex justify-content-evenly",children:[(0,f.jsx)("div",{children:(0,f.jsx)(u.rU,{to:"/crafted/pages/edit/".concat(e.taskId),className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm",children:(0,f.jsx)(d.D8,{path:"/media/icons/duotune/art/art005.svg",className:"svg-icon-3"})})}),(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm",onClick:function(){var s,n;s=e.taskName,n=e.taskId,x().fire({title:"Are You Sure?",html:"want to delete "+s+" Task ?",confirmButtonText:"Yes",showCloseButton:!0,showCancelButton:!0}).then(function(){var e=(0,r.Z)((0,t.Z)().mark((function e(s){var r,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.isConfirmed){e.next=8;break}return e.next=3,fetch("http://localhost:8081/api/app//deletetask/".concat(n),{method:"DELETE"});case 3:return r=e.sent,e.next=6,r.json();case 6:"success"==(l=e.sent).messageType?(b.Am.success(l.message,{hideProgressBar:!0}),a(!0)):(b.Am.error(l.message,{hideProgressBar:!0}),a(!0));case 8:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}())},children:(0,f.jsx)(d.D8,{path:"/media/icons/duotune/general/gen027.svg",className:"svg-icon-3"})})})]})}}];return(0,l.useEffect)((function(){h(s)}),[s]),(0,f.jsx)("div",{className:"dt",children:(0,f.jsx)(_.ZP,{columns:p,data:o,pagination:!0,customStyles:{headCells:{style:{fontWeight:"800"}},cells:{style:{width:"175px"}},columns:{style:{}}}})})}a(8890);function E(e){var s=e.allTasks,a=e.setModal,t=(0,l.useState)(s),r=(0,n.Z)(t,2),c=r[0],i=r[1],d=(0,l.useState)([]),o=(0,n.Z)(d,2),m=o[0],u=o[1];function h(e){return new Date(e.taskDueDate).toJSON().slice(0,10)==(new Date).toJSON().slice(0,10)}(0,l.useEffect)((function(){i(s)}),[s]),(0,l.useEffect)((function(){var e=c.filter(h);u(e)}),[c]);return(0,f.jsxs)("div",{className:"card card-custom my-4",children:[(0,f.jsxs)("div",{className:"card-header",children:[(0,f.jsxs)("span",{className:"card-title",children:[(0,f.jsx)("button",{type:"button",className:"btn btn-sm btn-dark","data-bs-toggle":"modal","data-bs-target":"#addTask",children:"Add Task"}),(0,f.jsx)("div",{children:(0,f.jsx)(S,{setModal:a})})]}),(0,f.jsx)("div",{className:"card-toolbar"})]}),(0,f.jsxs)("div",{className:"card-body",children:[(0,f.jsxs)("ul",{className:"nav nav-tabs ",id:"myTab",role:"tablist",children:[(0,f.jsx)("li",{className:"nav-item",role:"presentation",children:(0,f.jsx)("button",{className:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true",children:"Today"})}),(0,f.jsx)("li",{className:"nav-item",role:"presentation",children:(0,f.jsx)("button",{className:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false",children:"All"})})]}),(0,f.jsxs)("div",{className:"tab-content ",id:"myTabContent",children:[(0,f.jsx)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:(0,f.jsx)(C,{tasks:m,setModal:a,className:"tables",id:"tb1"})}),(0,f.jsx)("div",{className:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab",children:(0,f.jsx)(j,{tasks:c,setModal:a,className:"tables"})})]})]}),(0,f.jsx)("div",{className:"card-footer"})]})}var P=function(){var e=(0,l.useState)(!1),s=(0,n.Z)(e,2),a=s[0],d=s[1],o=JSON.parse(localStorage.getItem("user")),m=(0,l.useState)([]),u=(0,n.Z)(m,2),h=u[0],x=u[1],b=(0,l.useState)(o.userId),p=(0,n.Z)(b,2),j=p[0],v=(p[1],function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var s,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8081/api/app/getallTask/".concat(j),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return s=e.sent,e.next=6,s.json();case 6:a=e.sent,x(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}());return(0,l.useEffect)((function(){a||v()}),[]),(0,l.useEffect)((function(){v()}),[a]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.V1,{breadcrumbs:[],children:"To-Do"}),(0,f.jsx)(c.Z,{Title:"To-Do ",Description:"The Todo feature in ProductivePal is a user-friendly task management tool that empowers users to organize and prioritize their tasks effectively. With its intuitive interface, users can easily create, track, and complete tasks, ensuring nothing is overlooked. Whether it's personal to-do lists or work-related tasks, ProductivePal's Todo feature ensures users stay on top of their responsibilities and achieve their goals efficiently."}),(0,f.jsx)(E,{allTasks:h,setModal:d})]})}}}]);
//# sourceMappingURL=770.6db6949e.chunk.js.map