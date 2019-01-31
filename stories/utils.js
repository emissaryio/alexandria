/* eslint-disable import/prefer-default-export */
import { withTests as withTestsAddon } from '@storybook/addon-jest';
import testsResults from '../.jest-test-results.json';

const withTests = withTestsAddon({
  results: testsResults
});

export {
  withTests
};
/* eslint-enable */
