
var assert = require('assert')
var toIdentifier = require('..')

describe('toIdentifier', function () {
  it('should remove spaces', function () {
    assert.strictEqual(toIdentifier('  Foo  Bar  '), 'FooBar')
  })

  it('should upper case first letter', function () {
    assert.strictEqual(toIdentifier('foo bar'), 'FooBar')
  })

  it('should preserve case for ', function () {
    assert.strictEqual(toIdentifier('foo bar'), 'FooBar')
  })

  it('should remove non-word characters', function () {
    assert.strictEqual(toIdentifier('f"o^o $ bar_z'), 'FooBar_z')
  })
})
