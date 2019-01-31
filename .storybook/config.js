import '@storybook/addon-console';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import JSXAddon from 'storybook-addon-jsx';
import requireContext from 'require-context.macro';

addDecorator(withInfo({
  header: true,
  source: true
}));

setAddon(JSXAddon);

const reqMain = requireContext('../stories', true, /\.stories\.js$/);
const reqLib = requireContext('../src', true, /\.stories\.js$/);

function loadStories() {
  require('../stories');
  reqMain.keys().forEach(filename => reqMain(filename));
  reqLib.keys().forEach(filename => reqLib(filename));
}

configure(loadStories, module);
