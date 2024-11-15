import { Components } from '@mui/material';

import palette from '../palette';
import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';
import { getUnderlineStyles } from '../utils/getUnderlineStyles';

export const linkOverrides: Required<Pick<Components, 'MuiLink'>> = {
  MuiLink: {
    styleOverrides: {
      root: {
        width: 'fit-content',

        display: 'inline-flex',
        alignItems: 'center',

        gap: '6px',

        color: palette.text.primary,
        textDecoration: 'none',
        ...getDefaultTransitionProps(),
        ...getUnderlineStyles(),
      },
    },
  },
};
