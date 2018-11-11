import React from "react";
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('../src/components/Button/Button.story'),
  require('../src/components/Badge/Badge.story')
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUI = getStorybookUI({
  onDeviceUI: true
});

export default StorybookUI;