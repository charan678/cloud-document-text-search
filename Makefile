
install:
	lerna bootstrap --ignore-scripts -- --no-package-lock
	

build:
	npx lerna run build

test:
	npx lerna run test


ci: build test
