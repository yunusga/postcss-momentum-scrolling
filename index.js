var postcss = require('postcss');

module.exports = postcss.plugin('postcss-momentum-scrolling', function (opts) {

    opts = opts || {
        short: false // true
    };

    return function (root) {

        var selectors = [],
            hasMomentumScroll = false,
            hasOverflow = false,
            selectorsUniq = null,
            momentumRule = null;

        root.walkRules(function (rule) {

            hasMomentumScroll = false;
            hasOverflow = false;

            rule.walkDecls(function (decl) {

                if (!hasMomentumScroll &&
                    decl.prop === '-webkit-overflow-scrolling' &&
                    decl.value === 'touch'
                ) {
                    hasMomentumScroll = true;
                }

                if (!hasOverflow &&
                    decl.prop.match(/^overflow/g) &&
                    decl.value !== 'hidden'
                ) {
                    hasOverflow = true;
                }
            });

            if (!hasMomentumScroll && hasOverflow) {

                selectors.push(rule.selector);

                if (!opts.short) {

                    rule.append({
                        prop: '-webkit-overflow-scrolling',
                        value: 'touch'
                    });
                }
            }
        });

        if (selectors.length && opts.short) {

            selectorsUniq = selectors.filter(function (selector, index, arr) {
                return arr.indexOf(selector) === index;
            });

            momentumRule = postcss.rule({
                selector: selectorsUniq.join(',')
            });

            momentumRule.append({
                prop: '-webkit-overflow-scrolling',
                value: 'touch'
            });

            root.append(momentumRule);
        }
    };
});
