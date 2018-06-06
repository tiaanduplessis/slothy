<div align="center">
  <img width="60%" src="https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif" alt=""/>
</div>
<h1 align="center">slothy</h1>
<div align="center">
  <strong>Modern lazy loading of images (429 Bytes gzipped)</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/slothy">
    <img src="https://img.shields.io/npm/v/slothy.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/slothy">
  <img src="https://img.shields.io/npm/dm/slothy.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/slothy">
    <img src="https://img.shields.io/travis/tiaanduplessis/slothy.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/slothy/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/slothy.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/slothy.svg)](https://greenkeeper.io/)

Slothy uses the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to ensure the efficient loading of images as they come into view. Since the API is [fairly new](https://caniuse.com/#search=IntersectionObserver), you may want to use [the polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) if your targeting older browsers. If [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) is not available slothy will fall back to the normal loading of images.

## Install

With package manager:

```sh
$ npm install slothy
# OR
$ yarn add slothy
```

Or with CDN:

```html
<script src="https://cdn.rawgit.com/tiaanduplessis/slothy/master/dist/slothy.min.js"></script>
<!-- Or -->
<script src="https://unpkg.com/stoor/dist/slothy.min.js"></script>
```

## Usage

Add the `data-slothy` tag to images you wish to lazy load:

```html
  <img data-slothy="http://loremflickr.com/1600/1200" alt="">
  <img data-slothy="http://loremflickr.com/1200/1000" alt="">
  <img data-slothy="http://loremflickr.com/2000/1500" alt="">
```

Then initialize:

```js
slothy()
```

Also see the [example](example/index.html).

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [slothy](#slothy)

### slothy

Lazy load images

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** Configuration options for slothy (optional, default `{}`)
    -   `options.offset` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** Offset from image in px to start loading, defaults to 100px (optional, default `100`)
    -   `options.threshold` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Either a single number or an array of numbers which indicate
                                          at what percentage of the target's visibility the observer's callback should be executed. (optional, default `0.01`)
    -   `options.onLoad` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function triggered when image is done loading
    -   `options.dataSelector` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Data selector on element. Default is "slothy" (optional, default `'slothy'`)

## Contributing

Contributions are welcome!

1.  Fork it.
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/slothy/issues).

## License

Licensed under the MIT License.
