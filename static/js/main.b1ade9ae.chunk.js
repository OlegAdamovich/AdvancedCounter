(this["webpackJsonpadvanced-counter"]=this["webpackJsonpadvanced-counter"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t.n(c),s=t(1),u=(t(9),function(e){return l.a.createElement("button",{className:"Button ".concat(e.style),onClick:e.onClickHandler,disabled:e.disabled},e.title)}),m=function(e){return l.a.createElement("input",{className:e.error,type:"number",value:e.value,onChange:function(a){e.onChangeHandler(+a.currentTarget.value)},min:e.min,max:e.max})},i=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(0),i=Object(s.a)(r,2),o=i[0],d=i[1],v=Object(n.useState)(3),b=Object(s.a)(v,2),E=b[0],p=b[1],j=Object(n.useState)("enter correct values and press set"),O=Object(s.a)(j,2),k=O[0],C=O[1],N=Object(n.useState)(!1),f=Object(s.a)(N,2),x=f[0],B=f[1],S=Object(n.useState)(!0),g=Object(s.a)(S,2),H=g[0],h=g[1],y=Object(n.useState)(!1),I=Object(s.a)(y,2),M=I[0],V=I[1],q=Object(n.useState)(!1),w=Object(s.a)(q,2),z=w[0],J=w[1],A=t===E?"Error":"",D=t===E?"EndCount":"",T=o<0||E<0||o>=E||E<=o||E>10?"Error":"",F=o<0||o===E?"Error":"",G=E<0||E>10||o===E?"Error":"",K=function(){J(!z),c(o)};return l.a.createElement("div",{className:"App"},z?l.a.createElement("div",{className:"SettingsBlock"},l.a.createElement("div",{className:"MessageBlock ".concat(T)},l.a.createElement("div",null,k)),l.a.createElement("div",{className:"InputValuesBlock"},l.a.createElement("div",{className:"InputValue"},"max value: ",l.a.createElement(m,{value:E,onChangeHandler:function(e){p(e),e<0?(V(!0),C("max value can't be less zero")):e>10?(V(!0),C("max value can't be more 10")):e===o?(V(!0),C("max value can't be equal min value")):e<o?(V(!0),C("max value can't be less min value")):o<0?V(!0):(C("enter correct values and press set"),V(!1))},error:G,min:o,max:11})),l.a.createElement("div",{className:"InputValue"},"min value: ",l.a.createElement(m,{value:o,onChangeHandler:function(e){d(e),e<0?(V(!0),C("min value can't be less zero")):e===E?(V(!0),C("min value can't be equal max value")):e>E?(V(!0),C("min value can't be more max value")):E<0||E>10?V(!0):(C("enter correct values and press set"),V(!1))},error:F,min:-1,max:E}))),l.a.createElement("div",{className:"ButtonsBlock BtnCenter"},l.a.createElement(u,{title:"set",onClickHandler:K,disabled:M}))):l.a.createElement("div",{className:"CounterBlock"},l.a.createElement("div",{className:"MessageBlock"},l.a.createElement("div",null,t," - ",E)),l.a.createElement("div",{className:"Display ".concat(A)},l.a.createElement("div",null,t)),l.a.createElement("div",{className:"ButtonsBlock"},l.a.createElement(u,{title:"inc",onClickHandler:function(){c(t+=1),h(!1),t===E&&B(!0)},disabled:x}),l.a.createElement(u,{title:"reset",onClickHandler:function(){c(o),B(!1),h(!0)},disabled:H,style:D}),l.a.createElement(u,{title:"set",onClickHandler:K,disabled:M}))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null)),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.b1ade9ae.chunk.js.map