/*!
 * http-errors
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

function toIdentifier(str) {
  return str
    .split(' ')
    .map(token => {
      return token.slice(0, 1).toUpperCase() + token.slice(1);
    })
    .join('')
    .replace(/[^ _0-9a-z]/gi, '');
}

module.exports = toIdentifier;
