(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[33],{622:function(e,t,a){"use strict";var n=a(629),r=a.n(n);t.a=r.a.create({baseURL:"https://console.freelancetypers.com/api/"})},627:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(157),r=a(158),c=a(160),l=a(159),o=a(1),i=a.n(o),s=a(862),d=a(863),u=a(864),m=a(865),p=a(637),f=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(n.a)(this,a),t.call(this)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement(d.a,null,i.a.createElement("div",{className:"row"},i.a.createElement("h4",{className:"col-10 text-left"},this.props.header),this.props.addnew?i.a.createElement("div",{className:"col-2"},i.a.createElement(u.a,{color:"primary",onClick:this.props.addnew},"Add New")):"")),i.a.createElement(m.a,null,i.a.createElement(p.c,{hover:!0,entriesOptions:[10,25,50],pagesAmount:4,pagingTop:!0,searchTop:!0,searchBottom:!1,data:this.props.data})))))}}]),a}(i.a.Component)},787:function(e,t,a){"use strict";a.r(t);var n=a(628),r=a(157),c=a(158),l=a(160),o=a(159),i=a(1),s=a.n(i),d=a(161),u=a(627),m=a(622),p=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).addnew=function(){n.props.history.push("/work/add")},n.deleteItem=function(e){!0===window.confirm("Are u want to Delete?")&&m.a.post("/Works/Update",{id:e,action:"del"}).then((function(e){"success"===e.status&&window.location.reload()}))},n.loadDate=function(){m.a.get("/Works").then((function(e){console.log(e),"success"===e.data.status&&n.setState({viewdata:e.data.data})}))},n.componentDidMount=function(){n.loadDate()},n.state={viewdata:[]},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t={columns:[{label:"ID",field:"id",sort:"asc"},{label:"Requester",field:"work",sort:"asc"},{label:"Entry Date",field:"startdate",sort:"asc"},{label:"Expire Date",field:"expiredate",sort:"asc"},{label:"File Name",field:"filename",sort:"asc"},{label:"Action",field:"action"}],rows:Object(n.a)(this.state.viewdata.map((function(t,a){return{id:t.id,work:t.RequesterName,startdate:t.startDate,expiredate:t.expireDate,filename:t.fileName,action:s.a.createElement(s.a.Fragment,null,s.a.createElement(d.b,{className:"btn btn-primary btn-sm",to:{pathname:"/work/add",state:{id:t.id}},onClick:e.toggle},"Edit"),"\xa0",s.a.createElement(d.b,{to:{},className:"btn btn-danger btn-sm",onClick:function(){return e.deleteItem(t.id)}},"Delete"))}})))};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"menubar"},s.a.createElement(u.a,{header:"Works",data:t,addnew:this.addnew})))}}]),a}(s.a.Component);t.default=p}}]);
//# sourceMappingURL=33.c7c93e49.chunk.js.map