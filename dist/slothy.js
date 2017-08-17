(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.slothy = factory());
}(this, (function () { 'use strict';

/**
 * Lazy load images
 *
 * @param {Object} options Configuration options for slothy
 * @param {String|Number} options.offset Offset from image in px to start loading, defaults to 100px
 * @param {Number} options.threshold Either a single number or an array of numbers which indicate
 *                                   at what percentage of the target's visibility the observer's callback should be executed.
 * @param {Function} options.onLoad Function triggered when image is done loading
 */
function slothy (ref) {
  if ( ref === void 0 ) ref = {};
  var offset = ref.offset; if ( offset === void 0 ) offset = 100;
  var threshold = ref.threshold; if ( threshold === void 0 ) threshold = 0.01;
  var onLoad = ref.onLoad;

  var images = Array.from(document.querySelectorAll('[data-slothy]'));

  if (!('IntersectionObserver' in window)) {
    images.forEach(function (image) { return preloadImage(image); });
    return
  }

  var rootMargin = offset + "px 0px";
  var config = {
    rootMargin: rootMargin,
    threshold: threshold
  };

  function onIntersection (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        preloadImage(entry.target);
      }
    });
  }

  function preloadImage (image) {
    var src = image.dataset.slothy;

    if (!src) {
      return
    }

    image.src = src;
    image.onload = function () {
      onLoad && onLoad(image);
      delete image.dataset.slothy;
    };
  }

  var observer = new IntersectionObserver(onIntersection, config);
  images.forEach(function (image) { return observer.observe(image); });
}

return slothy;

})));
