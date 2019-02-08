import initStoryshots, {
  multiSnapshotWithOptions,
  browserSnapshot
} from '@storybook/addon-storyshots';
import { mount } from 'enzyme';


initStoryshots({
  suite: 'Storyshots',
  integrityOptions: { cwd: __dirname },
  test: multiSnapshotWithOptions({}),
  renderer: mount
});


/* 👇 Initialize our Image storyshots suite */
initStoryshots({
  suite: 'browser Storyshots',
  configPath: '.storybook',
  test: browserSnapshot,
  renderer: mount
});
