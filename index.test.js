var fs = require('fs')
var postcss = require('postcss')
var plugin = require('./')

function testEqualResult (input, output, opts) {
  return postcss([plugin(opts)]).process(input, { from: undefined })
    .then(function (result) {
      expect(result.css).toEqual(output)
      expect(result.warnings()).toHaveLength(0)
    })
}

it('if has momentum scroll, do nothing', function () {
  var input = fs.readFileSync('./test/has-momentum.in.css', 'utf8')
  var output = fs.readFileSync('./test/has-momentum.out.css', 'utf8')

  return testEqualResult(input, output)
})

it('custom options (hidden, inherit)', function () {
  var input = fs.readFileSync('./test/custom-opts.in.css', 'utf8')
  var output = fs.readFileSync('./test/custom-opts.out.css', 'utf8')

  return testEqualResult(input, output, [
    'hidden',
    'inherit'
  ])
})
