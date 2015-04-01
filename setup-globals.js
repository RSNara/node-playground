beforeEach(function(){
	var chai = require('chai');
	// setup babel polyfull
	require('babel/polyfill');

	GLOBAL.expect = chai.expect;
});