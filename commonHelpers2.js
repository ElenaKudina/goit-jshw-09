import"./assets/modulepreload-polyfill-3cfb730f.js";const s="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("input",()=>{const e=a.elements.email.value,t=a.elements.message.value;r(s,{name:e,message:t})});a.addEventListener("submit",e=>{e.preventDefault();const t=n(s)||{};console.log(t),localStorage.removeItem(s),a.reset()});function n(e="empty"){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function r(e,t){const o=JSON.stringify(t);localStorage.setItem(e,o)}function m(){const e=n(s)||{};a.elements.email.value=e.email||"Email",a.elements.message.value=e.message||""}m();
//# sourceMappingURL=commonHelpers2.js.map
