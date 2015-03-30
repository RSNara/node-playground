TEST_FILES='./setup-globals.js' $$(find ./tests -iname "*.js" | tr '\n' ' ') 
REPORTER=dot

test:
	@NODE_ENV=test ./node_modules/.bin/nodemon -q --exec "./node_modules/.bin/mocha --reporter ${REPORTER} --growl ${TEST_FILES}"

test-es6:
	@NODE_ENV=test ./node_modules/.bin/nodemon -q --exec "./node_modules/.bin/mocha --reporter ${REPORTER} --compilers js:babel/register --growl ${TEST_FILES}"