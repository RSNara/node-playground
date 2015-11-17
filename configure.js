const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const jsdom = require('jsdom');

/**
 * Ensure `babel` transpiles every required module henceforth.
 */
require('babel-polyfill');
require('babel-core/register')({
  presets: ['es2015', 'stage-0'],
});

chai.use(chaiAsPromised);
chai.should();

global.expect = chai.expect;

/**
 * Setup the browser environment.
 * @see http://jaketrent.com/post/testing-react-with-jsdom/
 */
const document = jsdom.jsdom('<!doctype html><html><body></body></html>');
const window = document.defaultView;

global.document = document;
global.window = window;

/**
 * Copy all properties from `window` to global.
 */
for (const key in window) {
  if (window.hasOwnProperty(key) && ! (key in global)) {
    global[key] = window[key];
  }
}
