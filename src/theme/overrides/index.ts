import { ThemeOptions } from '@mui/material';

import { appBarOverrides } from './app-bar';
import { buttonOverrides } from './button';
import { inputOverrides } from './input';
import { dialogOverrides } from './dialog';
import { paperOverrides } from './paper';
import { backdropOverrides } from './backdrop';
import { typographyOverrides } from './typography';
import { popoverOverrides } from './popover';
import { skeletonOverrides } from './skeleton';
import { cssBaselineOverrides } from './css-baseline';

export const overrides: ThemeOptions['components'] = {
  ...cssBaselineOverrides,
  ...appBarOverrides,
  ...buttonOverrides,
  ...inputOverrides,
  ...dialogOverrides,
  ...paperOverrides,
  ...backdropOverrides,
  ...typographyOverrides,
  ...popoverOverrides,
  ...skeletonOverrides,
};
