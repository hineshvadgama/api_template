# api_template

This is a Node.js api template using [TypeScript](https://www.typescriptlang.org/), [Express](http://expressjs.com/).

It follows the controller, service and model design pattern using [tsoa](https://tsoa-community.github.io/docs/) which also automatically generates [Swagger](https://swagger.io/) documentation.

It also has basic security using the [helmet](https://www.npmjs.com/package/helmet) package to hide http headers which can give away vulnerable information.

Unit testing is done through the [Jest](https://jestjs.io/) framework and using supertest to simulate requests.
