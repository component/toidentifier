
var assert = require('assert')
var toIdentifier = require('..')

describe('toIdentifier', function () {
  it('should remove spaces', function () {
    assert.equal(toIdentifier('  Foo  Bar  '), 'FooBar')
  })

  it('should upper case first letter', function () {
    assert.equal(toIdentifier('foo bar'), 'FooBar')
  })

  it('should preserve case for ', function () {
    assert.equal(toIdentifier('foo bar'), 'FooBar')
  })

  it('should remove non-word characters', function () {
    assert.equal(toIdentifier('f"o^o $ bar_z'), 'FooBar_z')
  })
})
