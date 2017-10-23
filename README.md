# PostCSS Momentum Scrolling [![Build Status][ci-img]][ci]

[PostCSS] plugin add 'momentum' style scrolling behavior (`-webkit-overflow-scrolling: touch`) for elements with overflow (scroll, auto) on iOS.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/yunusga/postcss-momentum-scrolling.svg
[ci]:      https://travis-ci.org/yunusga/postcss-momentum-scrolling

## Usage

```js
postcss([
    require('postcss-momentum-scrolling')({
        short: false // disable short mode (default)
    })
])
```

See [PostCSS] docs for examples for your environment.

## Options

### `short:false`

#### Before `short:false`

```css
body {
    overflow: scroll;
}

div {
    overflow: auto;
}

p {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
}
```

#### After `short:false`

```css
body {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
}

div {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

p {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
}
```

### `short:true`

Plugin brings all the selectors with overflow in one rule

#### Before `short:true`

```css
body {
    overflow: scroll;
}

div {
    overflow: auto;
}

p {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
}
```

#### After `short:true`

```css
body {
    overflow: scroll;
}

div {
    overflow: auto;
}

p {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
}

body, div {
    -webkit-overflow-scrolling: touch;
}
```
