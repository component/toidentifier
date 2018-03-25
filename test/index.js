
var assert = require('assert')
var toIdentifier = require('..')

describe('toIdentifier', function () {
  it('should transform "Bad Request" to "BadRequest"', function () {
    assert.equal(toIdentifier('Bad Request', 'BadRequest'), 'BadRequest')
  })
})
