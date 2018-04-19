# PostCSS Momentum Scrolling

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/yunusga/postcss-momentum-scrolling.svg
[ci]:      https://travis-ci.org/yunusga/postcss-momentum-scrolling

[![npm](https://img.shields.io/npm/v/postcss-momentum-scrolling.svg)](https://www.npmjs.com/package/postcss-momentum-scrolling) [![Build Status][ci-img]][ci]
[![npm](https://img.shields.io/npm/dt/postcss-momentum-scrolling.svg)](https://www.npmjs.com/package/postcss-momentum-scrolling)

[PostCSS] plugin add **momentum** style scrolling behavior (`-webkit-overflow-scrolling: touch`) for elements with overflow (scroll, auto) on iOS.

## Getting Started

First thing's first, install the module:

```
npm install postcss-momentum-scrolling --save-dev
```

## 🍳 Usage

```js
postcss([
    require('postcss-momentum-scrolling')([
        // default options
        'hidden',
        'scroll',
        'auto',
        'inherit'
    ])
])
```

See [PostCSS] docs for examples for your environment.

## 🍰 Options
Array of `overflow` values at which you want to add momentum style scrolling behavior. Default `['hidden', 'scroll', 'auto', 'inherit']`
