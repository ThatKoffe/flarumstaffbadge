module.exports=function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=13)}({0:function(e,t){e.exports=flarum.core.compat.app},13:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r);n.a.initializers.add("serakoi/flarumstaffbadge",(function(){n.a.extensionData.for("serakoi-flarumstaffbadge").registerSetting({setting:"serakoi-flarumstaffbadge.staffBadge",name:"staffBadge",type:"text",label:n.a.translator.trans("serakoi-flarumstaffbadge.admin.staffBadge.label"),help:n.a.translator.trans("serakoi-flarumstaffbadge.admin.staffBadge.help")}).registerSetting({setting:"serakoi-flarumstaffbadge.staffBadgeHex",name:"staffBadgeHex",type:"text",label:n.a.translator.trans("serakoi-flarumstaffbadge.admin.staffBadgeHex.label"),help:n.a.translator.trans("serakoi-flarumstaffbadge.admin.staffBadgeHex.help")})}))}});
//# sourceMappingURL=admin.js.map