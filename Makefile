BROWSERIFY = node_modules/.bin/browserify
UGLIFY = node_modules/.bin/uglifyjs

test:
	node tests/basictests.js

run-workspace:
	wzrd workspace-src.js:workspace.js -- \
		-d
build:
	$(BROWSERIFY) workspace-src.js | $(UGLIFY) -c -m -o workspace.js

pushall:
	git push origin gh-pages && npm publish
