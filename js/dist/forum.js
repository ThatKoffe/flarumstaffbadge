module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["common/components/EditUserModal"]},function(e,t){e.exports=flarum.core.compat["common/utils/extractText"]},function(e,t){e.exports=flarum.core.compat["common/Model"]},function(e,t){e.exports=flarum.core.compat["common/models/User"]},function(e,t){e.exports=flarum.core.compat["common/components/Button"]},function(e,t,o){"use strict";o.r(t);var r=o(1),n=o(0),a=o.n(n),u=o(2),c=o.n(u),l=(o(4),o(5),o(3)),f=o.n(l);o(6);Object(r.extend)(c.a.prototype,"fields",(function(e){e.add("hasbadge",m("div",{className:"Form-group"},m("label",null,a.a.translator.trans("serakoi-flarumstaffbadge.forum.edit_user.heading")),m("input",{className:"FormControl",placeholder:f()(a.a.translator.trans("serakoi-flarumstaffbadge.forum.edit_user.placeholder")),bidi:"test"})),100)}))}]);
//# sourceMappingURL=forum.js.map