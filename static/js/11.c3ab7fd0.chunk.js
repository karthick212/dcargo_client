(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{617:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},618:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(617);function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},622:function(e,t,a){"use strict";var r=a(629),n=a.n(r);t.a=n.a.create({baseURL:"https://console.freelancetypers.com/api/"})},628:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(617);var n=a(618);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},635:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(1),n=a.n(r),i=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=t.split(",");return Object.keys(e).forEach((function(t){a.includes(t)||(e[t]="")})),e},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=e,s=o(r.error),l=t.map((function(e){return e.key})),c=a.map((function(e){return e.key}));return r.isError=!1,Object.keys(r).forEach((function(e){if(l.includes(e)&&""===r[e]){r.isError=!0;var o=t.filter((function(t){return t.key==e}))[0].errVal;s[e]=n.a.createElement("span",{className:"error"},n.a.createElement("i",{class:"fa fa-exclamation-circle","aria-hidden":"true"})," ",o)}else if(c.includes(e)&&!i(r[e])){r.isError=!0;var u=a.filter((function(t){return t.key==e}))[0].errVal;s[e]=n.a.createElement("span",{className:"error"},n.a.createElement("i",{class:"fa fa-exclamation-circle","aria-hidden":"true"})," ",u)}})),r}},843:function(e,t,a){"use strict";a.r(t);var r=a(628),n=a(157),i=a(158),o=a(160),s=a(159),l=a(1),c=a.n(l),u=a(862),m=a(863),d=a(865),p=a(864),f=a(635),h=a(622),v=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).onFileChange=function(e){i.setState({myimage:e.target.files[0]})},i.onChange=function(e){var t=i.state;t[e.target.name]=e.target.value,i.setState({data:t}),t.isError&&i.onValidation(t)},i.onValidation=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[{key:"email",errVal:"Enter Email"},{key:"username",errVal:"Enter Username"}],a=Object(f.a)(""===e?i.state:e,t);return i.setState({data:a}),a.isError},i.onFormSubmit=function(e){e.preventDefault();var t=new FormData;t.append("myimage",i.state.file);h.a.post("/upload",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){alert("The file is successfully uploaded")})).catch((function(e){}))},i.onSubmit=function(){i.state;if(!i.onValidation()){var e=new FormData;if(e.append("id",i.state.id),e.append("myimage",i.state.myimage),e.append("email",i.state.email),e.append("username",i.state.username),i.state.isUpdate){var t,a=i.state;a.action="update",a.userid="1",e.append("action","update"),e.append("userid","1"),(t=console).log.apply(t,Object(r.a)(e.entries())),h.a.post("/topworkers/Update",e).then((function(e){"success"===e.data.status&&(i.props.history.push("/topworkers"),alert("Topworkers Details Updated Successfully..!!"))}))}else{var n=i.state;n.workertype="work1",n.userid="1",e.append("action","add"),e.append("userid","1"),h.a.post("/topworkers/Add",e).then((function(e){console.log(e),"success"===e.data.status&&i.props.history.push("/topworkers"),alert("Topworkers Details Added Successfully..!!")})).catch((function(e){console.log(e)}))}}},i.componentDidMount=function(){console.log(i.props.location.state),void 0!==i.props.location.state?h.a.get("/Topworkers",{params:{id:i.props.location.state.id}}).then((function(e){var t=e.data.data[0];i.setState({id:t.id,email:t.email,username:t.username,isUpdate:!0})})):h.a.get("/topworkers/Auto").then((function(e){i.setState({id:e.data[0].id})}))},i.state={id:"1",email:"",username:"",filepath:"",filename:"",myimage:null,isError:!1,isUpdate:!1,error:{email:"",username:"",filepath:"",filename:""}},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isUpdate?"Update":"Add";return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"menubar"},c.a.createElement("div",{className:"row text-left"},c.a.createElement("div",{className:"col-2"}),c.a.createElement("div",{className:"col-8"},c.a.createElement(u.a,null,c.a.createElement(m.a,{tag:"h4"},e," Top Workers"),c.a.createElement(d.a,{className:"padding-20 font-weight-bold"},c.a.createElement("div",{className:"form-group",style:{display:"none"}},c.a.createElement("label",null,"Requester ID"),c.a.createElement("input",{name:"id",type:"text",className:"form-control",disabled:!0,value:this.state.id})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Email"),c.a.createElement("input",{name:"email",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.email}),this.state.error.email),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Username"),c.a.createElement("input",{name:"username",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.username}),this.state.error.username),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"File Upload"),c.a.createElement("input",{name:"filename",type:"file",className:"form-control",required:!0,onChange:this.onFileChange}),this.state.error.filename),c.a.createElement("div",{className:"text-right"},c.a.createElement(p.a,{color:"primary",onClick:this.onSubmit},"Submit"),"  ",c.a.createElement(p.a,{color:"secondary",onClick:this.clear},"Clear"))))),c.a.createElement("div",{className:"col-2"}))))}}]),a}(c.a.Component);t.default=v}}]);
//# sourceMappingURL=11.c3ab7fd0.chunk.js.map