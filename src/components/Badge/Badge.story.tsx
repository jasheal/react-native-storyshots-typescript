import * as React from 'react';
import Badge from './Badge';
import { storiesOf } from '@storybook/react-native';

storiesOf('Badge', module)
  .add('ten', () => <Badge count={10} />)
  .add('three', () => <Badge count={3} />)
  .add('two', () => <Badge count={2} />)
  .add('twenty', () => <Badge count={20} />);
