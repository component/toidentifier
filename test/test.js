const test = require('ava');

const toIdentifier = require('../');

test('basic', t => {
  t.is(toIdentifier('Bad Request', 'BadRequest'), 'BadRequest');
});
