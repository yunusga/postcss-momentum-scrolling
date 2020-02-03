let fs = require('fs')

let postcss = require('postcss')
let plugin = require('./')

function testEqualResult (input, output, opts) {
  return postcss([plugin(opts)]).process(input, { from: undefined })
    .then(result => {
      expect(result.css).toEqual(output)
      expect(result.warnings()).toHaveLength(0)
    })
}

it('if has momentum scroll, do nothing', () => {
  let input = fs.readFileSync('./test/has-momentum.in.css', 'utf8')
  let output = fs.readFileSync('./test/has-momentum.out.css', 'utf8')

  return testEqualResult(input, output)
})

it('custom options (hidden, inherit)', () => {
  let input = fs.readFileSync('./test/custom-opts.in.css', 'utf8')
  let output = fs.readFileSync('./test/custom-opts.out.css', 'utf8')

  return testEqualResult(input, output, [
    'hidden',
    'inherit'
  ])
})

it('if options is not array', () => {
  let input = fs.readFileSync('./test/has-momentum.in.css', 'utf8')
  let output = fs.readFileSync('./test/has-momentum.out.css', 'utf8')

  return testEqualResult(input, output, 'postcss')
})
