(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[31],{623:function(e,a,t){"use strict";var n=t(626),r=t.n(n);a.a=r.a.create({baseURL:"https://console.freelancetypers.com/api/"})},630:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(1),r=t.n(n),c=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},l=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=a.split(",");return Object.keys(e).forEach((function(a){t.includes(a)||(e[a]="")})),e},s=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=e,s=l(n.error),o=a.map((function(e){return e.key})),u=t.map((function(e){return e.key}));return n.isError=!1,Object.keys(n).forEach((function(e){if(o.includes(e)&&""===n[e]){n.isError=!0;var l=a.filter((function(a){return a.key==e}))[0].errVal;s[e]=r.a.createElement("span",{className:"error"},r.a.createElement("i",{class:"fa fa-exclamation-circle","aria-hidden":"true"})," ",l)}else if(u.includes(e)&&!c(n[e])){n.isError=!0;var i=t.filter((function(a){return a.key==e}))[0].errVal;s[e]=r.a.createElement("span",{className:"error"},r.a.createElement("i",{class:"fa fa-exclamation-circle","aria-hidden":"true"})," ",i)}})),n}},859:function(e,a,t){"use strict";t.r(a);var n=t(157),r=t(158),c=t(160),l=t(159),s=t(1),o=t.n(s),u=t(613),i=t(621),m=(t(630),t(623)),p=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).onChange=function(e){var a=r.state;a[e.target.name]=e.target.value,r.setState({data:a})},r.onSubmit=function(){var e={};e.username=r.state.username,e.password=r.state.password,console.log(e),m.a.post("/Authentication",e).then((function(e){e.data.data[0].cnt>0&&r.props.history.push("/dashboard")})).catch((function(e){}))},r.state={username:"",password:"",isSuccess:"",isError:""},r}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},o.a.createElement(u.w,null,o.a.createElement(u.wb,{className:"justify-content-center"},o.a.createElement(u.u,{md:"6"},o.a.createElement(u.m,null,o.a.createElement(u.j,{className:"p-4"},o.a.createElement(u.k,null,o.a.createElement(u.J,null,o.a.createElement("h1",null,"Login"),o.a.createElement("p",{className:"text-muted"},"Sign In to your account"),o.a.createElement(u.V,{className:"mb-3"},o.a.createElement(u.X,null,o.a.createElement(u.Y,null,o.a.createElement(i.a,{name:"cil-user"}))),o.a.createElement(u.S,{type:"text",placeholder:"Username",autoComplete:"username",name:"username",onChange:this.onChange,value:this.state.username})),o.a.createElement(u.V,{className:"mb-4"},o.a.createElement(u.X,null,o.a.createElement(u.Y,null,o.a.createElement(i.a,{name:"cil-lock-locked"}))),o.a.createElement(u.S,{type:"password",placeholder:"Password",autoComplete:"current-password",name:"password",onChange:this.onChange,value:this.state.password})),o.a.createElement(u.wb,null,o.a.createElement(u.u,{xs:"6"},o.a.createElement(u.f,{color:"primary",className:"px-4",onClick:this.onSubmit},"Login")))))))))))}}]),t}(o.a.Component);a.default=p}}]);
//# sourceMappingURL=31.1ff4e985.chunk.js.map