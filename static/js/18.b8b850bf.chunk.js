(this["webpackJsonpdocumentacion-api-hsrp"]=this["webpackJsonpdocumentacion-api-hsrp"]||[]).push([[18],{141:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(45),r=n.n(a),c=n(61),o=n(49),l=n(75),b=n.n(l),i=n(144),s=n.n(i),d=n(60),u=n(0),p=n(40),j=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3?arguments[3]:void 0,l=Object(p.b)(),i=l.usuario,j=Object(u.useState)(void 0),f=Object(o.a)(j,2),h=f[0],O=f[1],v=Object(u.useState)(null),m=Object(o.a)(v,2),x=m[0],g=m[1],y=Object(u.useState)(),S=Object(o.a)(y,2),k=S[0],P=S[1],w=Object(u.useState)(!1),T=Object(o.a)(w,2),C=T[0],_=T[1],E=function(t){a=t},U=function(){O(void 0),g(null),_(!1),P(void 0)},A=function(){var t=b.a.create({baseURL:d.baseURL});return t.interceptors.request.use(s()({getToken:function(){return"".concat(i?i.token:"NO TENGO TOKEN"," ").concat(i?i.idrol:0)}})),t},I=function(){var n=Object(c.a)(r.a.mark((function n(c){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.post(e,"GET"===t?null:a);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),N=function(){var t=Object(c.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=1,t.next=4,I(A());case 4:e=t.sent,O(e.data),P(e.status),_(!1),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(1),P(500),g(t.t0),_(!1);case 15:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!t&&U(),N()};return Object(u.useEffect)((function(){return n&&R(),function(){}}),[i,n]),{data:h,loading:C,responseServerCode:k,error:x,updateParams:E,clientInitRequest:R}}},142:function(t,e,n){"use strict";var a,r,c,o=n(74),l=n(33),b=n(4),i=function(t){var e=t.data;return Object(b.jsxs)("div",{children:[Object(b.jsx)(o.a,{icon:"database",label:"Procedimiento Almacenado",children:e.procedureStore}),e.inputParams&&Object(b.jsx)(w,{title:"Parametros de entrada",name:e.name,type:"INPUT",interfaceTS:e.inputParams.interfaceTS,params:e.inputParams.params}),e.outputParams&&Object(b.jsx)(w,{title:"Parametros de salida",name:e.name,type:"OUTPUT",interfaceTS:e.outputParams.interfaceTS,params:e.outputParams.params})]})},s=n(49),d=n(135),u=n(143),p=n(11),j=n(12),f=j.a.div(a||(a=Object(p.a)(["\n  position: relative;\n  color: #4de791;\n  > span {\n    position: absolute;\n    top: -25px;\n    left: -5px;\n  }\n  > .ant-btn {\n    border: 0;\n    > i {\n      font-size: 20px;\n    }\n  }\n\n  > .ant-btn:focus,\n  .ant-btn:active {\n    color: #4de791;\n  }\n"]))),h=function(t){var e=t.value,n=Object(u.a)(e,{successDuration:1e3}),a=Object(s.a)(n,2),r=a[0],c=a[1];return Object(b.jsxs)(f,{onClick:c,children:[Object(b.jsx)("span",{children:r&&"\xa1Copiado!"}),Object(b.jsx)(d.a,{type:"primary",children:Object(b.jsx)("i",{className:"fa fa-copy"})})]})},O=j.a.div(r||(r=Object(p.a)(["\n    border: 1px solid #303030;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding : 3px 10px; \n    background-color: #111;\n"]))),v=function(t){var e=t.method,n=t.url,a=t.name;return Object(b.jsxs)(O,{children:[Object(b.jsx)("span",{children:e}),Object(b.jsx)("span",{children:n}),Object(b.jsx)(h,{value:"export const API_".concat(a,' = "').concat(n,'"')})]})},m=n(76),x=n(0),g=n(295),y=Object(j.a)(g.a)(c||(c=Object(p.a)(["\n  * {\n    color: white;\n  }\n  .ant-table-tbody > .tr.ant-table-row:hover > * {\n    background: #111;\n  }\n  .ant-table-small .ant-table-thead > tr > th {\n    background-color: #1890ff;\n  }\n  .ant-table-thead > tr > th {\n    color: white;\n    background: #000;\n    border-bottom: 1px solid #303030;\n  }\n  .ant-table-tbody > tr > td,\n  .ant-table.ant-table-bordered > .ant-table-container,\n  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > thead > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tbody > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > td {\n    border-color: #303030;\n  }\n"])));var S,k=function(t){var e=t.dataSource,n=t.columnSource,a=t.expandable,r=t.renderList,c=t.responsive,o=Object(x.useState)([]),l=Object(s.a)(o,2),i=l[0],d=l[1],u=function(t){var e=t.replaceAll("_"," ");e=e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase();var n,a=(n=t,r?r.filter((function(t){return t.name===n})):[]),o=function(t){return c?c.filter((function(e){return e.name===t})):[]}(t),l=a.length>0,b=o.length>0;return{title:e,dataIndex:t,key:t,render:l?a[0].render:void 0,responsive:b?o[0].responsive:void 0}};return Object(x.useEffect)((function(){if(n.length>0){var t=n.map(u);d(t)}return function(){}}),[n]),Object(b.jsx)(y,Object(m.a)(Object(m.a)({bordered:!0,size:"small"},a),{},{dataSource:e,columns:i,pagination:e.length>20}))},P=function(t,e,n){return"export interface DEF_".concat(e.replaceAll(/([a-z])([A-Z])/g,"$1_$2").toUpperCase(),"_").concat(n," {").concat(t.map((function(t){return"".concat(t.name).concat(t.required?"":"?"," : ").concat(t.type)})),"}")},w=function(t){t.interfaceTS;var e=t.params,n=t.title,a=t.name,r=t.type;return Object(b.jsxs)(o.a,{icon:"angle-double-right",label:n,extra:Object(b.jsx)(h,{value:P(e,a,r)}),children:[Object(b.jsx)(o.a,{icon:"",label:"- Interface TS",children:"DEF_".concat(a.replaceAll(/([a-z])([A-Z])/g,"$1_$2").toUpperCase(),"_").concat(r)}),Object(b.jsx)(x.Fragment,{children:e.length>0&&Object(b.jsx)(k,{columnSource:["name","type","required"],dataSource:e})})]})},T=n(297),C=Object(j.a)(T.a)(S||(S=Object(p.a)(["\n    background-color: #222;\n    border-color: #303030;\n    color : #c3c3c3;\n    .ant-table{ \n        background-color: #111;\n    }    \n"]))),_=function(t){var e=t.data;return Object(b.jsx)(C,{hoverable:!0,bordered:!0,children:Object(b.jsxs)(l.a,{gap:"10px",children:[Object(b.jsxs)(o.a,{label:"REFERENCIA:",children:["API_",e.controller.name.toUpperCase()]}),Object(b.jsx)(v,{method:e.method,url:e.url,name:e.controller.name.toUpperCase()}),Object(b.jsx)(i,{data:e.controller})]})})};e.a=function(t){var e=t.api_reference,n=t.cargando,a=void 0===n||n;return Object(b.jsx)(l.c,{gap:"10px",cols:2,responsive:!0,colsWidthResponsive:"100%",children:a?Object(b.jsx)("span",{style:{color:"white"},children:"Cargando referencias..."}):e?e.routing.map((function(t,e){return Object(b.jsx)(_,{data:t},e)})):Object(b.jsx)("span",{style:{color:"white"},children:"No hay referencias disponibles..."})})}},288:function(t,e,n){"use strict";n.r(e);var a=n(142),r=n(141),c=n(4);e.default=function(){var t=Object(r.a)("POST","/api/references/imagen");return Object(c.jsx)("div",{children:Object(c.jsx)(a.a,{api_reference:t.data,cargando:t.loading})})}}}]);
//# sourceMappingURL=18.b8b850bf.chunk.js.map