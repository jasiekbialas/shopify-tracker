!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";var r=function(t){var e,n,r=function(t,e){for(var n=new Date,r=window.navigator,i=r.plugins||[],a=[t,r.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],c=0;c<i.length;++c)a.push(i[c].description);return o(a.join("."))},i=function(t,e){var n=new Date,r=window.navigator,i=n.getHours()+Math.floor((n.getMinutes()+e)/60);return o([t,r.userAgent,r.language||"",n.getTimezoneOffset(),n.getYear(),n.getDate()+Math.floor(i/24),(24+i)%24,(60+n.getMinutes()+e)%60].join("."))},o=function(t){var e,n=1;if(t)for(n=0,e=t.length-1;0<=e;e--){var r=t.charCodeAt(e);n=0!=(r=266338304&(n=(n<<6&268435455)+r+(r<<14)))?n^r>>21:n}return n.toString()};if("string"==typeof t&&t.length){if(!/_ga=/.test(t))return"Invalid linker format in string argument!";n=t.split("&").filter(function(t){return"_ga"===t.split("=")[0]}).shift()}else n=(e=/[?&]_ga=/.test(window.location.search)?"search":/[#&]_ga=/.test(window.location.hash)?"hash":void 0)&&window.location[e].substring(1).split("&").filter(function(t){return"_ga"===t.split("=")[0]}).shift();if(void 0===n||!n.length)return"Invalid linker format in URL!";var a,c,u,s,l=n.indexOf(".");return l>-1&&(n.substring(0,l),c=(a=n.substring(l+1)).indexOf("."),u=a.substring(0,c),s=a.substring(c+1)),void 0!==s?u===r(s=s.split("-").join(""),0)||u===r(s,-1)||u===r(s,-2)||u===i(s,0)||u===i(s,-1)||u===i(s,-2):void 0};n.d(e,"d",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"e",function(){return c}),n.d(e,"g",function(){return s}),n.d(e,"f",function(){return l}),n.d(e,"c",function(){return f});var i=function(t){if(!0===document.hidden){var e=!1;document.addEventListener("visibilitychange",function(){document.hidden||e||(t(),e=!0)})}else t()},o=function(t){var e=document.getElementsByTagName("a");return Array.prototype.slice.call(e).filter(function(e){return e.href&&e.href.includes(t)})},a=function(t){return LittledataLayer.ecommerce.impressions.find(function(e){var n=t.split("/products/");return(n&&n[1])===e.handle})},c=function(t){LittledataLayer.productClicks&&o("/products").addEventListener("click",function(e){var n=this,r=a(n.href);r?(e.preventDefault(),n.timeout=window.setTimeout(function(){document.location=n.href},1e3),t(r,n)):document.location=n.href})};function u(){setTimeout(function(){ga(function(){var t=ga.getByName("gtag_UA_424242_4").get("clientId"),e=(new Date).getTime(),n=new XMLHttpRequest;n.onload=function(){var r=JSON.parse(n.response),i=new XMLHttpRequest;i.open("POST","https://transactions-staging.littledata.io/clientID"),i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify({clientID:t,createdAt:e,cartID:r.token}))},n.open("POST","/cart/update.json"),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify({attributes:{clientID:t,createdAt:e}}))})},1e3)}function s(){var t=LittledataLayer.cart;if(!t.attributes||!t.attributes.clientID||!t.attributes.createdAt)return u();var e=new Date(t.attributes.createdAt);new Date-e<36e5||u()}function l(t){var e,n={email:/[\s&amp;\/,=]([a-zA-Z0-9_.+-]+(\@|%40)[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)($|[\s&amp;\/,])/,postcode:/[\s&amp;\/,=]([A-Z]{1,2}[0-9][0-9A-Z]?(\s|%20)[0-9][A-Z]{2})($|[\s&amp;\/,])/},r=t;for(e in n)r=r.replace(n[e],"REMOVED");return r}!function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}"".concat(t()).concat(t(),"-").concat(t(),"-").concat(t(),"-").concat(t(),"-").concat(t()).concat(t()).concat(t())}();var d=function(t){var e=t.name;if(document.cookie.length>0){var n=document.cookie.indexOf("".concat(e,"="));if(-1!==n){n=n+e.length+1;var r=document.cookie.indexOf(";",n);return-1===r&&(r=document.cookie.length),unescape(document.cookie.substring(n,r))}}return""};function f(){if(!r()){var t=d("_ga");if(window.localStorage&&!LittledataLayer.enhancePrivacy){var e=window.localStorage.getItem("_ga");if(e)return e;t&&window.localStorage.setItem("_ga",t)}if(t)return t;var n=ga.getAll()[0].get("clientId");return window.localStorage&&window.localStorage.setItem("_ga",n),n}}},function(t,e,n){"use strict";var r=n(0);e.a=function(t){var e,n=Object(r.b)("/products");function i(){var e=document.documentElement.scrollTop,i=window.innerHeight,o=e+i,a=[];n.forEach(function(t,i){if(t){var c=t.offsetTop,u=t.offsetHeight,s=c+u;if(s>=e&&c<o){var l=u;if(c-e<0?l+=c-e:o-s<0&&(l+=o-s),l/u>.8){n[i]=null;var d=Object(r.a)(t.href);d&&a.push(d)}}}}),a.length>0&&t(a)}0!==n.length&&(window.setTimeout(function(){clearTimeout(e),i()},500),document.addEventListener("scroll",function(){clearTimeout(e),e=window.setTimeout(function(){i()},300)}))}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1);!function(){function t(){dataLayer.push(arguments)}if(window.dataLayer=window.dataLayer||[],t("js",new Date),LittledataLayer){var e={linker:{domains:["shopify.com","rechargeapps.com","recurringcheckout.com","carthook.com","checkout.com"]},anonymize_ip:LittledataLayer.enhancePrivacy||!0,allow_ad_personalization_signals:!LittledataLayer.enhancePrivacy||!0,page_title:Object(r.f)(document.title),page_location:Object(r.f)(document.location.href),currency:LittledataLayer.ecommerce.currencyCode,link_attribution:!0,clientId:Object(r.c)()};LittledataLayer.referralExclusion.test(document.referrer)&&(e.page_referrer=null),Object(r.d)(function(){t("config",LittledataLayer.webPropertyID,e)}),document.addEventListener("DOMContentLoaded",function(){if(Object(r.g)(function(){return ga.getAll()[0].get("clientId")}),LittledataLayer.ecommerce.impressions.length){Object(r.e)(function(e,n){e.list_name=location.pathname,dataLayer.push({event:"select_content",ecommerce:{click:{actionField:{list:e.list_name},products:[e]}}}),t("event","select_content",{content_type:"product",items:[e],send_to:LittledataLayer.webPropertyID,event_callback:function(){window.clearTimeout(n.timeout),document.location=n.href}})}),Object(i.a)(function(e){t("event","view_item_list",{items:e,send_to:LittledataLayer.webPropertyID,non_interaction:!0}),dataLayer.push({event:"view_item_list",ecommerce:{impressions:e}})});var e=LittledataLayer.ecommerce.detail;e&&(e.list_name=document.location.href,t("event","view_item",{items:[e],non_interaction:!0,send_to:LittledataLayer.webPropertyID}),dataLayer.push({event:"view_item",ecommerce:{detail:{actionField:{list:e.list_name},products:[e]}}}))}})}else console.warn("Aborting Littledata tracking as LittledataLayer was not found!!")}()}]);