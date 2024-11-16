import { Components, buttonClasses } from '@mui/material';

import palette from '../palette';
import { dmSans } from '../typography/fonts';

const BUTTON_RADIUS = '12px';
const getFontStyles = () => ({
  fontSize: 14,
  fontWeight: 700,
  fontFamily: dmSans.style.fontFamily,
});
const getSize = () => ({
  padding: '14px 20px',
});

export const getOutlinedButtonHoverStyles = () => ({
  background: palette.gray[100],
  borderColor: palette.gray[200],
});

export const buttonOverrides: Required<Pick<Components, 'MuiButton'>> = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        maxWidth: '240px',
        ...getFontStyles(),
        textTransform: 'none',
        letterSpacing: '-0.33px',
        lineHeight: '22px',
        boxShadow: 'none',

        [`&.${buttonClasses.disabled}`]: {
          color: palette.text.disabled,
        },
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
    variants: [
      {
        props: {
          variant: 'contained',
        },
        style: {
          background: palette.gray[900],
          borderRadius: BUTTON_RADIUS,
          border: `2px solid ${palette.gray[900]}`,

          '&:hover': {
            background: palette.gray[600],
            borderColor: palette.gray[600],
          },

          [`&.${buttonClasses.disabled}`]: {
            borderColor: palette.gray[400],
            background: palette.gray[400],
          },
        },
      },
      {
        props: {
          variant: 'text',
        },
        style: {
          color: palette.text.primary,
          textTransform: 'unset',

          ':hover': {
            background: 'unset',
          },

          ...getFontStyles(),
        },
      },
      {
        props: {
          size: 'medium',
          variant: 'contained',
        },
        style: getSize(),
      },
      {
        props: {
          size: 'medium',
          variant: 'outlined',
        },
        style: getSize(),
      },
    ],
  },
};
