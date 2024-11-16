import {
  Components,
  formLabelClasses,
  inputAdornmentClasses,
  inputBaseClasses,
  inputClasses,
} from '@mui/material';

import palette from '../palette';
import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';

export const inputOverrides: Required<
  Pick<
    Components,
    | 'MuiInputAdornment'
    | 'MuiFilledInput'
    | 'MuiOutlinedInput'
    | 'MuiFormHelperText'
    | 'MuiFormLabel'
  >
> = {
  MuiInputAdornment: {
    defaultProps: {
      disableTypography: true,
    },
    styleOverrides: {
      root: {
        height: '24px',
        marginTop: '0px !important',
        color: palette.text.placeholder,
      },
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        margin: 0,
        marginTop: '6px',
      },
    },
  },

  MuiFilledInput: {
    styleOverrides: {
      input: {
        padding: '8px 12px',
        paddingLeft: '0px',
        color: palette.text.primary,

        [`&.${inputClasses.disabled}`]: {
          cursor: 'not-allowed',
        },

        '&::placeholder': {
          opacity: 1,
          color: palette.text.placeholder,
        },
      },
      root: {
        height: '38px',
        position: 'relative',
        border: '1px solid',
        borderRadius: '0px !important',
        borderColor: palette.gray[300],
        background: `${palette.background.secondary} !important`,

        [`&.${inputClasses.focused}`]: {
          borderColor: palette.backdrop.main,

          [`& .${inputAdornmentClasses.root}`]: {
            color: palette.text.primary,
          },
        },

        '&:hover': {
          background: `${palette.background.secondary} !important`,
          borderColor: palette.backdrop.main,

          [`& .${inputAdornmentClasses.root}`]: {
            color: palette.text.primary,
          },
        },

        fieldset: {
          border: 'none',
        },

        ...getDefaultTransitionProps(),
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        height: '10px',
        paddingRight: '10px',

        [`&.${inputClasses.disabled}`]: {
          cursor: 'not-allowed',
        },

        '&::placeholder': {
          opacity: 1,
          color: palette.gray[100],
        },

        ':-webkit-autofill': {
          background: 'unset !important',
        },
      },

      root: {
        borderRadius: '0px !important',
        border: '1px solid',
        borderColor: palette.gray[300],
        color: palette.text.tertiary,

        [`&.${inputClasses.focused}`]: {
          borderColor: palette.gray[900],
          color: palette.text.tertiary,
        },

        '&:hover': {
          borderColor: palette.gray[900],

          [`& .${inputAdornmentClasses.root}`]: {
            color: palette.gray[100],
          },
        },

        [`&.${inputClasses.error}`]: {
          borderColor: palette.error.main,
        },

        fieldset: {
          border: 'none',
        },

        ...getDefaultTransitionProps(),
      },
    },
    variants: [
      {
        props: { size: 'medium' },
        style: {
          padding: '8px 10px',
        },
      },
      {
        props: { size: 'small' },
        style: {
          padding: '2px 0px',

          [`& .${inputBaseClasses.input}`]: {
            padding: '5.5px 10px',
          },
        },
      },
    ],
  },

  MuiFormLabel: {
    styleOverrides: {
      root: {
        [`& .${formLabelClasses.asterisk}`]: {
          display: 'none',
        },
      },
    },
  },
};
