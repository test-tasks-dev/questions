(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{164:function(e,n,t){"use strict";var r=t(71),a=t(13);n.a=function(){function e(n){for(var t in n){var c=n[t];if("fallbacks"===t&&Array.isArray(c))n[t]=c.map(e);else{var o=!1,s=Object(r.b)(t);s&&s!==t&&(o=!0);var u=!1,f=Object(r.c)(s,Object(a.f)(c));f&&f!==c&&(u=!0),(o||u)&&(o&&delete n[t],n[s||t]=f||c)}}return n}return{onProcessRule:function(e){if("keyframes"===e.type){var n=e;n.at=Object(r.a)(n.at)}},onProcessStyle:function(n,t){return"style"!==t.type?n:e(n)},onChangeValue:function(e,n){return Object(r.c)(n,Object(a.f)(e))||e}}}}}]);