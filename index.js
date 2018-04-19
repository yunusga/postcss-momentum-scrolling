var postcss = require('postcss');

module.exports = postcss.plugin('postcss-momentum-scrolling', function (opts) {

    opts = opts || [
        'hidden',
        'scroll',
        'auto',
        'inherit'
    ];

    return function (root) {

        var hasMomentumScroll = false,
            hasOverflow = false;

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
                    opts.includes(decl.value)
                ) {
                    hasOverflow = true;
                }
            });

            if (!hasMomentumScroll && hasOverflow) {

                rule.append({
                    prop: '-webkit-overflow-scrolling',
                    value: 'touch'
                });
            }
        });
    };
});
