# Learn JavaScript using (B|T)DD!
This is a simple [mocha](https://github.com/mochajs/mocha) environment that runs  all specs in the `/specs` folder. Each file is transpiled from `ES2015` + some `ES2016` to `ES5` using [babel](https://github.com/babel/babel). An `ES2015` polyfill is also provided using [babel-polyfill](https://babeljs.io/docs/usage/polyfill/).

## Running specs
The `specs:watch` task below re-triggers the test run only when an **existing** spec file is modified.

```bash
> npm run specs
> npm run specs:watch
```

## Environment
The test environment tries to mimic the browser using [jsdom](https://github.com/tmpvar/jsdom). This means that you can even run your [react](https://github.com/facebook/react) component specs here! Just remember to install the [react babel preset](http://babeljs.io/docs/plugins/preset-react/).

## Expectation setup
All the expectations are handled by [chai](https://github.com/chaijs/chai). `chai.expect` is available as `global.expect` in all specs. `Object.prototype.should` is also set up in the spec configuration via `chai.should()`. Lastly, `chai` is also configured to use the popular [chai-as-promised](https://github.com/domenic/chai-as-promised/) library. [sinon](https://github.com/sinonjs/sinon) is simply installed as a convenience.

## ES-Linting
Just for convenience, a sample `.eslintrc` file is provided. [eslint](https://github.com/eslint/eslint) is installed and uses [babel-eslint](https://github.com/babel/babel-eslint) as its parser. Now your spec files can look beautiful! To run the linter:

```bash
> npm run lint
```
