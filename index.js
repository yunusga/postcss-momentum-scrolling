const postcss = require('postcss');

module.exports = postcss.plugin('postcss-momentum-scrolling', (opts) => {

    opts = opts || {
        short: false // true
    };

    return function (root) {

        let selectors = [];

        root.walkRules(rule => {

            let hasMomentumScroll = false,
                hasOverflow = false;

            rule.walkDecls(decl => {

                if (!hasMomentumScroll &&
                    decl.prop === '-webkit-overflow-scrolling' &&
                    decl.value === 'touch'
                ) {
                    hasMomentumScroll = true;
                }

                if (!hasOverflow &&
                    decl.prop === 'overflow' &&
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

            let selectorsUniq = selectors.filter((selector, index, arr) => {
                return arr.indexOf(selector) === index;
            });

            let momentumRule = postcss.rule({
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
