(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-13",headers:{authorization:"01b9e780-4687-4e3c-a4be-41860ad23bd2","Content-Type":"application/json"}},t=function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:e.headers,body:JSON.stringify({likes:[]})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log("Ошибка при добавлении лайка. ".concat(e))}))},n=function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:e.headers,body:JSON.stringify({likes:[]})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log("Ошибка при удалении лайка. ".concat(e))}))},o=function(t){return fetch("".concat(e.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log("Ошибка при добавлении карточки. ".concat(e))}))},r=document.querySelector("#card-template").content;function c(e,t,n,o,c,a,i,u){var l=e._id,d=e.likes,f=e.owner,p=r.querySelector(".card").cloneNode(!0);p.dataset.uid=l;var _=p.querySelector(".card__like-button"),m=p.querySelector(".card__like-counter");p.querySelector(".card__title").textContent=e.name;var v=p.querySelector(".card__image");v.src=e.link,v.alt=e.name;var h,y,b,k=p.querySelector(".card__delete-button");return h=f,y=c,b=!1,Object.values(h).some((function(e){return e===y}))&&(b=!0),b||k.remove(),v.addEventListener("click",(function(){o(e)})),k.addEventListener("click",(function(){n(p),a(l)})),d.length>0?(_.classList.add("card__like-button_has-like"),m.classList.add("card__like-counter_visible"),m.textContent=d.length):(_.classList.remove("card__like-button_has-like"),m.classList.remove("card__like-counter_visible"),m.textContent=""),p.dataset.uid===l&&(s(d,c)?_.classList.add("card__like-button_is-active"):s(d,c)||_.classList.remove("card__like-button_is-active")),_.addEventListener("click",(function(){p.dataset.uid===l&&(_.classList.contains("card__like-button_is-active")?_.classList.contains("card__like-button_is-active")&&u(l).then((function(e){return e.likes.length})).then((function(e){e>0?(_.classList.add("card__like-button_has-like"),m.classList.add("card__like-counter_visible")):(_.classList.remove("card__like-button_has-like"),m.classList.remove("card__like-counter_visible")),m.textContent=e})):i(l).then((function(e){return e.likes.length})).then((function(e){e>0?(_.classList.add("card__like-button_has-like"),m.classList.add("card__like-counter_visible")):(_.classList.remove("card__like-button_has-like"),m.classList.remove("card__like-counter_visible")),m.textContent=e}))),t(_)})),p}function a(e){e.remove()}function i(e){e.classList.toggle("card__like-button_is-active")}function s(e,t){for(var n=!1,o=0;o<e.length;o++)Object.values(e[o]).some((function(e){return e===t}))&&(n=!0);return n}function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",d)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d),function(e){var t=e.querySelectorAll(".popup__error"),n=e.querySelectorAll(".popup__input");t.forEach((function(e){e.classList.remove("popup__error_visible"),e.textContent=""})),n.forEach((function(e){e.classList.remove("popup__input_type_error")}))}(e)}function d(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))}var f=function(e,t){var n=function(e,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(n.disabled=!1,n.classList.remove(t.inactiveButtonClass)):(n.disabled=!0,n.classList.add(t.inactiveButtonClass))},o=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n(o,r),o.forEach((function(c){c.addEventListener("input",(function(){(function(e,n){n.validity.patternMismatch?n.setCustomValidity(n.dataset.errorMessage):n.setCustomValidity(""),n.validity.valid?function(e,n){var o=e.querySelector(".".concat(n.id,"-error"));n.classList.remove(t.inputErrorClass),o.classList.remove(t.errorClass),o.textContent=""}(e,n):function(e,n,o){var r=e.querySelector(".".concat(n.id,"-error"));n.classList.add(t.inputErrorClass),r.textContent=o,r.classList.add(t.errorClass)}(e,n,n.validationMessage)})(e,c),n(o,r)}))}))};function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],s=!0,u=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);s=!0);}catch(e){u=!0,r=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var m=document.querySelector(".places__list"),v=document.querySelectorAll(".popup__close"),h=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),b=document.querySelectorAll(".popup"),k=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_new-card"),L=document.querySelector(".popup_type_image"),g=document.querySelector(".popup__image"),q=document.querySelector(".popup__caption"),C=document.querySelector(".popup_type_avatar"),E=document.forms["edit-profile"],j=E.elements.name,x=E.elements.description,A=document.querySelector(".profile__title"),P=document.querySelector(".profile__description"),O=document.forms["new-place"],w=O.elements["place-name"],U=O.elements.link,T=document.forms.avatar,N=T.elements.link,B=document.querySelectorAll(".popup__form"),D=document.querySelector(".profile__title"),J=document.querySelector(".profile__description"),M=document.querySelector(".profile__image"),I=[fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log("Ошибка. Запрос данных карточек не выполнен. ".concat(e))})),fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log("Ошибка. Запрос данных профиля не выполнен. ".concat(e))}))];function H(e){e.target.classList.contains("popup_is-opened")&&l(e.target)}function V(e){g.src=e.link,g.alt=e.name,q.textContent=e.name,u(L)}Promise.all(I).then((function(e){var r=p(e,2),s=r[0],u=r[1];M.src=u.avatar,D.textContent=u.name,J.textContent=u.about,s.forEach((function(e){var r=c(e,i,a,V,u._id,o,t,n);m.append(r)}))})),M.addEventListener("click",(function(){T.reset(),u(C)})),h.addEventListener("click",(function(){j.value=A.textContent,x.value=P.textContent,u(k)})),y.addEventListener("click",(function(){O.reset(),u(S)})),b.forEach((function(e){e.addEventListener("mousedown",H)})),v.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){l(t)}))})),E.addEventListener("submit",(function(t){var n,o;t.preventDefault(),$(E,!0),(n=j.value,o=x.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log("Ошибка при изменении данных профиля. ".concat(e))}))).then((function(e){var t=e.name,n=e.about;A.textContent=t,P.textContent=n})).catch((function(e){console.log("Ошибка. ".concat(e))})).finally((function(){$(E,!1)})),l(k)})),T.addEventListener("submit",(function(t){var n;t.preventDefault(),$(E,!0),(n=N.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log("Ошибка при изменении аватара. ".concat(e))}))).then((function(e){M.src=e.avatar})).catch((function(e){console.log("Ошибка. ".concat(e))})).finally((function(){$(E,!1)})),l(C)})),Promise.all(I).then((function(r){var s=p(r,2),u=(s[0],s[1]);O.addEventListener("submit",(function(r){var s,d;r.preventDefault(),$(O,!0),(s=w.value,d=U.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:s,link:d})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log("Ошибка при добавлении карточки. ".concat(e))}))).then((function(e){var r=c(e,i,a,V,u._id,o,t,n);m.prepend(r),l(S),O.reset()})).catch((function(e){console.log("Ошибка при добавлении карточки. ".concat(e))})).finally((function(){$(O,!1)}))}))}));var z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function $(e,t){var n=e.querySelector(".popup__button");t?(n.textContent="Сохранение...",n.disabled=!0):n.textContent="Сохранить"}B.forEach((function(e){f(e,z)}))})();