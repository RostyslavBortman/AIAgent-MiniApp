import { Components, paperClasses } from '@mui/material';

import palette from '../palette';
import { breakpoints } from '../breakpoints';

export const appBarOverrides: Required<Pick<Components, 'MuiAppBar'>> = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        position: 'sticky',

        padding: '20px 0px',

        boxShadow: 'none',
        background: palette.background.default,

        [`&.${paperClasses.root}`]: {
          width: '100% !important',
          maxWidth: `${breakpoints.values['2xl']}px !important`,
          paddingRight: '0px !important',
          borderRadius: 0,
        },
      },
    },
  },
};
