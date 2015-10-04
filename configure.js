var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

// setup babel polyfill

require('babel/polyfill');
require('babel/register')({
  stage: 0
});

// setup chai
chai.use(chaiAsPromised);