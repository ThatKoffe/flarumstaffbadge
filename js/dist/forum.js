module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["common/components/EditUserModal"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["common/models/User"]},function(t,e){t.exports=flarum.core.compat["common/utils/extractText"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["forum/components/UserPage"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(0),a=o.n(n),u=o(2),s=o.n(u),f=o(3),c=o.n(f),i=o(4),l=o.n(i),p=o(5),d=o.n(p),b=o(6),x=o.n(b),g=(o(8),o(7)),y=o.n(g);a.a.initializers.add("serakoi/flarumstaffbadge",(function(){l.a.prototype.staffBadge=c.a.attribute("staffBadge"),Object(r.extend)(y.a.prototype,"show",(function(t){console.log(t),console.log(this);var e=t;if(e.staffBadge()){if("true"!=e.staffBadge().toLowerCase())return;var o=document.getElementsByClassName("UserCard-avatar")[0];if(!o)return;o.style.position="relative";var r=document.createElement("div");r.className="ext_staffbadge",r.innerText="Staff",o.appendChild(r)}})),Object(r.extend)(s.a.prototype,"oninit",(function(){this.status=x()(this.attrs.user.staffBadge()||"")})),Object(r.extend)(s.a.prototype,"fields",(function(t){t.add("hasbadge",m("div",{className:"Form-group"},m("label",null,a.a.translator.trans("serakoi-flarumstaffbadge.forum.edit_user.heading")),m("input",{className:"FormControl",placeholder:d()(a.a.translator.trans("serakoi-flarumstaffbadge.forum.edit_user.placeholder")),bidi:this.status})),100)})),Object(r.extend)(s.a.prototype,"data",(function(t){t.staffBadge=this.status()}))}))}]);
//# sourceMappingURL=forum.js.map