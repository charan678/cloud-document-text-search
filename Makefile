
install:
	npx lerna bootstrap --ignore-scripts -- --no-package-lock
	

build:
	npx lerna run build

test:
	npx lerna run test

clean:
	npx lerna clean
	
ci: build test
