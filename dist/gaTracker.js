!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";var i=function(t){var e,n,i=function(t,e){for(var n=new Date,i=window.navigator,r=i.plugins||[],a=[t,i.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],c=0;c<r.length;++c)a.push(r[c].description);return o(a.join("."))},r=function(t,e){var n=new Date,i=window.navigator,r=n.getHours()+Math.floor((n.getMinutes()+e)/60);return o([t,i.userAgent,i.language||"",n.getTimezoneOffset(),n.getYear(),n.getDate()+Math.floor(r/24),(24+r)%24,(60+n.getMinutes()+e)%60].join("."))},o=function(t){var e,n=1;if(t)for(n=0,e=t.length-1;0<=e;e--){var i=t.charCodeAt(e);n=0!=(i=266338304&(n=(n<<6&268435455)+i+(i<<14)))?n^i>>21:n}return n.toString()};if("string"==typeof t&&t.length){if(!/_ga=/.test(t))return"Invalid linker format in string argument!";n=t.split("&").filter(function(t){return"_ga"===t.split("=")[0]}).shift()}else n=(e=/[?&]_ga=/.test(window.location.search)?"search":/[#&]_ga=/.test(window.location.hash)?"hash":void 0)&&window.location[e].substring(1).split("&").filter(function(t){return"_ga"===t.split("=")[0]}).shift();if(void 0===n||!n.length)return"Invalid linker format in URL!";var a,c,u,s,l=n.indexOf(".");return l>-1&&(n.substring(0,l),c=(a=n.substring(l+1)).indexOf("."),u=a.substring(0,c),s=a.substring(c+1)),void 0!==s?u===i(s=s.split("-").join(""),0)||u===i(s,-1)||u===i(s,-2)||u===r(s,0)||u===r(s,-1)||u===r(s,-2):void 0},r=n(1);n.d(e,"d",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return c}),n.d(e,"e",function(){return u}),n.d(e,"g",function(){return l}),n.d(e,"f",function(){return d}),n.d(e,"c",function(){return f}),n.d(e,"h",function(){return g}),n.d(e,"i",function(){return p});var o=function(t){if(!0===document.hidden){var e=!1;document.addEventListener("visibilitychange",function(){document.hidden||e||(t(),e=!0)})}else t()},a=function(t){var e=document.getElementsByTagName("a"),n=new RegExp(t);return Array.prototype.slice.call(e).filter(function(t){return t.href&&n.test(t.href)})},c=function(t){return LittledataLayer.ecommerce.impressions.find(function(e){var n=t.split("/products/");return(n&&n[1])===e.handle})},u=function(t){LittledataLayer.productClicks&&a("/products/").forEach(function(e){e.addEventListener("click",function(e){var n=this,i=c(n.href);i?(e.preventDefault(),n.timeout=window.setTimeout(function(){document.location=n.href},1e3),t(i,n)):document.location=n.href})})};function s(t){setTimeout(function(){var e=t(),n=(new Date).getTime(),i=new XMLHttpRequest;i.onload=function(){var t=JSON.parse(i.response),r=new XMLHttpRequest;r.open("POST","https://transactions-staging.littledata.io/clientID"),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify({clientID:e,createdAt:n,cartID:t.token}))},i.open("POST","/cart/update.json"),i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify({attributes:{clientID:e,createdAt:n}}))},1e3)}function l(t){var e=LittledataLayer.cart;if(!(e&&e.attributes&&e.attributes.clientID&&e.attributes.createdAt))return s(t);var n=new Date(e.attributes.createdAt);if(new Date-n>36e5&&s(t),e&&e.updated_at){var i=new Date(e.updated_at);new Date-i>36e5&&function(t){console.log("posted cart",t)}(e)}}function d(t){var e,n={email:/[\s&amp;\/,=]([a-zA-Z0-9_.+-]+(\@|%40)[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)($|[\s&amp;\/,])/,postcode:/[\s&amp;\/,=]([A-Z]{1,2}[0-9][0-9A-Z]?(\s|%20)[0-9][A-Z]{2})($|[\s&amp;\/,])/},i=t;for(e in n)i=i.replace(n[e],"REMOVED");return i}!function(){function t(){return Math.floor(1e10*Math.random())}"GA1.2.".concat(t(),".").concat(t())}();function f(){if(!i()){var t=Object(r.getGaCookie)();if(window.localStorage&&!LittledataLayer.enhancePrivacy){var e=window.localStorage.getItem("_ga");if(e)return e;t&&window.localStorage.setItem("_ga",t)}return t||""}}var g=function(t){a("/files/.*/products/").forEach(function(e){e.addEventListener("click",function(){var e=this.getElementsByTagName("img")[0],n=e&&e.alt;t(n)})})},p=function(t){var e="(facebook|pinterest|twitter|linkedin|plus.google|instagram)";a("".concat(e,".com/(share|pin|intent)")).forEach(function(n){n.addEventListener("click",function(){var n=this.href.match(new RegExp(e));t(n&&n[0])})})}},function(t,e,n){"use strict";n.r(e),n.d(e,"getGaCookie",function(){return i});var i=function(){if(document.cookie.length>0){var t=document.cookie.indexOf("".concat("_ga","="));if(-1!==t){t=t+"_ga".length+1;var e=document.cookie.indexOf(";",t);-1===e&&(e=document.cookie.length);var n=unescape(document.cookie.substring(t,e));if(n){var i=n.match(/[0-9]{10}\.[0-9]{10}/);return i?i[0]:""}}}return""};window.getGaCookie=i},function(t,e,n){"use strict";var i=n(0);e.a=function(t){var e,n=Object(i.b)("/products/");function r(){var e=document.documentElement.scrollTop,r=window.innerHeight,o=e+r,a=[];n.forEach(function(t,r){if(t){var c=t.offsetTop,u=t.offsetHeight,s=c+u;if(s>=e&&c<o){var l=u;if(c-e<0?l+=c-e:o-s<0&&(l+=o-s),l/u>.8){n[r]=null;var d=Object(i.a)(t.href);d&&a.push(d)}}}}),a.length>0&&t(a)}0!==n.length&&(window.setTimeout(function(){clearTimeout(e),r()},500),document.addEventListener("scroll",function(){clearTimeout(e),e=window.setTimeout(function(){r()},300)}))}},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(2),o=n(1);!function(){function t(){dataLayer.push(arguments)}if(window.dataLayer=window.dataLayer||[],t("js",new Date),LittledataLayer){var e={linker:{domains:["shopify.com","rechargeapps.com","recurringcheckout.com","carthook.com","checkout.com"]},anonymize_ip:!!LittledataLayer.anonymizeIp,allow_ad_personalization_signals:!!LittledataLayer.googleSignals,page_title:Object(i.f)(document.title),page_location:Object(i.f)(document.location.href),currency:LittledataLayer.ecommerce.currencyCode,link_attribution:!0,clientId:Object(i.c)()};LittledataLayer.referralExclusion.test(document.referrer)&&(e.page_referrer=null),Object(i.d)(function(){t("config",LittledataLayer.webPropertyID,e)}),window.addEventListener("DOMContentLoaded",function(){Object(i.g)(function(){return Object(o.getGaCookie)()}),LittledataLayer.ecommerce.impressions.length&&(Object(i.e)(function(e,n){var i=LittledataLayer.ecommerce.impressions.find(function(t){return t.name===e.name&&t.handle===e.handle}),r=i&&i.list_position;window.localStorage.setItem("position",r),dataLayer.push({event:"select_content",ecommerce:{click:{actionField:{list:e.list_name},products:[e]}}}),t("event","select_content",{content_type:"product",items:[e],send_to:LittledataLayer.webPropertyID,event_callback:function(){window.clearTimeout(n.timeout),document.location=n.href}})}),Object(r.a)(function(e){t("event","view_item_list",{items:e,send_to:LittledataLayer.webPropertyID,non_interaction:!0}),dataLayer.push({event:"view_item_list",ecommerce:{impressions:e}})}));var e=LittledataLayer.ecommerce.detail;e&&(e.list_position=window.localStorage.getItem("position")||1,t("event","view_item",{items:[e],non_interaction:!0,send_to:LittledataLayer.webPropertyID}),dataLayer.push({event:"view_item",ecommerce:{detail:{actionField:{list:e.list_name},products:[e]}}}),Object(i.h)(function(e){dataLayer.push({event:"product_image_click",name:e}),t("event","Product image click",{event_category:"Product details page (Littledata)",event_label:e,send_to:LittledataLayer.webPropertyID})}),Object(i.i)(function(e){dataLayer.push({event:"share_product",network:e}),t("event","Social share",{event_category:"Product details page (Littledata)",event_label:e,send_to:LittledataLayer.webPropertyID})}))})}else console.warn("Aborting Littledata tracking as LittledataLayer was not found")}()}]);
