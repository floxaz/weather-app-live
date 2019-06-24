!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);class r{constructor(e,t){this.city=e,this.country=t}async searchCity(){try{const e=await fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/find?q=${this.city},${this.country}&type=accurate&mode&APPID=5b8c5eeb25f857779b05b152522ed488`);this.similarCities=await e.json(),this.similarCities=this.similarCities.list}catch(e){console.log(e)}}async forecast(e){try{const t=await fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?id=${e}&APPID=5b8c5eeb25f857779b05b152522ed488`);return await t.json()}catch(e){console.log(e)}}}const n={searchForm:document.querySelector(".search"),cityInput:document.querySelector(".search__city"),countryInput:document.querySelector(".search__country"),sectionForecast:document.querySelector(".forecast"),header:document.querySelector(".header"),heading:document.querySelector(".header__heading--main"),mobileNav:document.querySelector(".mobile-nav"),sectionForecastMob:document.querySelector(".mobile-forecast"),otherDaysMob:document.querySelector(".mobile-forecast__others"),mobCheckbox:document.querySelector(".mobile-nav__checkbox"),mobNavBtn:document.querySelector(".mobile-nav__button"),mobForm:document.querySelector(".mobForm"),navIcon:document.querySelector(".mobile-nav__icon"),cityInputMob:document.querySelector(".search__city-mob"),countryInputMob:document.querySelector(".search__country-mob")},s=(e,t)=>({cityQuery:e.value,countryQuery:t.value}),a=e=>Math.round(e-273.15),c=e=>{return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]},i=(e,t)=>{const o=`\n    <div class="forecast__day forecast__day--1">\n            <div class="forecast__date">${c(t)}</div>\n            <figure class="forecast__condition">\n                    <img src="img/weather-icons/${e.weather[0].description.replace(" ","-")}.svg" alt="weather-state">\n            </figure>\n            <div class="forecast__temp">${a(e.main.temp)}<span class="forecast__scale">&#176;</span></div>\n            <div class="forecast__details">\n                <img src="img/weather-icons/002-drop.svg" alt="humidity">\n                <p class="forecast__humidity">${e.main.humidity}</p>\n                <img src="img/weather-icons/001-wind-1.svg" alt="humidity">\n                <p class="forecast__wind">${e.wind.speed}</p>\n            </div>\n    </div>\n    `;n.sectionForecast.insertAdjacentHTML("beforeend",o)},l=e=>`\n    <svg class="${e}">\n        <use xlink:href="img/symbol-defs.svg#icon-spinner9"></use>\n    </svg>\n    `,d=(e,t)=>{const o=`\n    <div class="mobile-forecast__day">\n            <p class="mobile-forecast__date">${c(t)}</p>\n                <figure class="mobile-forecast__condition">\n                    <img src="img/weather-icons/${e.weather[0].description.replace(" ","-")}.svg" alt="weather-state">\n                </figure>\n            <p class="mobile-forecast__max">${a(e.main.temp_max)}</p>\n            <p class="mobile-forecast__min">${a(e.main.temp_min)}</p>\n    </div>\n    `;document.querySelector(".mobile-forecast__others").insertAdjacentHTML("beforeend",o)},m=e=>{let t=(new Date).getDay();((e,t)=>{const o=`\n    <div class="mobile-forecast__today">\n            <p class="mobile-forecast__main-temp">${a(e.main.temp)}<span class="mobile-forecast__main-scale">&#176;</span></p>\n            <figure class="mobile-forecast__main-condition">\n                <img src="img/weather-icons/${e.weather[0].description.replace(" ","-")}.svg" alt="weather-state">\n            </figure>\n            <p class="mobile-forecast__main-date">${c(t)}</p>\n    </div>\n    <div class="mobile-forecast__others"></div>\n    `;n.sectionForecastMob.insertAdjacentHTML("beforeend",o)})(e[0],t),++t>6&&(t=0);for(let o=8;o<=e.length-1;o+=8)d(e[o],t),++t>6&&(t=0)},u=e=>{n.navIcon.childNodes[1].setAttribute("href",`img/symbol-defs.svg#${e}`)},b=()=>{u("icon-eject"),n.mobileNav.classList.add("mobile-nav--display-search"),n.mobForm.classList.add("mobForm--showed")},y=()=>{u("icon-search"),n.mobForm.classList.remove("mobForm--showed"),n.mobileNav.classList.remove("mobile-nav--display-search")};n.mobNavBtn.addEventListener("click",()=>{n.mobCheckbox.checked?y():b()});const f={},p=async(e,t)=>{window.innerWidth<=500?f.mobile=!0:f.mobile=!1;const o=s(e,t).cityQuery,a=s(e,t).countryQuery;if(o&&a){f.search=new r(o,a),await f.search.searchCity(),(e=>{e?n.sectionForecastMob.innerHTML="":n.sectionForecast.innerHTML=""})(f.mobile),n.cityInput.value="",n.countryInput.value="",f.mobile&&(n.mobileNav.classList.add("mobile-nav--showed"),n.searchForm.classList.add("search--unvisible")),((e,t)=>{n.sectionForecast.classList.contains("forecast--desappear")&&e?n.sectionForecastMob.insertAdjacentHTML("beforeend",l("mobile-forecast__loader")):n.sectionForecast.insertAdjacentHTML("beforeend",l("forecast__loader"))})(f.mobile),(e=>{n.heading.textContent=e})(o);const e=await f.search.forecast(f.search.similarCities[0].id);(e=>{e?n.sectionForecastMob.innerHTML="":n.sectionForecast.innerHTML=""})(f.mobile),f.mobile?(n.sectionForecast.classList.add("forecast--desappear"),n.sectionForecastMob.classList.add("mobile-forecast--appeared"),m(e.list)):(e=>{let t=(new Date).getDay();for(let o=0;o<=e.length-1;o+=8)i(e[o],t),++t>6&&(t=0)})(e.list)}else alert("city or country is not indicated")};n.searchForm.addEventListener("submit",e=>{e.preventDefault(),p(n.cityInput,n.countryInput)}),n.mobForm.addEventListener("submit",e=>{e.preventDefault(),y(),p(n.cityInputMob,n.countryInputMob)})}]);