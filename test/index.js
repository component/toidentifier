const assert = require('assert');
const toIdentifier = require('..');

describe('toIdentifier', () => {
  it('should transform "Bad Request" to "BadRequest"', () => {
    assert.equal(toIdentifier('Bad Request', 'BadRequest'), 'BadRequest');
  });
});
