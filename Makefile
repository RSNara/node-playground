REPORTER=dot

test:
	@NODE_ENV=test ./node_modules/.bin/nodemon --watch ./tests -e js -q --exec \
		'./node_modules/.bin/mocha --reporter ${REPORTER} --compilers js:babel/register \
		--growl "./setup-globals.js" $$(find ./tests -iname "*.js" | tr "\n" " ")'


.PHONY: test