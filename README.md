# PostCSS Momentum Scrolling

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/yunusga/postcss-momentum-scrolling.svg
[ci]:      https://travis-ci.org/yunusga/postcss-momentum-scrolling
[MIT]: https://github.com/yunusga/postcss-momentum-scrolling/blob/master/LICENSE

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
![behavior without -webkit-overflow-scrolling: touch](https://downloader.disk.yandex.ru/disk/54f6378c1df68e9557048f54c8138234e08ba58c29b280868ce4e41ed7344873/5b1857dd/_B0aXmp4RJTYYcc2mgnKljEK2uppzY9adneDiXZeGxJkomwKloDXuhESQxDMrJSdLWZF5scttH4D6J_NAHRHag%3D%3D?uid=0&filename=nomoment.gif&disposition=inline&hash=&limit=0&content_type=image%2Fgif&fsize=506361&hid=3468026cda9812e7f29d6a0421b8471f&media_type=image&tknv=v2&etag=13dc68e9a16bb41223a6a22b1d83ccca) | ![behavior with -webkit-overflow-scrolling: touch](https://s97vla.storage.yandex.net/rdisk/b06e8fb558c6505950318dfaca1c60f87888432551c6b8dad48da1e41fc83d53/5b18581f/_B0aXmp4RJTYYcc2mgnKljiwvqEcGra5hl6FJRyl0HRDl_fgi9E5xz6TvB5Ee3c6dou-ifocHH2RtgZg1c7k5A==?uid=0&filename=withmoment.gif&disposition=inline&hash=&limit=0&content_type=image%2Fgif&fsize=1964591&hid=75b7ea46a1131e9a174f268a38905c06&media_type=image&tknv=v2&etag=0ee973ff024db3b70455287462bc6f97&rtoken=xaQG6DIMzIDa&force_default=no&ycrid=na-1d34c9e991aca1ac3467a82a027b3749-downloader12f&ts=56e00369f05c0&s=f03abc238b06b4c8a3628bdd0339614ef54e5cc40aeabf4a3cbe3621e38aaf71&pb=U2FsdGVkX1_l9aW9bDpNqzXGkuFziaFgpKRzjQjmrhiAvy1tP87CeDiwe8vMPyFU6AkyQOe57Blk82UjC1jic1kU_EHRlMU9k0ES24egTcQ)
*robotic scroll*|*smooth scroll with mоmentum*

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
