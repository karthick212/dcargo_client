(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[27],{622:function(e,t,a){"use strict";var n=a(629),s=a.n(n);t.a=s.a.create({baseURL:"https://console.freelancetypers.com/api/"})},627:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(157),s=a(158),c=a(160),l=a(159),i=a(1),r=a.n(i),o=a(862),d=a(863),u=a(864),p=a(865),m=a(637),h=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(n.a)(this,a),t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("h4",{className:"col-10 text-left"},this.props.header),this.props.addnew?r.a.createElement("div",{className:"col-2"},r.a.createElement(u.a,{color:"primary",onClick:this.props.addnew},"Add New")):"")),r.a.createElement(p.a,null,r.a.createElement(m.c,{hover:!0,entriesOptions:[10,50,100,250],pagesAmount:4,pagingTop:!0,searchTop:!0,searchBottom:!1,data:this.props.data})))))}}]),a}(r.a.Component)},657:function(e,t,a){"use strict";var n=a(157),s=a(158),c=a(160),l=a(159),i=a(1),r=a.n(i),o=a(870),d=a(866),u=a(867),p=a(868),m=a(864),h=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={modalOpen:s.props.open},s}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(o.a,{size:"xl",isOpen:this.state.modalOpen},r.a.createElement(d.a,{className:"App text-center",style:{display:"block"}},this.props.modalheader),r.a.createElement(u.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},this.props.modalbody))),r.a.createElement(p.a,{style:{textAlign:"center",display:"block"}},void 0!==this.props.button1&&""!==this.props.button1?r.a.createElement(m.a,{style:{color:"yellow",padding:"20px 25px !important"},color:"primary",className:"btn hero-btn1",onClick:this.props.clickButton1},this.props.button1):"","\xa0\xa0",void 0!==this.props.button2&&""!==this.props.button2?r.a.createElement(m.a,{style:{padding:"20px 25px !important"},color:"primary",className:"btn hero-btn1",onClick:this.props.clickButton2},this.props.button2):"","\xa0\xa0",void 0!==this.props.button3&&""!==this.props.button3?r.a.createElement(m.a,{style:{padding:"20px 25px !important"},color:"secondary",className:"btn hero-btn1",onClick:this.props.clickButton3},this.props.button3):"")))}}]),a}(r.a.Component);t.a=h},833:function(e,t,a){"use strict";a.r(t);var n=a(628),s=a(157),c=a(158),l=a(160),i=a(159),r=a(1),o=a.n(r),d=a(627),u=a(657),p=a(622),m=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).clickView=function(e){n.setState({modalopen:!n.state.modalopen,filepath:e.filepath,entertext:e.entertext,tempid:e.id})},n.clickStatus=function(e,t){var a={userid:"1"};a.status=t,a.id=e,p.a.post("/userWorks/Update",a).then((function(e){"success"===e.data.status&&(n.loadDate(),alert("Requester Details Updated Successfully..!!"))}))},n.modalClick=function(e){n.onUpdate(e)},n.clickRestart=function(){n.setState({modalopen:!n.state.modalopen})},n.handleChange=function(e){n.setState({selectedOption:e}),console.log("Option selected:",e)},n.onUpdate=function(e){var t=n.state;t.userid="1",t.status=e,t.id=n.state.tempid,p.a.post("/userWorks/Update",t).then((function(e){"success"===e.data.status&&(n.clickRestart(),n.loadDate(),alert("Requester Details Updated Successfully..!!"))}))},n.onChange=function(e){var t=e.target.selectedIndex,a=e.target.childNodes[t].getAttribute("id");console.log(a,e.target.value),n.setState({tempid:a,tempValue:e.target.value})},n.addnew=function(){n.props.history.push("/requester/add")},n.deleteItem=function(e){!0===window.confirm("Are u want to Delete?")&&p.a.post("/Requesters/Update",{id:e,action:"del",userid:n.context.userdata.userid}).then((function(e){"success"===e.status&&n.loadDate()}))},n.loadDate=function(){if(n.props.location.state){var e=n.props.location.state;p.a.get("/userWorks",{params:{email:e.email,worktype:e.worktype}}).then((function(e){"success"===e.data.status&&n.setState({viewdata:e.data.data})}))}},n.componentDidMount=function(){console.log(n.props.location.state),n.loadDate()},n.state={viewdata:[],tempValue:"",tempid:"",selectedOption:null,modalopen:!1,filename:"",filepath:"",entertext:"",isError:!1,error:{entertext:""},successMsg:"",imgWidth:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row",style:{padding:"1em"}},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"container-outer mb-4"},o.a.createElement("img",{id:"map",src:this.state.filepath,width:null===this.state.imgWidth?"100%":this.state.imgWidth}))),o.a.createElement("div",{className:"col-6"},o.a.createElement("textarea",{name:"entertext",className:"col-12 mb-4",placeholder:"Please type here",style:{height:"24em"},onChange:this.onChange,value:this.state.entertext}),this.state.error.entertext,""!==this.state.successMsg?o.a.createElement("div",{className:"success"},o.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})," ",this.state.successMsg):""))),a=(this.state.selectedOption,{columns:[{label:"ID",field:"id",sort:"asc"},{label:"Email",field:"email",sort:"asc"},{label:"Work Type",field:"worktype",sort:"asc"},{label:"Date",field:"date",sort:"asc"},{label:"Time",field:"time",sort:"asc"},{label:"Status",field:"status"},{label:"Action",field:"action"}],rows:Object(n.a)(this.state.viewdata.map((function(t,a){return{id:t.id,email:t.email,worktype:t.workType,date:t.date1,time:t.time1,status:t.isAccept?"Accepted":t.isReject?"Rejected":"Pending",action:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"btn btn-success btn-sm",onClick:function(){return e.clickStatus(t.id,"Accepted")}},"Accept")," ",o.a.createElement("div",{className:"btn btn-danger btn-sm",onClick:function(){return e.clickStatus(t.id,"Rejected")}},"Reject")," ",o.a.createElement("div",{className:"btn btn-info btn-sm",onClick:function(){return e.clickStatus(t.id,"Pending")}},"Pending")," ",o.a.createElement("div",{className:"btn btn-primary btn-sm",onClick:function(){return e.clickView(t)}},"View"))}})))});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"menubar"},this.state.modalopen?o.a.createElement(u.a,{open:!0,button1:"Accept",clickButton1:function(){return e.modalClick("Accepted")},button2:"Reject",clickButton2:function(){return e.modalClick("Rejected")},button3:"Close",clickButton3:this.clickRestart,modalheader:"Quality Checking",modalbody:t}):"",o.a.createElement(d.a,{header:"Work Status",data:a})))}}]),a}(o.a.Component);t.default=m}}]);
//# sourceMappingURL=27.0e569f9c.chunk.js.map