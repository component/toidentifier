# toidentifier

[![Build Status][travis-image]][travis-url]
[![Test Coverage][codecov-image]][codecov-url]
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)

> Convert a string of words to a JavaScript identifier


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [License](#license)


## Install

[npm][]:

```sh
npm install toidentifier
```

[yarn][]:

```sh
yarn add toidentifier
```


## Usage

```js
const toIdentifier = require('toidentifier');

console.log(toIdentifier('Bad Request'));
// outputs "BadRequest"
```


## License

[MIT](LICENSE)

[codecov-image]: https://img.shields.io/codecov/c/github/component/toidentifier.svg
[codecov-url]: https://codecov.io/gh/component/toidentifier
[travis-image]: https://img.shields.io/travis/component/toidentifier/master.svg
[travis-url]: https://travis-ci.org/component/toidentifier


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
