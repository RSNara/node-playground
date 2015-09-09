beforeEach(function(){
	var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    
    // setup babel polyfull
    require('babel/polyfill');

    // setup chai
    chai.use(chaiAsPromised);

	GLOBAL.expect = chai.expect;
});