install:
	npm ci

gendiff:
	node/gendiff.js

publish:
	npm publish --dry-run

run:
	node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json 

test:
	node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json 

test-coverage:
	npm test --coverage --coverageProviderv8

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .