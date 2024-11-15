import { Components } from '@mui/material';

import palette from '../palette';

export const popoverOverrides: Required<Pick<Components, 'MuiPopover'>> = {
  MuiPopover: {
    styleOverrides: {
      root: {
        marginTop: '8px',
      },
      paper: {
        maxWidth: '230px !important',

        padding: '8px !important',

        border: `1px solid ${palette.lavenderGray[100]}`,
        borderRadius: 16,
        boxShadow: '4px 5px 25.4px 0px #615D7026',
      },
    },
  },
};
