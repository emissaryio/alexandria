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

## Adding Styles
- This library utilizes the [emotion](https://emotion.sh/docs/object-styles) library using css in js

- Add styles files under `src/components/NewComponent/styles.js`

- import styles into their components. 

## Adding Stories

- Write stories in `src/components/Newcomponent/component.stories.js`

## Adding Jest Tests

- Write tests in `src/components/NewComponent/__tests__`

## Libraries Utilized

- CSS: [emotion](https://emotion.sh/docs/object-styles)
- UI-Framework: [Material-UI](https://material-ui.com/)
- Packageing Library: [Rollup](https://rollupjs.org/guide/en)
- Testing Framework: [Jest](https://jestjs.io/) [enzyme](https://airbnb.io/enzyme/)
- UI Component Display: [Storybook](https://storybook.js.org/)
- ElasticSearch UI Components: [ReactiveSearch](https://opensource.appbase.io/reactivesearch/)