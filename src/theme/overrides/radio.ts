import { buttonClasses, Components, radioClasses } from '@mui/material';

import palette from '../palette';
import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';

export const getRadioButtonHoverStyles = () => ({
  borderColor: palette.blue[900],
  backgroundColor: palette.blue[25],
});

export const radioOverrides: Required<Pick<Components, 'MuiRadio'>> = {
  MuiRadio: {
    styleOverrides: {
      root: {
        position: 'relative',
        width: '20px',
        height: '20px',
        padding: 0,
        borderRadius: '50%',
        border: `1.5px solid ${palette.blue[800]}`,
        backgroundColor: palette.background.secondary,

        ...getDefaultTransitionProps(),

        '& svg': {
          display: 'none',
        },

        '&:hover': {
          ...getRadioButtonHoverStyles(),
        },

        [`&.${buttonClasses.focusVisible}`]: {
          outline: `2px solid ${palette.blue[300]}`,
        },

        [`&.${radioClasses.checked}`]: {
          backgroundColor: palette.blue[800],

          [`&.${radioClasses.disabled}`]: {
            borderColor: palette.gray[200],
            backgroundColor: palette.gray[200],

            '&:after': {
              backgroundColor: palette.gray[400],
            },
          },

          '&:after': {
            position: 'absolute',
            content: '""',
            width: '10px',
            height: '10px',
            backgroundColor: palette.background.secondary,
            borderRadius: '50%',
          },
        },

        [`&.${radioClasses.disabled}`]: {
          borderColor: palette.gray[400],
          backgroundColor: palette.gray[200],
        },
      },
    },
  },
};
