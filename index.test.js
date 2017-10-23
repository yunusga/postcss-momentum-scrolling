const fs      = require('fs');
const postcss = require('postcss');
const plugin  = require('./');

function hasMomentumScroll(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('if has momentum scroll, do nothing', () => {

    let input  = fs.readFileSync('./test/has-momentum.in.css', 'utf8');
    let output = fs.readFileSync('./test/has-momentum.out.css', 'utf8');

    return hasMomentumScroll(input, output, {});
});
