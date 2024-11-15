import { Components, buttonClasses } from '@mui/material';

import palette from '../palette';

const BUTTON_RADIUS = '99px';
const getFontStyles = () => ({
  fontSize: 16,
  fontWeight: 500,
});

const getSize = () => ({
  width: '204px',
  padding: '5px 36px',
});

export const getOutlinedButtonHoverStyles = () => ({
  background: palette.blue[100],
  borderColor: palette.blue[900],
});

export const buttonOverrides: Required<Pick<Components, 'MuiButton' | 'MuiIconButton'>> = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        ...getFontStyles(),
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
          background: palette.blue[800],
          borderRadius: BUTTON_RADIUS,
          textTransform: 'none',

          '&:hover': {
            background: palette.blue[900],
          },

          [`&.${buttonClasses.disabled}`]: {
            background: palette.lavenderGray[300],
          },
        },
      },
      {
        props: {
          variant: 'outlined',
        },
        style: {
          background: palette.background.secondary,
          borderRadius: BUTTON_RADIUS,
          textTransform: 'none',
          borderWidth: '2px !important',
          borderColor: palette.blue[800],
          color: palette.blue[800],

          '&:hover': {
            ...getOutlinedButtonHoverStyles(),
          },

          [`&.${buttonClasses.disabled}`]: {
            background: palette.lavenderGray[200],
            borderColor: palette.gray[400],
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
        style: { ...getSize(), height: '42px' },
      },
      {
        props: {
          size: 'medium',
          variant: 'outlined',
        },
        style: getSize(),
      },
      {
        props: {
          size: 'small',
          variant: 'outlined',
        },
        style: {
          padding: '4px 22px',
          fontSize: '13px',
          lineHeight: '17px',
          fontWeight: 400,
        },
      },
      {
        props: {
          size: 'small',
          variant: 'contained',
        },
        style: { ...getSize(), height: '36px' },
      },
    ],
  },

  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: '8px',
        backgroundColor: palette.blue[25],
        color: palette.blue[800],

        ':hover': {
          backgroundColor: palette.blue[50],
        },
      },
    },
  },
};
