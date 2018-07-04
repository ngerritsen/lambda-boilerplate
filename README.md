# My Lambda

This boilerplate is meant to give a base structure for writing AWS Lambda functions in Node.js/Javscript.

## Getting started

Install dependencies:

```
npm install
```

## Application structure

The application starts in the `index.js`. This is the file that exports the handlers to AWS Lambda. A handler is created with the `createHandler` utility. Then by adding the handler to the `module.exports` object it is made available to AWS Lambda. Note that the handler needs to return a response object or a Promise resolving with a Promise object. Uncatched are handled by returning a 500 with the error.

The `createHandler` function accepts a callback function that returns a response. The pattern this boilerplate uses is a controller class that handles the different methods. The controller then can use services/repositories or other classes to construct it's response data. With the `createReponse` and `createErrorResponse` it can create and return a response that is compatible with AWS Lambda.

## Testing

Run tests:

```
npm test
```

Run linting: 

```
npm run lint
```

Tests are ran with Jest ([http://jestjs.io/docs/en/getting-started](http://jestjs.io/docs/en/getting-started)); Test files are located next to the code they test in a `__tests__` folder. This is common convention for Javascript tests.
