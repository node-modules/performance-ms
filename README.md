# performance-ms

[![NPM version][npm-image]][npm-url]
[![Node.js CI](https://github.com/node-modules/performance-ms/actions/workflows/nodejs.yml/badge.svg)](https://github.com/node-modules/performance-ms/actions/workflows/nodejs.yml)
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/performance-ms.svg?style=flat-square
[npm-url]: https://npmjs.com/package/performance-ms
[codecov-image]: https://codecov.io/github/node-modules/performance-ms/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/node-modules/performance-ms?branch=master
[snyk-image]: https://snyk.io/test/npm/performance-ms/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/performance-ms
[download-image]: https://img.shields.io/npm/dm/performance-ms.svg?style=flat-square
[download-url]: https://npmjs.com/package/performance-ms

performance timer in ms

## Usage

```ts
import { now, diff } from 'performance-ms';

const startTime = now();
// run your code
const rt = diff(startTime);
console.log('rt %d', rt);

// stdout: rt 1.228
```

## License

[MIT](LICENSE)

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/156269?v=4" width="100px;"/><br/><sub><b>fengmk2</b></sub>](https://github.com/fengmk2)<br/>|[<img src="https://avatars.githubusercontent.com/u/32174276?v=4" width="100px;"/><br/><sub><b>semantic-release-bot</b></sub>](https://github.com/semantic-release-bot)<br/>|
| :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Fri Aug 04 2023 15:21:17 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->
