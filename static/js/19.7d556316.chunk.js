(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{615:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t(156),n=t(1),r=t.n(n),c=t(613),m=r.a.memo((function(e){var a=e.name,t=e.text,n=Object(l.a)(e,["name","text"]),m=a?"https://coreui.io/react/docs/components/".concat(a):e.href;return r.a.createElement("div",{className:"card-header-actions"},r.a.createElement(c.db,Object.assign({},n,{href:m,rel:"noreferrer noopener",target:"_blank",className:"card-header-action"}),r.a.createElement("small",{className:"text-muted"},t||"docs")))}))},617:function(e,a,t){"use strict";function l(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=e[t];return l}t.d(a,"a",(function(){return l}))},618:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var l=t(617);function n(e,a){if(e){if("string"===typeof e)return Object(l.a)(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(l.a)(e,a):void 0}}},620:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var l=t(618);function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],l=!0,n=!1,r=void 0;try{for(var c,m=e[Symbol.iterator]();!(l=(c=m.next()).done)&&(t.push(c.value),!a||t.length!==a);l=!0);}catch(o){n=!0,r=o}finally{try{l||null==m.return||m.return()}finally{if(n)throw r}}return t}}(e,a)||Object(l.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},739:function(e,a,t){"use strict";t.r(a);var l=t(620),n=t(1),r=t.n(n),c=t(613),m=t(621),o=t(615);a.default=function(){var e=r.a.useState(!0),a=Object(l.a)(e,2),t=a[0],n=a[1],E=r.a.useState(!0),i=Object(l.a)(E,2),u=i[0],s=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"12",sm:"6"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Credit Card",r.a.createElement("small",null," Form"),r.a.createElement(o.a,{name:"-Input"})),r.a.createElement(c.k,null,r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"12"},r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"name"},"Name"),r.a.createElement(c.S,{id:"name",placeholder:"Enter your name",required:!0})))),r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"12"},r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"ccnumber"},"Credit Card Number"),r.a.createElement(c.S,{id:"ccnumber",placeholder:"0000 0000 0000 0000",required:!0})))),r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"4"},r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"ccmonth"},"Month"),r.a.createElement(c.xb,{custom:!0,name:"ccmonth",id:"ccmonth"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"11"},"11"),r.a.createElement("option",{value:"12"},"12")))),r.a.createElement(c.u,{xs:"4"},r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"ccyear"},"Year"),r.a.createElement(c.xb,{custom:!0,name:"ccyear",id:"ccyear"},r.a.createElement("option",null,"2017"),r.a.createElement("option",null,"2018"),r.a.createElement("option",null,"2019"),r.a.createElement("option",null,"2020"),r.a.createElement("option",null,"2021"),r.a.createElement("option",null,"2022"),r.a.createElement("option",null,"2023"),r.a.createElement("option",null,"2024"),r.a.createElement("option",null,"2025"),r.a.createElement("option",null,"2026")))),r.a.createElement(c.u,{xs:"4"},r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"cvv"},"CVV/CVC"),r.a.createElement(c.S,{id:"cvv",placeholder:"123",required:!0}))))))),r.a.createElement(c.u,{xs:"12",sm:"6"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Company",r.a.createElement("small",null," Form")),r.a.createElement(c.k,null,r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"company"},"Company"),r.a.createElement(c.S,{id:"company",placeholder:"Enter your company name"})),r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"vat"},"VAT"),r.a.createElement(c.S,{id:"vat",placeholder:"DE1234567890"})),r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"street"},"Street"),r.a.createElement(c.S,{id:"street",placeholder:"Enter street name"})),r.a.createElement(c.K,{row:!0,className:"my-0"},r.a.createElement(c.u,{xs:"8"},r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"city"},"City"),r.a.createElement(c.S,{id:"city",placeholder:"Enter your city"}))),r.a.createElement(c.u,{xs:"4"},r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"postal-code"},"Postal Code"),r.a.createElement(c.S,{id:"postal-code",placeholder:"Postal Code"})))),r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"country"},"Country"),r.a.createElement(c.S,{id:"country",placeholder:"Country name"})))))),r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"12",md:"6"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Basic Form",r.a.createElement("small",null," Elements")),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,null,"Static")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement("p",{className:"form-control-static"},"Username"))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"text-input"},"Text Input")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.S,{id:"text-input",name:"text-input",placeholder:"Text"}),r.a.createElement(c.L,null,"This is a help text"))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"email-input"},"Email Input")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.S,{type:"email",id:"email-input",name:"email-input",placeholder:"Enter Email",autoComplete:"email"}),r.a.createElement(c.L,{className:"help-block"},"Please enter your email"))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"password-input"},"Password")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.S,{type:"password",id:"password-input",name:"password-input",placeholder:"Password",autoComplete:"new-password"}),r.a.createElement(c.L,{className:"help-block"},"Please enter a complex password"))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"date-input"},"Date Input")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.S,{type:"date",id:"date-input",name:"date-input",placeholder:"date"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"disabled-input"},"Disabled Input")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.S,{id:"disabled-input",name:"disabled-input",placeholder:"Disabled",disabled:!0}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"textarea-input"},"Textarea")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.Lb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content..."}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"select"},"Select")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.xb,{custom:!0,name:"select",id:"select"},r.a.createElement("option",{value:"0"},"Please select"),r.a.createElement("option",{value:"1"},"Option #1"),r.a.createElement("option",{value:"2"},"Option #2"),r.a.createElement("option",{value:"3"},"Option #3")))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"selectLg"},"Select Large")),r.a.createElement(c.u,{xs:"12",md:"9",size:"lg"},r.a.createElement(c.xb,{custom:!0,size:"lg",name:"selectLg",id:"selectLg"},r.a.createElement("option",{value:"0"},"Please select"),r.a.createElement("option",{value:"1"},"Option #1"),r.a.createElement("option",{value:"2"},"Option #2"),r.a.createElement("option",{value:"3"},"Option #3")))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"selectSm"},"Select Small")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.xb,{custom:!0,size:"sm",name:"selectSm",id:"SelectLm"},r.a.createElement("option",{value:"0"},"Please select"),r.a.createElement("option",{value:"1"},"Option #1"),r.a.createElement("option",{value:"2"},"Option #2"),r.a.createElement("option",{value:"3"},"Option #3"),r.a.createElement("option",{value:"4"},"Option #4"),r.a.createElement("option",{value:"5"},"Option #5")))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"disabledSelect"},"Disabled Select")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.xb,{custom:!0,name:"disabledSelect",id:"disabledSelect",disabled:!0,autoComplete:"name"},r.a.createElement("option",{value:"0"},"Please select"),r.a.createElement("option",{value:"1"},"Option #1"),r.a.createElement("option",{value:"2"},"Option #2"),r.a.createElement("option",{value:"3"},"Option #3")))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{tag:"label",sm:"3",className:"col-form-label"},"Switch checkboxes"),r.a.createElement(c.u,{sm:"9"},r.a.createElement(c.Hb,{className:"mr-1",color:"primary",defaultChecked:!0}),r.a.createElement(c.Hb,{className:"mr-1",color:"success",defaultChecked:!0,variant:"outline"}),r.a.createElement(c.Hb,{className:"mr-1",color:"warning",defaultChecked:!0,variant:"opposite"}),r.a.createElement(c.Hb,{className:"mr-1",color:"danger",defaultChecked:!0,shape:"pill"}),r.a.createElement(c.Hb,{className:"mr-1",color:"info",defaultChecked:!0,shape:"pill",variant:"outline"}),r.a.createElement(c.Hb,{className:"mr-1",color:"dark",defaultChecked:!0,shape:"pill",variant:"opposite"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,null,"Radios")),r.a.createElement(c.u,{md:"9"},r.a.createElement(c.K,{variant:"checkbox"},r.a.createElement(c.Z,{className:"form-check-input",id:"radio1",name:"radios",value:"option1"}),r.a.createElement(c.cb,{variant:"checkbox",htmlFor:"radio1"},"Option 1")),r.a.createElement(c.K,{variant:"checkbox"},r.a.createElement(c.Z,{className:"form-check-input",id:"radio2",name:"radios",value:"option2"}),r.a.createElement(c.cb,{variant:"checkbox",htmlFor:"radio2"},"Option 2")),r.a.createElement(c.K,{variant:"checkbox"},r.a.createElement(c.Z,{className:"form-check-input",id:"radio3",name:"radios",value:"option3"}),r.a.createElement(c.cb,{variant:"checkbox",htmlFor:"radio3"},"Option 3")))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,null,"Inline Radios")),r.a.createElement(c.u,{md:"9"},r.a.createElement(c.K,{variant:"custom-radio",inline:!0},r.a.createElement(c.Z,{custom:!0,id:"inline-radio1",name:"inline-radios",value:"option1"}),r.a.createElement(c.cb,{variant:"custom-checkbox",htmlFor:"inline-radio1"},"One")),r.a.createElement(c.K,{variant:"custom-radio",inline:!0},r.a.createElement(c.Z,{custom:!0,id:"inline-radio2",name:"inline-radios",value:"option2"}),r.a.createElement(c.cb,{variant:"custom-checkbox",htmlFor:"inline-radio2"},"Two")),r.a.createElement(c.K,{variant:"custom-radio",inline:!0},r.a.createElement(c.Z,{custom:!0,id:"inline-radio3",name:"inline-radios",value:"option3"}),r.a.createElement(c.cb,{variant:"custom-checkbox",htmlFor:"inline-radio3"},"Three")))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,null,"Checkboxes")),r.a.createElement(c.u,{md:"9"},r.a.createElement(c.K,{variant:"checkbox",className:"checkbox"},r.a.createElement(c.T,{id:"checkbox1",name:"checkbox1",value:"option1"}),r.a.createElement(c.cb,{variant:"checkbox",className:"form-check-label",htmlFor:"checkbox1"},"Option 1")),r.a.createElement(c.K,{variant:"checkbox",className:"checkbox"},r.a.createElement(c.T,{id:"checkbox2",name:"checkbox2",value:"option2"}),r.a.createElement(c.cb,{variant:"checkbox",className:"form-check-label",htmlFor:"checkbox2"},"Option 2")),r.a.createElement(c.K,{variant:"checkbox",className:"checkbox"},r.a.createElement(c.T,{id:"checkbox3",name:"checkbox3",value:"option3"}),r.a.createElement(c.cb,{variant:"checkbox",className:"form-check-label",htmlFor:"checkbox3"},"Option 3")))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,null,"Inline Checkboxes")),r.a.createElement(c.u,{md:"9"},r.a.createElement(c.K,{variant:"custom-checkbox",inline:!0},r.a.createElement(c.T,{custom:!0,id:"inline-checkbox1",name:"inline-checkbox1",value:"option1"}),r.a.createElement(c.cb,{variant:"custom-checkbox",htmlFor:"inline-checkbox1"},"One")),r.a.createElement(c.K,{variant:"custom-checkbox",inline:!0},r.a.createElement(c.T,{custom:!0,id:"inline-checkbox2",name:"inline-checkbox2",value:"option2"}),r.a.createElement(c.cb,{variant:"custom-checkbox",htmlFor:"inline-checkbox2"},"Two")),r.a.createElement(c.K,{variant:"custom-checkbox",inline:!0},r.a.createElement(c.T,{custom:!0,id:"inline-checkbox3",name:"inline-checkbox3",value:"option3"}),r.a.createElement(c.cb,{variant:"custom-checkbox",htmlFor:"inline-checkbox3"},"Three")))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.cb,{col:!0,md:"3",htmlFor:"file-input"},"File input"),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.U,{id:"file-input",name:"file-input"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,null,"Multiple File input")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.U,{id:"file-multiple-input",name:"file-multiple-input",multiple:!0,custom:!0}),r.a.createElement(c.cb,{htmlFor:"file-multiple-input",variant:"custom-file"},"Choose Files..."))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.cb,{col:!0,md:3},"Custom file input"),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.U,{custom:!0,id:"custom-file-input"}),r.a.createElement(c.cb,{htmlFor:"custom-file-input",variant:"custom-file"},"Choose file..."))))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(m.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(c.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(m.a,{name:"cil-ban"})," Reset"))),r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Inline",r.a.createElement("small",null," Form")),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post",inline:!0},r.a.createElement(c.K,{className:"pr-1"},r.a.createElement(c.cb,{htmlFor:"exampleInputName2",className:"pr-1"},"Name"),r.a.createElement(c.S,{id:"exampleInputName2",placeholder:"Jane Doe",required:!0})),r.a.createElement(c.K,{className:"pr-1"},r.a.createElement(c.cb,{htmlFor:"exampleInputEmail2",className:"pr-1"},"Email"),r.a.createElement(c.S,{type:"email",id:"exampleInputEmail2",placeholder:"jane.doe@example.com",required:!0})))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(m.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(c.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(m.a,{name:"cil-ban"})," Reset")))),r.a.createElement(c.u,{xs:"12",md:"6"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Horizontal",r.a.createElement("small",null," Form")),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"hf-email"},"Email")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.S,{type:"email",id:"hf-email",name:"hf-email",placeholder:"Enter Email...",autoComplete:"email"}),r.a.createElement(c.L,{className:"help-block"},"Please enter your email"))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"3"},r.a.createElement(c.cb,{htmlFor:"hf-password"},"Password")),r.a.createElement(c.u,{xs:"12",md:"9"},r.a.createElement(c.S,{type:"password",id:"hf-password",name:"hf-password",placeholder:"Enter Password...",autoComplete:"current-password"}),r.a.createElement(c.L,{className:"help-block"},"Please enter your password"))))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(m.a,{name:"cil-scrubber"})," Submit")," ",r.a.createElement(c.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(m.a,{name:"cil-ban"})," Reset"))),r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Normal",r.a.createElement("small",null," Form")),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post"},r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"nf-email"},"Email"),r.a.createElement(c.S,{type:"email",id:"nf-email",name:"nf-email",placeholder:"Enter Email..",autoComplete:"email"}),r.a.createElement(c.L,{className:"help-block"},"Please enter your email")),r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"nf-password"},"Password"),r.a.createElement(c.S,{type:"password",id:"nf-password",name:"nf-password",placeholder:"Enter Password..",autoComplete:"current-password"}),r.a.createElement(c.L,{className:"help-block"},"Please enter your password")))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(m.a,{name:"cil-scrubber"})," Submit")," ",r.a.createElement(c.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(m.a,{name:"cil-ban"})," Reset"))),r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Input",r.a.createElement("small",null," Grid")),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{sm:"3"},r.a.createElement(c.S,{placeholder:".col-sm-3"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{sm:"4"},r.a.createElement(c.S,{placeholder:".col-sm-4"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{sm:"5"},r.a.createElement(c.S,{placeholder:".col-sm-5"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{sm:"6"},r.a.createElement(c.S,{placeholder:".col-sm-6"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{sm:"7"},r.a.createElement(c.S,{placeholder:".col-sm-7"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{sm:"8"},r.a.createElement(c.S,{placeholder:".col-sm-8"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{sm:"9"},r.a.createElement(c.S,{placeholder:".col-sm-9"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{sm:"10"},r.a.createElement(c.S,{placeholder:".col-sm-10"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{sm:"11"},r.a.createElement(c.S,{placeholder:".col-sm-11"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{sm:"12"},r.a.createElement(c.S,{placeholder:".col-sm-12"}))))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(m.a,{name:"cil-user"})," Login")," ",r.a.createElement(c.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(m.a,{name:"cil-ban"})," Reset"))),r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Input",r.a.createElement("small",null," Sizes")),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(c.K,{row:!0},r.a.createElement(c.cb,{sm:"5",col:"sm",htmlFor:"input-small"},"Small Input"),r.a.createElement(c.u,{sm:"6"},r.a.createElement(c.S,{size:"sm",type:"text",id:"input-small",name:"input-small",className:"input-sm",placeholder:".form-control-sm"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.cb,{sm:"5",col:!0,htmlFor:"input-normal"},"Normal Input"),r.a.createElement(c.u,{sm:"6"},r.a.createElement(c.S,{id:"input-normal",name:"input-normal",placeholder:"Normal"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.cb,{sm:"5",col:"lg",htmlFor:"input-large"},"Large Input"),r.a.createElement(c.u,{sm:"6"},r.a.createElement(c.S,{size:"lg",type:"text",id:"input-large",name:"input-large",className:"input-lg",placeholder:".form-control-lg"}))))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"primary"},r.a.createElement(m.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(c.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(m.a,{name:"cil-ban"})," Reset"))))),r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"12",sm:"6"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Form",r.a.createElement("small",null," validation feedback")),r.a.createElement(c.k,null,r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"inputIsValid"},"Input is valid"),r.a.createElement(c.S,{valid:!0,id:"inputIsValid"}),r.a.createElement(c.Sb,null,"Cool! Input is valid")),r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"inputIsInvalid"},"Input is invalid"),r.a.createElement(c.S,{invalid:!0,id:"inputIsInvalid"}),r.a.createElement(c.ab,null,"Houston, we have a problem..."))))),r.a.createElement(c.u,{xs:"12",sm:"6"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Validation feedback Form"),r.a.createElement(c.k,null,r.a.createElement(c.J,{className:"was-validated"},r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"inputSuccess2i"},"Non-required input"),r.a.createElement(c.S,{className:"form-control-success",id:"inputSuccess2i"}),r.a.createElement(c.Sb,null,"Non-required")),r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"inputWarning2i"},"Required input"),r.a.createElement(c.S,{className:"form-control-warning",id:"inputWarning2i",required:!0}),r.a.createElement(c.ab,{className:"help-block"},"Please provide a valid information"),r.a.createElement(c.Sb,{className:"help-block"},"Input provided"))))))),r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"12",md:"4"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Icon/Text Groups"),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"12"},r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-user"}))),r.a.createElement(c.S,{id:"input1-group1",name:"input1-group1",placeholder:"Username"})))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"12"},r.a.createElement(c.V,null,r.a.createElement(c.S,{type:"email",id:"input2-group1",name:"input2-group1",placeholder:"Email"}),r.a.createElement(c.W,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-envelope-closed"})))))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"12"},r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-euro"}))),r.a.createElement(c.S,{id:"input3-group1",name:"input3-group1",placeholder:".."}),r.a.createElement(c.W,null,r.a.createElement(c.Y,null,".00"))))))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"success"},r.a.createElement(m.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(c.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(m.a,{name:"cil-ban"})," Reset")))),r.a.createElement(c.u,{xs:"12",md:"4"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Button Groups"),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"12"},r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.f,{type:"button",color:"primary"},r.a.createElement(m.a,{name:"cil-magnifying-glass"})," Search")),r.a.createElement(c.S,{id:"input1-group2",name:"input1-group2",placeholder:"Username"})))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"12"},r.a.createElement(c.V,null,r.a.createElement(c.S,{type:"email",id:"input2-group2",name:"input2-group2",placeholder:"Email"}),r.a.createElement(c.W,null,r.a.createElement(c.f,{type:"button",color:"primary"},"Submit"))))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"12"},r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.f,{type:"button",color:"primary"},r.a.createElement(m.a,{name:"cib-facebook"}))),r.a.createElement(c.S,{id:"input3-group2",name:"input3-group2",placeholder:"Search"}),r.a.createElement(c.W,null,r.a.createElement(c.f,{type:"button",color:"primary"},r.a.createElement(m.a,{name:"cib-twitter"})))))))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"success"},r.a.createElement(m.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(c.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(m.a,{name:"cil-ban"})," Reset")))),r.a.createElement(c.u,{xs:"12",md:"4"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Dropdowns Groups"),r.a.createElement(c.k,null,r.a.createElement(c.J,{className:"form-horizontal"},r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"12"},r.a.createElement(c.V,null,r.a.createElement(c.z,{className:"input-group-prepend"},r.a.createElement(c.E,{caret:!0,color:"primary"},"Dropdown"),r.a.createElement(c.D,null,r.a.createElement(c.C,null,"Action"),r.a.createElement(c.C,null,"Another Action"),r.a.createElement(c.C,null,"Something else here"),r.a.createElement(c.C,{divider:!0}),r.a.createElement(c.C,null,"Separated link"))),r.a.createElement(c.S,{id:"input1-group3",name:"input1-group3",placeholder:"Username"})))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"12"},r.a.createElement(c.V,null,r.a.createElement(c.S,{type:"email",id:"input2-group3",name:"input2-group3",placeholder:"Email"}),r.a.createElement(c.z,{className:"input-group-append"},r.a.createElement(c.E,{color:"primary"},"Dropdown"),r.a.createElement(c.D,null,r.a.createElement(c.C,null,"Action"),r.a.createElement(c.C,null,"Another Action"),r.a.createElement(c.C,null,"Something else here"),r.a.createElement(c.C,{divider:!0}),r.a.createElement(c.C,null,"Separated link")))))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"12"},r.a.createElement(c.V,null,r.a.createElement(c.z,{className:"input-group-prepend"},r.a.createElement(c.E,{color:"primary"},"Action"),r.a.createElement(c.D,null,r.a.createElement(c.C,null,"Action"),r.a.createElement(c.C,null,"Another Action"),r.a.createElement(c.C,null,"Something else here"),r.a.createElement(c.C,{divider:!0}),r.a.createElement(c.C,null,"Separated link"))),r.a.createElement(c.S,{id:"input3-group3",name:"input3-group3",placeholder:".."}),r.a.createElement(c.z,{className:"input-group-append"},r.a.createElement(c.E,{caret:!0,color:"primary"},"Dropdown"),r.a.createElement(c.D,null,r.a.createElement(c.C,null,"Action"),r.a.createElement(c.C,null,"Another Action"),r.a.createElement(c.C,null,"Something else here"),r.a.createElement(c.C,{divider:!0}),r.a.createElement(c.C,null,"Separated link")))))))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"success"},r.a.createElement(m.a,{name:"cil-scrubber"})," Submit"),r.a.createElement(c.f,{type:"reset",size:"sm",color:"danger"},r.a.createElement(m.a,{name:"cil-ban"})," Reset"))))),r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"12",md:"6"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Use the grid for big devices!",r.a.createElement("small",null," ",r.a.createElement("code",null,".col-lg-*")," ",r.a.createElement("code",null,".col-md-*")," ",r.a.createElement("code",null,".col-sm-*"))),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"8"},r.a.createElement(c.S,{placeholder:".col-md-8"})),r.a.createElement(c.u,{md:"4"},r.a.createElement(c.S,{placeholder:".col-md-4"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"7"},r.a.createElement(c.S,{placeholder:".col-md-7"})),r.a.createElement(c.u,{md:"5"},r.a.createElement(c.S,{placeholder:".col-md-5"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"6"},r.a.createElement(c.S,{placeholder:".col-md-6"})),r.a.createElement(c.u,{md:"6"},r.a.createElement(c.S,{placeholder:".col-md-6"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"5"},r.a.createElement(c.S,{placeholder:".col-md-5"})),r.a.createElement(c.u,{md:"7"},r.a.createElement(c.S,{placeholder:".col-md-7"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{md:"4"},r.a.createElement(c.S,{placeholder:".col-md-4"})),r.a.createElement(c.u,{md:"8"},r.a.createElement(c.S,{placeholder:".col-md-8"}))))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"primary"},"Action"),r.a.createElement(c.f,{size:"sm",color:"danger"},"Action"),r.a.createElement(c.f,{size:"sm",color:"warning"},"Action"),r.a.createElement(c.f,{size:"sm",color:"info"},"Action"),r.a.createElement(c.f,{size:"sm",color:"success"},"Action")))),r.a.createElement(c.u,{xs:"12",md:"6"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Input Grid for small devices!",r.a.createElement("small",null," ",r.a.createElement("code",null,".col-*"))),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post",className:"form-horizontal"},r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{xs:"4"},r.a.createElement(c.S,{placeholder:".col-4"})),r.a.createElement(c.u,{xs:"8"},r.a.createElement(c.S,{placeholder:".col-8"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{xs:"5"},r.a.createElement(c.S,{placeholder:".col-5"})),r.a.createElement(c.u,{xs:"7"},r.a.createElement(c.S,{placeholder:".col-7"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{xs:"6"},r.a.createElement(c.S,{placeholder:".col-6"})),r.a.createElement(c.u,{xs:"6"},r.a.createElement(c.S,{placeholder:".col-6"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{xs:"7"},r.a.createElement(c.S,{placeholder:".col-5"})),r.a.createElement(c.u,{xs:"5"},r.a.createElement(c.S,{placeholder:".col-5"}))),r.a.createElement(c.K,{row:!0},r.a.createElement(c.u,{xs:"8"},r.a.createElement(c.S,{placeholder:".col-8"})),r.a.createElement(c.u,{xs:"4"},r.a.createElement(c.S,{placeholder:".col-4"}))))),r.a.createElement(c.l,null,r.a.createElement(c.f,{type:"submit",size:"sm",color:"primary"},"Action"),r.a.createElement(c.f,{size:"sm",color:"danger"},"Action"),r.a.createElement(c.f,{size:"sm",color:"warning"},"Action"),r.a.createElement(c.f,{size:"sm",color:"info"},"Action"),r.a.createElement(c.f,{size:"sm",color:"success"},"Action"))))),r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"12",sm:"4"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Example Form"),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post"},r.a.createElement(c.K,null,r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,"Username")),r.a.createElement(c.S,{type:"email",id:"username3",name:"username3",autoComplete:"name"}),r.a.createElement(c.W,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-user"}))))),r.a.createElement(c.K,null,r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,"Email")),r.a.createElement(c.S,{type:"email",id:"email3",name:"email3",autoComplete:"username"}),r.a.createElement(c.W,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-envelope-closed"}))))),r.a.createElement(c.K,null,r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,"Password")),r.a.createElement(c.S,{type:"password",id:"password3",name:"password3",autoComplete:"current-password"}),r.a.createElement(c.W,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-asterisk"}))))),r.a.createElement(c.K,{className:"form-actions"},r.a.createElement(c.f,{type:"submit",size:"sm",color:"primary"},"Submit")))))),r.a.createElement(c.u,{xs:"12",sm:"4"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Example Form"),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post"},r.a.createElement(c.K,null,r.a.createElement(c.V,null,r.a.createElement(c.S,{id:"username2",name:"username2",placeholder:"Username",autoComplete:"name"}),r.a.createElement(c.W,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-user"}))))),r.a.createElement(c.K,null,r.a.createElement(c.V,null,r.a.createElement(c.S,{type:"email",id:"email2",name:"email2",placeholder:"Email",autoComplete:"username"}),r.a.createElement(c.W,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-envelope-closed"}))))),r.a.createElement(c.K,null,r.a.createElement(c.V,null,r.a.createElement(c.S,{type:"password",id:"password2",name:"password2",placeholder:"Password",autoComplete:"current-password"}),r.a.createElement(c.W,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-asterisk"}))))),r.a.createElement(c.K,{className:"form-actions"},r.a.createElement(c.f,{type:"submit",size:"sm",color:"secondary"},"Submit")))))),r.a.createElement(c.u,{xs:"12",sm:"4"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Example Form"),r.a.createElement(c.k,null,r.a.createElement(c.J,{action:"",method:"post"},r.a.createElement(c.K,null,r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-user"}))),r.a.createElement(c.S,{id:"username1",name:"username1",placeholder:"Username",autoComplete:"name"}))),r.a.createElement(c.K,null,r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-envelope-closed"}))),r.a.createElement(c.S,{type:"email",id:"email1",name:"email1",placeholder:"Email",autoComplete:"username"}))),r.a.createElement(c.K,null,r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(m.a,{name:"cil-asterisk"}))),r.a.createElement(c.S,{type:"password",id:"password1",name:"password1",placeholder:"Password",autoComplete:"current-password"}))),r.a.createElement(c.K,{className:"form-actions"},r.a.createElement(c.f,{type:"submit",size:"sm",color:"success"},"Submit"))))))),r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"12"},r.a.createElement(c.H,{timeout:300,in:u,unmountOnExit:!0},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Form Elements",r.a.createElement("div",{className:"card-header-actions"},r.a.createElement(c.f,{color:"link",className:"card-header-action btn-setting"},r.a.createElement(m.a,{name:"cil-settings"})),r.a.createElement(c.f,{color:"link",className:"card-header-action btn-minimize",onClick:function(){return n(!t)}},r.a.createElement(m.a,{name:t?"cil-arrow-top":"cil-arrow-bottom"})),r.a.createElement(c.f,{color:"link",className:"card-header-action btn-close",onClick:function(){return s(!1)}},r.a.createElement(m.a,{name:"cil-x"})))),r.a.createElement(c.v,{show:t,timeout:1e3},r.a.createElement(c.k,null,r.a.createElement(c.J,{className:"form-horizontal"},r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"prependedInput"},"Prepended text"),r.a.createElement("div",{className:"controls"},r.a.createElement(c.V,{className:"input-prepend"},r.a.createElement(c.X,null,r.a.createElement(c.Y,null,"@")),r.a.createElement(c.S,{id:"prependedInput",size:"16",type:"text"})),r.a.createElement("p",{className:"help-block"},"Here's some help text"))),r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"appendedInput"},"Appended text"),r.a.createElement("div",{className:"controls"},r.a.createElement(c.V,null,r.a.createElement(c.S,{id:"appendedInput",size:"16",type:"text"}),r.a.createElement(c.W,null,r.a.createElement(c.Y,null,".00"))),r.a.createElement("span",{className:"help-block"},"Here's more help text"))),r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"appendedPrependedInput"},"Append and prepend"),r.a.createElement("div",{className:"controls"},r.a.createElement(c.V,{className:"input-prepend"},r.a.createElement(c.X,null,r.a.createElement(c.Y,null,"$")),r.a.createElement(c.S,{id:"appendedPrependedInput",size:"16",type:"text"}),r.a.createElement(c.W,null,r.a.createElement(c.Y,null,".00"))))),r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"appendedInputButton"},"Append with button"),r.a.createElement("div",{className:"controls"},r.a.createElement(c.V,null,r.a.createElement(c.S,{id:"appendedInputButton",size:"16",type:"text"}),r.a.createElement(c.W,null,r.a.createElement(c.f,{color:"secondary"},"Go!"))))),r.a.createElement(c.K,null,r.a.createElement(c.cb,{htmlFor:"appendedInputButtons"},"Two-button append"),r.a.createElement("div",{className:"controls"},r.a.createElement(c.V,null,r.a.createElement(c.S,{id:"appendedInputButtons",size:"16",type:"text"}),r.a.createElement(c.W,null,r.a.createElement(c.f,{color:"secondary"},"Search"),r.a.createElement(c.f,{color:"secondary"},"Options"))))),r.a.createElement("div",{className:"form-actions"},r.a.createElement(c.f,{type:"submit",color:"primary"},"Save changes"),r.a.createElement(c.f,{color:"secondary"},"Cancel"))))))))))}}}]);
//# sourceMappingURL=19.7d556316.chunk.js.map