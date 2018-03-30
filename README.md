# Hapi Rest API | Hapi based REST application boilerplate

## Overview

Project provides a starting point for building a RESTful API in nodejs using hapijs framework. Project is influenced by [hapi-starter-kit](https://github.com/Codigami/hapi-starter-kit) with some modifications.

Follows industry standard best practices, and uses latest ES (6/7/8) features.

*   Bring your own front-end.
*   Plug-in your own Database.

## Libs used

Uses [yarn](https://yarnpkg.com) over npm

### dependencies

*   [axios](https://github.com/axios/axios)
*   [boom](https://github.com/hapijs/boom)
*   [config](https://www.npmjs.com/package/config)
*   [hapi](http://hapijs.com/)
*   [hapi-pino]()
*   [http-status]()
*   [lodash](https://lodash.com/)
*   [joi](https://www.npmjs.com/package/joi)
*   [bunyan](https://www.npmjs.com/package/bunyan)

### dev-dependencies

*   [babel](https://babeljs.io/)
*   [nodemon](https://nodemon.io/)
*   [husky](https://www.npmjs.com/package/husky)
*   [prettier](https://prettier.io/)
*   [ESLint](http://eslint.org)
*   [mocha](https://mochajs.org/)
*   [istanbul](https://www.npmjs.com/package/istanbul)
*   [standard](https://github.com/standard/standard)
*   [sinon](https://www.npmjs.com/package/sinon)
*   [nock](https://www.npmjs.com/package/nock)

## Getting Started

Install dependencies

```bash
$ yarn
```

Start Server
Set environment variables defined in `config/custom-environment-variables.json`

```bash
$ yarn start
```

Try GET `/ping` to make sure server is up

```bash
$ curl http://localhost:3030/ping
```

Run Tests

```bash
$ yarn test
```

## Environment Configuration

[config](https://github.com/lorenwest/node-config) is used to configure application.

For ex. if `APP_PORT` env var is set it can be accessed as `config.get('app.port')`. You can read more on custom environment variables [here](https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables).

## License

This project is licensed under the [MIT License](https://github.com/Codigami/hapi-starter-kit/blob/master/LICENSE)
