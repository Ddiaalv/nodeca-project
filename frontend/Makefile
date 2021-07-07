.DEFAULT_GOAL := check

init:
	@echo "🏁 Initialising project..."
	yarn install

dev:
	@echo "🏃 Initialising development server..."
	yarn dev

build:
	@echo "🏗️ Building project ..."
	yarn build

lint:
	@echo "👁️ Linting code..."
	yarn lint

format:
	@echo "🦋 Formating code..."
	yarn format

test:
	@echo "🧪 Testing..."
	yarn test

teste2e:
	@echo "✔️ Testing e2e..."
	yarn test:e2e

precommit:
	@echo "🐺 Checking commit..."
	yarn precommit

storybook:
	@echo "📚 Initialising storybook server..."
	yarn storybook

build-storybook:
	@echo "📓 Building storybook..."
	yarn build-storybook

new:
	@echo "📜 Generating function component template..."
	npm run new:fc

clean:
	@echo "🧽 Cleaning... "
	@rm -Rf node_modules dist package-lock.json public/sw.js  public/sw.js.map public/workbox*.js public/workbox*.js.map .next storybook-static
