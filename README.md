# toidentifier

[![build status](https://img.shields.io/travis/koajs/toidentifier.svg)](https://travis-ci.org/koajs/toidentifier)
[![code coverage](https://img.shields.io/codecov/c/github/koajs/toidentifier.svg)](https://codecov.io/gh/koajs/toidentifier)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)

> Convert a string of words to a JavaScript identifier


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
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


## Contributors

| Name                           | Website                    |
| ------------------------------ | -------------------------- |
| **Douglas Christopher Wilson** |                            |
| **Nick Baugh**                 | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © Douglas Christopher Wilson


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
