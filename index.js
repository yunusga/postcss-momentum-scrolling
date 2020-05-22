let postcss = require('postcss')

module.exports = postcss.plugin('postcss-momentum-scrolling', opts => {
  let defaults = ['hidden', 'scroll', 'auto', 'inherit']

  opts = Array.isArray(opts) ? opts : defaults

  return function (root) {
    root.walkRules(rule => {
      rule.walkDecls(/^overflow-?/, decl => {
        if (opts.includes(decl.value)) {
          let hasTouch = rule.some(i => {
            return i.prop === '-webkit-overflow-scrolling'
          })

          if (!hasTouch) {
            rule.append({
              prop: '-webkit-overflow-scrolling',
              value: 'touch'
            })
          }
        }
      })
    })
  }
})
