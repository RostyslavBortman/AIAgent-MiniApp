import { Components, inputClasses, selectClasses } from '@mui/material';

import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';
import palette from '../palette';

export const selectOverrides: Required<Pick<Components, 'MuiSelect' | 'MuiMenuItem'>> = {
  MuiSelect: {
    styleOverrides: {
      root: {
        height: '42px',
        padding: 0,
        color: palette.text.primary,

        [`& .${selectClasses.outlined}`]: {
          padding: '10px',
        },

        [`&:hover`]: {
          [`.${selectClasses.icon}`]: {
            color: palette.blue[800],
          },
        },

        [`&.${inputClasses.focused}`]: {
          borderColor: palette.blue[50],
          background: `${palette.background.secondary} !important`,
          outline: 'unset',
        },
      },

      icon: {
        top: 'unset',
        color: palette.text.primary,
        ...getDefaultTransitionProps('transform'),
      },

      iconOpen: {
        color: palette.blue[900],
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {},
    },
  },
};
