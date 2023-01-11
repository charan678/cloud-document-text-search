
install:
	rm -rf node_modules/
	npm install

build:
	npx lerna run build

test:
	npx lerna run build


ci: build test
