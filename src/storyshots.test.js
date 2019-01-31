import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots';


initStoryshots({
  suite: 'Storyshots',
  integrityOptions: { cwd: __dirname },
  test: multiSnapshotWithOptions({})
});

// /* 👇 Initialize our Image storyshots suite */
// initStoryshots({
//   suite: 'Image Storyshots',
//   test: imageSnapshot({
//     storybookUrl: 'http://localhost:6006' // 👈 Point to our storybook URL in port 9009
//   })
// });
