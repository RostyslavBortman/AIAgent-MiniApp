import { Components } from '@mui/material';

export const dialogOverrides: Required<
  Pick<Components, 'MuiDialogTitle' | 'MuiDialogContent' | 'MuiDialogActions'>
> = {
  MuiDialogTitle: {
    defaultProps: { component: 'div' },
    styleOverrides: {
      root: {
        padding: 0,
        textAlign: 'center',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        overflowY: 'auto',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
      },
    },
  },
};
