import { ThemeOptions } from '@mui/material';

import { appBarOverrides } from './app-bar';
import { buttonOverrides } from './button';
import { inputOverrides } from './input';
import { skeletonOverrides } from './skeleton';
import { cssBaselineOverrides } from './css-baseline';
import { linkOverrides } from './link';

export const overrides: ThemeOptions['components'] = {
  ...cssBaselineOverrides,
  ...appBarOverrides,
  ...buttonOverrides,
  ...inputOverrides,
  ...skeletonOverrides,
  ...linkOverrides,
};
