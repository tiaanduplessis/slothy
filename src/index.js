/**
 * Lazy load images
 *
 * @param {Object=} options Configuration options for slothy
 * @param {String|Number} options.offset Offset from image in px to start loading, defaults to 100px
 * @param {Number} options.threshold Either a single number or an array of numbers which indicate
 *                                   at what percentage of the target's visibility the observer's callback should be executed.
 * @param {Function} options.onLoad Function triggered when image is done loading
 * @param {String} options.dataSelector Data selector on element. Default is "slothy"
 */
function slothy ({ offset = 100, threshold = 0.01, onLoad, dataSelector = 'slothy' } = {}) {
  const images = Array.from(document.querySelectorAll(`[data-${dataSelector}]`))

  if (!('IntersectionObserver' in window)) {
    images.forEach(image => preloadImage(image))
    return images
  }

  const rootMargin = `${offset}px 0px`
  const config = {
    rootMargin,
    threshold
  }

  function onIntersection (entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target)
        preloadImage(entry.target)
      }
    })
  }

  function preloadImage (image) {
    const src = image.dataset[dataSelector]

    if (!src) {
      return
    }

    image.src = src
    image.onload = () => {
      onLoad && onLoad(image)
      delete image.dataset[dataSelector]
    }
  }

  const observer = new IntersectionObserver(onIntersection, config)

  images.forEach(image => observer.observe(image))

  return images
}

export default slothy
