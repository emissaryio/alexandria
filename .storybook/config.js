import '@storybook/addon-console';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import JSXAddon from 'storybook-addon-jsx';


addDecorator(withInfo({
  header: true,
  source: true
}));

setAddon(JSXAddon);

const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}



configure(loadStories, module);
