import { ThemeOptions } from '@mui/material';

import { appBarOverrides } from './app-bar';
import { linkOverrides } from './link';
import { buttonOverrides } from './button';
import { inputOverrides } from './input';
import { checkboxOverrides } from './checkbox';
import { dialogOverrides } from './dialog';
import { paperOverrides } from './paper';
import { tabsOverrides } from './tabs';
import { backdropOverrides } from './backdrop';
import { typographyOverrides } from './typography';
import { popoverOverrides } from './popover';
import { radioOverrides } from './radio';
import { selectOverrides } from './select';
import { skeletonOverrides } from './skeleton';
import { cssBaselineOverrides } from './css-baseline';
import { tooltipOverrides } from './tooltip';

export const overrides: ThemeOptions['components'] = {
  ...cssBaselineOverrides,
  ...appBarOverrides,
  ...linkOverrides,
  ...buttonOverrides,
  ...inputOverrides,
  ...checkboxOverrides,
  ...dialogOverrides,
  ...paperOverrides,
  ...tabsOverrides,
  ...backdropOverrides,
  ...typographyOverrides,
  ...popoverOverrides,
  ...radioOverrides,
  ...selectOverrides,
  ...skeletonOverrides,
  ...tooltipOverrides,
};
