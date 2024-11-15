import { Components } from '@mui/material';

export const backdropOverrides: Required<Pick<Components, 'MuiBackdrop'>> = {
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: '#00061AA3',
      },
    },
  },
};
