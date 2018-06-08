# PostCSS Momentum Scrolling

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/yunusga/postcss-momentum-scrolling.svg
[ci]:      https://travis-ci.org/yunusga/postcss-momentum-scrolling
[MIT]:     https://github.com/yunusga/postcss-momentum-scrolling/blob/master/LICENSE

[![npm](https://img.shields.io/npm/v/postcss-momentum-scrolling.svg)](https://www.npmjs.com/package/postcss-momentum-scrolling) [![Build Status][ci-img]][ci]
[![npm](https://img.shields.io/npm/dt/postcss-momentum-scrolling.svg)](https://www.npmjs.com/package/postcss-momentum-scrolling)

[PostCSS] plugin add **momentum** style scrolling behavior (`-webkit-overflow-scrolling:touch`) for elements with overflow (scroll, auto) on iOS.

## Example

```css
/* Input example */
.minicart {
    overflow: scroll;
}
```

```css
/* Output example */
.minicart {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
}
```
## Live Example
Before|After
------|------
![behavior without -webkit-overflow-scrolling: touch](https://yunusga.github.io/img/nomoment.gif) | ![behavior with -webkit-overflow-scrolling: touch](https://yunusga.github.io/img/withmoment.gif)
*robotic scroll*|*smooth scroll with mоmentum*

### 🔗 Links:
 - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling)
 - [Momentum Scrolling on iOS Overflow Elements](https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
 - [Six things I learnt about iOS Safari's rubber band scrolling](http://blog.christoffer.online/2015-06-10-six-things-i-learnt-about-ios-rubberband-overflow-scrolling/)

## Getting Started

First thing's, install the module:

```
npm install postcss-momentum-scrolling --save-dev
```

## 🍳 Usage

```js
postcss([
    require('postcss-momentum-scrolling')([
        // example options
        'hidden',
        'scroll',
        'auto',
        'inherit'
    ])
])
```

See [PostCSS] docs for examples for your environment.

## 🍰 Options
Array of `overflow` property values at which you want to add momentum style scrolling behavior. Default `['hidden', 'scroll', 'auto', 'inherit']` (use only `['scroll']` for minimize css size).

License [MIT]
