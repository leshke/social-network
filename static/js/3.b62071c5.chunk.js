(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{132:function(e,a,t){e.exports={messageBox:"CurrentDialog_messageBox__3AWqx",messages:"CurrentDialog_messages__1q3wc",message:"CurrentDialog_message__BUTd0",messageWrapper:"CurrentDialog_messageWrapper__e5NVZ",messageWrapperForm:"CurrentDialog_messageWrapperForm__PG4Wu"}},133:function(e,a,t){e.exports={dialogs:"Dialog_dialogs__JkcFf",selected:"Dialog_selected__3G6lQ"}},134:function(e,a,t){e.exports={dialogsWrapper:"Messages_dialogsWrapper__3zytG"}},135:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(12),m=t(55),i=t(15),l=t(132),c=t.n(l),o=t(27),g=t.n(o),u=function(e){return n.a.createElement(i.b,{onSubmit:function(a,t){e.sendMessage(a.message),setTimeout((function(){t.reset()}),200)},render:function(e){var a=e.handleSubmit,t=e.submitting,s=e.pristine;return n.a.createElement("form",{onSubmit:a},n.a.createElement("div",{className:c.a.messageBox},n.a.createElement(i.a,{name:"message",component:"textarea",placeholder:"Write your message..."})),n.a.createElement("button",{disabled:t||s},"Send"))}})},p=function(e){var a=e.messageState.messages.map((function(a,t){return n.a.createElement("div",{className:c.a.message,key:t},n.a.createElement("img",{src:e.avatarImg||g.a,alt:"ava"}),n.a.createElement("span",null,a.name))}));return n.a.createElement("div",{className:c.a.messages},n.a.createElement("div",{className:c.a.messageWrapper},a),n.a.createElement("div",{className:c.a.messageWrapperForm},n.a.createElement(u,{sendMessage:e.sendMessage})))},d=Object(r.b)((function(e){return{messageState:e.dialogsPage,avatarImg:e.profilePage.avatar}}),(function(e){return{sendMessage:function(a){return e(Object(m.a)(a))}}}))(p),_=t(10),f=t(31),E=t(9),v=t(133),b=t.n(v),W=function(e){var a=e.dialogsState.map((function(e,a){return n.a.createElement(E.c,{to:"/message/"+e.id,key:a,activeClassName:b.a.selected},e.name)}));return n.a.createElement("div",{className:b.a.dialogs},a)},N=Object(_.d)(Object(r.b)((function(e){return{dialogsState:e.dialogsPage.dialogs}}),(function(){return{}})),f.a)(W),x=t(134),S=t.n(x);a.default=function(){return n.a.createElement("div",{className:S.a.dialogsWrapper},n.a.createElement(N,null),n.a.createElement(d,null))}}}]);
//# sourceMappingURL=3.b62071c5.chunk.js.map