(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[29],{622:function(e,t,a){"use strict";var r=a(629),n=a.n(r);t.a=n.a.create({baseURL:"http://3.230.230.205:4000/api/"})},635:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(1),n=a.n(r),s=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=t.split(",");return Object.keys(e).forEach((function(t){a.includes(t)||(e[t]="")})),e},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=e,l=i(r.error),o=t.map((function(e){return e.key})),c=a.map((function(e){return e.key}));return r.isError=!1,Object.keys(r).forEach((function(e){if(o.includes(e)&&""===r[e]){r.isError=!0;var i=t.filter((function(t){return t.key==e}))[0].errVal;l[e]=n.a.createElement("span",{className:"error"},n.a.createElement("i",{class:"fa fa-exclamation-circle","aria-hidden":"true"})," ",i)}else if(c.includes(e)&&!s(r[e])){r.isError=!0;var u=a.filter((function(t){return t.key==e}))[0].errVal;l[e]=n.a.createElement("span",{className:"error"},n.a.createElement("i",{class:"fa fa-exclamation-circle","aria-hidden":"true"})," ",u)}})),r}},786:function(e,t,a){"use strict";a.r(t);var r=a(157),n=a(158),s=a(160),i=a(159),l=a(1),o=a.n(l),c=a(862),u=a(863),d=a(865),m=a(864),p=a(635),f=a(622),h=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState({data:t}),t.isError&&n.onValidation(t)},n.onValidation=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[{key:"requester",errVal:"Enter Requester"},{key:"title",errVal:"Enter Title"},{key:"description",errVal:"Enter Description"},{key:"reward",errVal:"Enter Reward"},{key:"timeallotted",errVal:"Enter Reward"}],a=Object(p.a)(""===e?n.state:e,t);return n.setState({data:a}),a.isError},n.onSubmit=function(){n.state;if(!n.onValidation())if(n.state.isUpdate){var e=n.state;e.action="update",e.userid="1",f.a.post("/Requesters/Update",e).then((function(e){"success"===e.data.status&&(n.props.history.push("/Requesters"),alert("Requester Details Updated Successfully..!!"))}))}else{var t=n.state;t.workertype="work1",t.userid="1",f.a.post("/Requesters/Add",t).then((function(e){console.log(e),"success"===e.data.status&&n.props.history.push("/Requesters"),alert("Requester Details Added Successfully..!!")})).catch((function(e){console.log(e)}))}},n.componentDidMount=function(){console.log(n.props.location.state),void 0!==n.props.location.state?f.a.get("/Requesters",{params:{id:n.props.location.state.id}}).then((function(e){var t=e.data.data[0];n.setState({id:t.ID,requester:t.RequesterName,title:t.Title,description:t.Description,reward:t.Reward,timeallotted:t.TimeAllotted,isUpdate:!0})})):f.a.get("/Requesters/Auto").then((function(e){n.setState({id:e.data[0].id})}))},n.state={id:"1",requester:"",title:"",description:"",reward:"",timeallotted:"",isError:!1,isUpdate:!1,error:{requester:"",title:"",description:"",reward:"",timeallotted:""}},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.state.isUpdate?"Update":"Add";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"menubar"},o.a.createElement("div",{className:"row text-left"},o.a.createElement("div",{className:"col-2"}),o.a.createElement("div",{className:"col-8"},o.a.createElement(c.a,null,o.a.createElement(u.a,{tag:"h4"},e," Requester"),o.a.createElement(d.a,{className:"padding-20 font-weight-bold"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Requester ID"),o.a.createElement("input",{name:"id",type:"text",className:"form-control",disabled:!0,value:this.state.id})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Requester Name"),o.a.createElement("input",{name:"requester",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.requester}),this.state.error.requester),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Title"),o.a.createElement("input",{name:"title",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.title}),this.state.error.title),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Description"),o.a.createElement("textarea",{name:"description",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.description}),this.state.error.description),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Reward"),o.a.createElement("input",{name:"reward",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.reward}),this.state.error.reward),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Time Allotted"),o.a.createElement("input",{name:"timeallotted",type:"number",className:"form-control",required:!0,onChange:this.onChange,value:this.state.timeallotted}),this.state.error.timeallotted),o.a.createElement("div",{className:"text-right"},o.a.createElement(m.a,{color:"primary",onClick:this.onSubmit},"Submit"),"  ",o.a.createElement(m.a,{color:"secondary",onClick:this.clear},"Clear"))))),o.a.createElement("div",{className:"col-2"}))))}}]),a}(o.a.Component);t.default=h}}]);
//# sourceMappingURL=29.de64e2be.chunk.js.map