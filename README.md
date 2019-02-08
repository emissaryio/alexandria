# Emissary UI Library
Emissary UI Library

## Installation
```bash
$ npm install @emissary/alexandria
```

## Development
It uses [Storybook](https://github.com/storybooks/storybook) to test components visually on development.

```bash
$ yarn storybook # ...and browse to http://localhost:6006
```

## Tests
```bash
$ yarn test

$ yarn test -u # run with -u to update snapshots
```

## Build
```bash
$ npm run build:prod
```

## Publish
_Make sure you are logged into NPM before running the publish command!_
```bash
$ npm login # if needed
$ npm run build-and-publish
```

## Adding a component
- Add JS files under `src/components/NewComponent`

- If component needs to be available in the NPM package, export it in `src/index.js`

```js
export { default as NewComponent } from 'components/NewComponent';
```

- Add styles files under `src/scss/components/_new-component.scss`

- Import new styles in `src/scss/theme.scss`
```scss
  @import 'components/new-component';
 ```
 
- Write stories in `src/components/Newcomponent/component.stories.js`

- Write tests in `src/components/NewComponent/__tests__`
