import { Components } from '@mui/material';

import palette from '../palette';

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
      },
    },
  },
};
