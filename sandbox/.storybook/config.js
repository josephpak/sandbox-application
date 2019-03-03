import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/button.story.js');
  require('../src/stories/page.story.js');
}

configure(loadStories, module);
