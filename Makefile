
install:
	npm install

build:
	npx lerna run build

test:
	npx lerna run build


ci: build test
