(()=>{var a={n:e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},d:(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},e={};(()=>{"use strict";a.r(e);const t=flarum.core.compat.app;var r=a.n(t);r().initializers.add("serakoi/flarumstaffbadge",(function(){r().extensionData.for("serakoi-flarumstaffbadge").registerSetting({setting:"serakoi-flarumstaffbadge.staffBadge",name:"staffBadge",type:"text",label:r().translator.trans("serakoi-flarumstaffbadge.admin.staffBadge.label"),help:r().translator.trans("serakoi-flarumstaffbadge.admin.staffBadge.help")}).registerSetting({setting:"serakoi-flarumstaffbadge.staffBadgeTextColor",name:"staffBadgeTextColor",type:"text",label:r().translator.trans("serakoi-flarumstaffbadge.admin.staffBadgeTextColor.label"),help:r().translator.trans("serakoi-flarumstaffbadge.admin.staffBadgeTextColor.help")}).registerSetting({setting:"serakoi-flarumstaffbadge.staffBadgeTextBg",name:"staffBadgeTextBg",type:"text",label:r().translator.trans("serakoi-flarumstaffbadge.admin.staffBadgeTextBg.label"),help:r().translator.trans("serakoi-flarumstaffbadge.admin.staffBadgeTextBg.help")}).registerPermission({icon:"fas fa-id-card-clip",label:r().translator.trans("serakoi-flarumstaffbadge.admin.permissions.canEditStaffBadge.label"),permission:"serakoi-flarumstaffbadge.canEditStaffBadge"},"moderate").registerPermission({icon:"fas fa-id-card-clip",label:r().translator.trans("serakoi-flarumstaffbadge.admin.permissions.canEditTagList.label"),permission:"serakoi-flarumstaffbadge.canEditTagList"},"moderate")}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map