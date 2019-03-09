import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/button.story.js');
  require('../src/stories/carousel.story.js');
  require('../src/stories/navbar.story.js');
  require('../src/stories/dropdown.story.js');
}

configure(loadStories, module);
