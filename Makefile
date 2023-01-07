test: 
	npm run test

build: 
	npm run build

lint: 
	npm run lint

ci: build test

install: 
	rm -rf node_modules
	npm install