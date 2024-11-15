import { Components } from '@mui/material';

export const paperOverrides: Required<Pick<Components, 'MuiPaper'>> = {
  MuiPaper: {
    styleOverrides: {
      root: {
        maxWidth: '459px !important',
        width: '100%',
        padding: '26px 28px',
        backgroundImage: 'none',
        borderRadius: 24,
      },
    },
  },
};
