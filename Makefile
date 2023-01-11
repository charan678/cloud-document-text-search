
install:
	rm -rf node_modules/
	npm install

build:
	npx lerna run build

test:
	npx lerna run test


ci: build test
