!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.slothy=t()}(this,function(){function e(e){var t=e.clientWidth,o=e.clientHeight;t&&o&&(e.src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+t+" "+o+'"%3E%3C/svg%3E')}return function(t){void 0===t&&(t={});var o=t.offset;void 0===o&&(o=100);var n=t.threshold;void 0===n&&(n=.01);var r=t.onLoad,i=t.dataSelector;void 0===i&&(i="slothy");var a=Array.from(document.querySelectorAll("[data-"+i+"]"));if(!("IntersectionObserver"in window))return a.forEach(c),a;function c(e){var t=e.dataset[i];t&&(e.src=t,e.onload=function(){r&&r(e),delete e.dataset[i]})}a.forEach(e);var d=new IntersectionObserver(function(e){e.forEach(function(e){e.intersectionRatio>0&&(d.unobserve(e.target),c(e.target))})},{rootMargin:o+"px 0px",threshold:n});return a.forEach(function(e){return d.observe(e)}),a}});
//# sourceMappingURL=slothy.umd.js.map
