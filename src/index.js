// Taken from `http-errors` and put into its own package
// Convert a string of words to a JavaScript identifier.
// Created by @dougwilson

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
