(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{623:function(e,t,a){"use strict";var n=a(626),r=a.n(n);t.a=r.a.create({baseURL:"https://console.freelancetypers.com/api/"})},628:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(157),r=a(158),s=a(160),c=a(159),l=a(1),i=a.n(l),o=a(686),u=a(687),d=a(688),m=a(689),p=a(638),f=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(n.a)(this,a),t.call(this)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:"row"},i.a.createElement("h4",{className:"col-10 text-left"},this.props.header),this.props.addnew?i.a.createElement("div",{className:"col-2"},i.a.createElement(d.a,{color:"primary",onClick:this.props.addnew},"Add New")):"")),i.a.createElement(m.a,null,i.a.createElement(p.c,{hover:!0,entriesOptions:[10,50,100,250],pagesAmount:4,pagingTop:!0,searchTop:!0,searchBottom:!1,data:this.props.data,bordered:!0,scrollX:!0})))))}}]),a}(i.a.Component)},767:function(e,t,a){"use strict";a.r(t);var n=a(629),r=a(157),s=a(158),c=a(160),l=a(159),i=a(1),o=a.n(i),u=a(161),d=a(628),m=a(623),p=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).addnew=function(){n.props.history.push("/requester/add")},n.deleteItem=function(e){!0===window.confirm("Are u want to Delete?")&&m.a.post("/Requesters/Update",{id:e,action:"del",userid:n.context.userdata.userid}).then((function(e){"success"===e.status&&n.loadDate()}))},n.loadDate=function(){m.a.get("/Requesters").then((function(e){"success"===e.data.status&&n.setState({viewdata:e.data.data})}))},n.componentDidMount=function(){n.loadDate()},n.state={viewdata:[]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t={columns:[{label:"ID",field:"id",sort:"asc"},{label:"Requester",field:"requester",sort:"asc"},{label:"Title",field:"title",sort:"asc"},{label:"Reward",field:"reward",sort:"asc"},{label:"Action",field:"action"}],rows:Object(n.a)(this.state.viewdata.map((function(t,a){return{id:t.ID,requester:t.RequesterName,title:t.Title,reward:t.Reward,action:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.b,{className:"btn btn-primary btn-sm",to:{pathname:"/requester/add",state:{id:t.ID}},onClick:e.toggle},"Edit"),"\xa0",o.a.createElement(u.b,{to:{},className:"btn btn-danger btn-sm",onClick:function(){return e.deleteItem(t.ID)}},"Delete"))}})))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"menubar"},o.a.createElement(d.a,{header:"Requesters",data:t,addnew:this.addnew})))}}]),a}(o.a.Component);t.default=p}}]);
//# sourceMappingURL=32.499a67d6.chunk.js.map