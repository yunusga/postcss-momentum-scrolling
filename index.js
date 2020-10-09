module.exports = (opts = {}) => {
  let defaults = ['hidden', 'scroll', 'auto', 'inherit']
  let skipped = Symbol('isSkipped') // skipped flag
  let counter = Symbol('skippedCounter') // counter for test "isSkipped" optimization

  opts = Array.isArray(opts) ? opts : defaults

  function makeRuleOverflowTouch(decl) {
    let rule = decl.parent;

    rule[counter] = Number.isInteger(rule[counter]) ? rule[counter] : 0;

    if (!rule[skipped]) {
      if (opts.includes(decl.value)) {
        let hasTouch = rule.some(i => i.prop === '-webkit-overflow-scrolling' )

        if (!hasTouch) {
          rule.append({
            prop: '-webkit-overflow-scrolling',
            value: 'touch'
          })
        }

        rule[skipped] = true
        rule[counter]++
      }
    }
  }

  return {
    postcssPlugin: 'postcss-momentum-scrolling',
    Declaration: {
      'overflow': decl => makeRuleOverflowTouch(decl),
      'overflow-x': decl => makeRuleOverflowTouch(decl),
      'overflow-y': decl => makeRuleOverflowTouch(decl),
    }
  }
}

module.exports.postcss = true
