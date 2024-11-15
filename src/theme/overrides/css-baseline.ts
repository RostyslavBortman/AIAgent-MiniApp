import { Components } from '@mui/material';

export const cssBaselineOverrides: Required<Pick<Components, 'MuiCssBaseline'>> = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        width: '100%',
        height: '100%',
      },
    },
  },
};
