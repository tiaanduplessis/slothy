export default function(r){void 0===r&&(r={});var t=r.offset;void 0===t&&(t=100);var e=r.threshold;void 0===e&&(e=.01);var o=r.onLoad,n=r.dataSelector;void 0===n&&(n="slothy");var a=Array.from(document.querySelectorAll("[data-"+n+"]"));if(!("IntersectionObserver"in window))return a.forEach(function(r){return i(r)}),a;function i(r){var t=r.dataset[n];t&&(r.src=t,r.onload=function(){o&&o(r),delete r.dataset[n]})}var c=new IntersectionObserver(function(r){r.forEach(function(r){r.intersectionRatio>0&&(c.unobserve(r.target),i(r.target))})},{rootMargin:t+"px 0px",threshold:e});return a.forEach(function(r){return c.observe(r)}),a};
//# sourceMappingURL=slothy.m.js.map
