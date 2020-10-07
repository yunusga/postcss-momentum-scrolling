module.exports = (opts = {}) => {
  let defaults = ['hidden', 'scroll', 'auto', 'inherit']

  opts = Array.isArray(opts) ? opts : defaults

  function makeRuleOverflowTouch( decl ) {
    if (opts.includes(decl.value)) {
      let hasTouch = decl.parent.some(i => i.prop === '-webkit-overflow-scrolling' )

      if (!hasTouch) {
        decl.parent.append({
          prop: '-webkit-overflow-scrolling',
          value: 'touch'
        })
      }
    }
  }

  return {
    postcssPlugin: 'postcss-momentum-scrolling',
    Declaration: {
      overflow: decl => makeRuleOverflowTouch( decl ),
      'overflow-x': decl => makeRuleOverflowTouch( decl ),
      'overflow-y': decl => makeRuleOverflowTouch( decl ),
    }
  }
}

module.exports.postcss = true
