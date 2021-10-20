(this["webpackJsonpvoice-powered-budget-tracker"]=this["webpackJsonpvoice-powered-budget-tracker"]||[]).push([[0],{254:function(e,t,a){},387:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(28),i=a(44),u=a(17),m=function(e,t){var a;switch(t.type){case"DELETE_TRANSACTION":return a=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("transactions",JSON.stringify(a)),a;case"ADD_TRANSACTION":return a=[t.payload].concat(Object(u.a)(e)),localStorage.setItem("transactions",JSON.stringify(a)),a;default:return e}},s=JSON.parse(localStorage.getItem("transactions"))||[],p=Object(n.createContext)(s),d=function(e){var t=e.children,a=Object(n.useReducer)(m,s),c=Object(i.a)(a,2),o=c[0],l=c[1],u=o.reduce((function(e,t){return"Expense"===t.type?e-t.amount:e+t.amount}),0);return r.a.createElement(p.Provider,{value:{deleteTransaction:function(e){l({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){l({type:"ADD_TRANSACTION",payload:e})},transactions:o,balance:u}},t)},f=(a(254),a(428)),E=a(430),b=a(431),y=a(46),g=a(189),O=a(425),v=Object(O.a)((function(){return{income:{borderBottom:"10px solid rgba(0,255,0,0.5)"},expense:{borderBottom:"10px solid rgba(255,0,0,0.5)"}}})),h=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],j=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],x=[{type:"Business",amount:0,color:h[0]},{type:"Investments",amount:0,color:h[1]},{type:"Extra income",amount:0,color:h[2]},{type:"Deposits",amount:0,color:h[3]},{type:"Lottery",amount:0,color:h[4]},{type:"Gifts",amount:0,color:h[5]},{type:"Salary",amount:0,color:h[6]},{type:"Savings",amount:0,color:h[7]},{type:"Rental income",amount:0,color:h[8]}],C=[{type:"Bills",amount:0,color:j[0]},{type:"Car",amount:0,color:j[1]},{type:"Clothes",amount:0,color:j[2]},{type:"Travel",amount:0,color:j[3]},{type:"Food",amount:0,color:j[4]},{type:"Shopping",amount:0,color:j[5]},{type:"House",amount:0,color:j[6]},{type:"Entertainment",amount:0,color:j[7]},{type:"Phone",amount:0,color:j[8]},{type:"Pets",amount:0,color:j[9]},{type:"Other",amount:0,color:j[10]}],T=function(e){x.forEach((function(e){return e.amount=0})),C.forEach((function(e){return e.amount=0}));var t=Object(n.useContext)(p).transactions.filter((function(t){return t.type===e})),a=t.reduce((function(e,t){return e+t.amount}),0),r="Income"===e?x:C;console.log({}),t.forEach((function(e){var t=r.find((function(t){return t.type===e.category}));t&&(t.amount+=e.amount)}));var c=r.filter((function(e){return e.amount>0}));return{total:a,chartData:{datasets:[{data:c.map((function(e){return e.amount})),backgroundColor:c.map((function(e){return e.color}))}],labels:c.map((function(e){return e.type}))}}},N=function(e){var t=e.title,a=v(),n=T(t),c=n.total,o=n.chartData;return r.a.createElement(f.a,{className:"Income"===t?a.income:a.expense},r.a.createElement(E.a,{title:t}),r.a.createElement(b.a,null,r.a.createElement(y.a,{variant:"h5"},"$",c),r.a.createElement(g.a,{data:o})))},I=a(447),S=a(434),k=Object(O.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cartContent:{paddingTop:0},divider:{margin:"10px 0"}}})),w=a(15),A=a(435),B=a(451),D=a(448),R=a(439),_=a(453),P=a(440),F=Object(O.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"10px"}}})),J=a(153),L=function(e){var t=new Date(e),a="".concat(t.getMonth()+1),n="".concat(t.getDate()),r=t.getFullYear();return a.length<2&&(a="0".concat(a)),n.length<2&&(n="0".concat(n)),[r,a,n].join("-")},W=a(450),$=a(449),M=Object(O.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),H=function(e){var t=e.open,a=e.setOpen,n=M(),c=function(e,t){"clickaway"!==t&&a(!1)};return r.a.createElement("div",{className:n.root},r.a.createElement(W.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:3e3,onClose:c},r.a.createElement($.a,{onClose:c,severity:"success",elevation:6,variant:"filled"},"Transaction Successfully Created!")))},G={amount:"",category:"",type:"Income",date:L(new Date)},z=function(){var e=F(),t=Object(n.useState)(G),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),s=m[0],d=m[1],f=Object(n.useContext)(p).addTransaction,E=Object(l.useSpeechContext)().segment,b=function(){if(!Number.isNaN(Number(c.amount))&&c.date.includes("-")){var e=Object(w.a)(Object(w.a)({},c),{},{amount:Number(c.amount),id:Object(J.a)()});d(!0),f(e),o(G)}};Object(n.useEffect)((function(){if(E){if("add_expense"===E.intent.intent)o(Object(w.a)(Object(w.a)({},c),{},{type:"Expense"}));else if("add_income"===E.intent.intent)o(Object(w.a)(Object(w.a)({},c),{},{type:"Income"}));else{if(E.isFinal&&"create_transaction"===E.intent.intent)return b();if(E.isFinal&&"cancel_transaction"===E.intent.intent)return o(G)}E.entities.forEach((function(e){var t="".concat(e.value.charAt(0)).concat(e.value.slice(1).toLowerCase());switch(e.type){case"amount":o(Object(w.a)(Object(w.a)({},c),{},{amount:e.value}));break;case"category":x.map((function(e){return e.type})).includes(t)?o(Object(w.a)(Object(w.a)({},c),{},{type:"Income",category:t})):C.map((function(e){return e.type})).includes(t)&&o(Object(w.a)(Object(w.a)({},c),{},{type:"Expense",category:t}));break;case"date":o(Object(w.a)(Object(w.a)({},c),{},{date:e.value}))}})),E.isFinal&&c.amount&&c.category&&c.type&&c.date&&b()}}),[E]);var g="Income"===c.type?x:C;return r.a.createElement("div",null,r.a.createElement(S.a,{container:!0,spacing:2},r.a.createElement(H,{open:s,setOpen:d}),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(y.a,{align:"center",variant:"subtitle2",gutterBottom:!0},E&&E.words.map((function(e){return e.value})).join(" "))),r.a.createElement(S.a,{item:!0,xs:6},r.a.createElement(A.a,{fullWidth:!0},r.a.createElement(B.a,null,"Type"),r.a.createElement(D.a,{value:c.type,onChange:function(e){return o(Object(w.a)(Object(w.a)({},c),{},{type:e.target.value}))}},r.a.createElement(R.a,{value:"Income"},"Income"),r.a.createElement(R.a,{value:"Expense"},"Expense")))),r.a.createElement(S.a,{item:!0,xs:6},r.a.createElement(A.a,{fullWidth:!0},r.a.createElement(B.a,null,"Category"),r.a.createElement(D.a,{value:c.category,onChange:function(e){return o(Object(w.a)(Object(w.a)({},c),{},{category:e.target.value}))}},g.map((function(e){return r.a.createElement(R.a,{key:e.type,value:e.type},e.type)}))))),r.a.createElement(S.a,{item:!0,xs:6},r.a.createElement(_.a,{type:"number",label:"Amount",fullWidth:!0,value:c.amount,onChange:function(e){return o(Object(w.a)(Object(w.a)({},c),{},{amount:e.target.value}))}})),r.a.createElement(S.a,{item:!0,xs:6},r.a.createElement(_.a,{type:"date",label:" ",fullWidth:!0,value:c.date,onChange:function(e){return o(Object(w.a)(Object(w.a)({},c),{},{date:L(e.target.value)}))}})),r.a.createElement(P.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,onClick:b},"Create")))},U=a(438),V=a(441),Y=a(390),q=a(442),K=a(454),Q=a(444),X=a(445),Z=a(433),ee=a(443),te=a(446),ae=a(104),ne=a(103),re=Object(O.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:ae.a[500]},avatarExpense:{color:e.palette.getContrastText(ne.a[500]),backgroundColor:ne.a[500]},list:{maxHeight:"80px",width:"100vw",overflow:"auto"}}})),ce=function(){var e=re(),t=Object(n.useContext)(p),a=t.transactions,c=t.deleteTransaction;return r.a.createElement(U.a,{dense:!1,className:e.list},a.map((function(t){return r.a.createElement(V.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,key:t.id},r.a.createElement(Y.a,null,r.a.createElement(q.a,null,r.a.createElement(K.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense},r.a.createElement(ee.a,null))),r.a.createElement(Q.a,{primary:t.category,secondary:"$".concat(t.amount," on ").concat(t.date)}),r.a.createElement(X.a,null,r.a.createElement(Z.a,{edge:"end","aria-label":"delete",onClick:function(){return c(t.id)}},r.a.createElement(te.a,null)))))})))},oe=Math.round(Math.random()),le=function(){return r.a.createElement("div",{elevation:3,style:{textAlign:"center",padding:"0 10%"}},"Try saying: ",r.a.createElement("br",null),"Add ",oe?"Income ":"Expense ","for ",oe?"$100 ":"$50 ","in Category ",oe?"Salary ":"Travel ","for ",oe?"Monday ":"Thursday ")},ie=function(){var e=k(),t=Object(n.useContext)(p).balance;return r.a.createElement(f.a,{className:e.root},r.a.createElement(E.a,{title:"Expense Tracker",subheader:"Powered by Speechly"}),r.a.createElement(b.a,null,r.a.createElement(y.a,{align:"center",variant:"h5"},"Total Balance: $",t),r.a.createElement(y.a,{variant:"subtitle1",style:{lineheight:"1.2em",marginTop:"10px"}},r.a.createElement(le,null)),r.a.createElement(I.a,null),r.a.createElement(z,null)),r.a.createElement(b.a,{className:e.CardContent},r.a.createElement(S.a,{container:!0,spacing:2},r.a.createElement(S.a,{item:!0,xs:12}),r.a.createElement(ce,null))))},ue=a(16),me=Object(O.a)((function(e){return{desktop:Object(ue.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(ue.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(ue.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(ue.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),se=a(101),pe=function(){var e=me(),t=Object(l.useSpeechContext)().speechState,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){t===l.SpeechState.Recording&&a.current.scrollIntoView()}),[t]),r.a.createElement("div",null,r.a.createElement(S.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"}},r.a.createElement(S.a,{item:!0,xs:12,sm:3,className:e.mobile},r.a.createElement(N,{title:"Income"})),r.a.createElement(S.a,{ref:a,item:!0,xs:12,sm:4,className:e.main},r.a.createElement(ie,null)),r.a.createElement(S.a,{item:!0,xs:12,sm:3,className:e.desktop},r.a.createElement(N,{title:"Income"})),r.a.createElement(S.a,{item:!0,xs:12,sm:3,className:e.last},r.a.createElement(N,{title:"Expense"})),r.a.createElement(se.PushToTalkButtonContainer,null,r.a.createElement(se.PushToTalkButton,null))))};o.a.render(r.a.createElement(l.SpeechProvider,{appId:"5fcb81da-fc82-4268-8816-d436c173ec0f",language:"en-US"},r.a.createElement(d,null,r.a.createElement(pe,null))),document.getElementById("root"))}},[[387,1,2]]]);
//# sourceMappingURL=main.d508a6de.chunk.js.map