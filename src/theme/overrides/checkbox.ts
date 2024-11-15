import { buttonBaseClasses, checkboxClasses, Components, svgIconClasses } from '@mui/material';

import palette from '../palette';
import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';

export const getCheckboxHoverStyles = () => ({
  borderColor: palette.blue[900],
  backgroundColor: palette.blue[25],
});

export const checkboxOverrides: Required<Pick<Components, 'MuiCheckbox'>> = {
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        width: '20px',
        height: '20px',
        padding: 0,
        borderRadius: '4px',
        border: '1.5px solid',
        borderColor: palette.blue[800],
        ...getDefaultTransitionProps(),

        '& svg': {
          color: palette.text.secondary,
        },

        [`& .${svgIconClasses.root}`]: {
          display: 'none',
        },

        '&:hover': {
          ...getCheckboxHoverStyles(),
        },

        [`&.${buttonBaseClasses.focusVisible}`]: {
          outline: `1px solid ${palette.blue[300]}`,
          backgroundColor: palette.blue[25],
        },

        [`&.${checkboxClasses.disabled}`]: {
          background: palette.gray[200],
          borderColor: palette.gray[400],

          '& svg': {
            color: palette.gray[400],
          },
        },

        [`&.${checkboxClasses.checked}`]: {
          backgroundColor: palette.blue[800],

          '&:hover': {
            backgroundColor: palette.blue[900],
          },

          [`&.${checkboxClasses.disabled}`]: {
            borderColor: palette.gray[200],
            background: palette.gray[200],
          },
        },
      },
    },
  },
};
