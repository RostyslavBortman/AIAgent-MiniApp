import {
  Components,
  formLabelClasses,
  inputAdornmentClasses,
  inputBaseClasses,
  inputClasses,
} from '@mui/material';

import palette from '../palette';
import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';
import { getScrollbarStyles } from '../utils/getScrollbarStyles';

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
        color: palette.text.primary,
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
        color: palette.gray[900],

        [`&.${inputClasses.disabled}`]: {
          cursor: 'not-allowed',
        },

        '&::placeholder': {
          opacity: 1,
          color: palette.gray[600],
        },
      },
      root: {
        height: '44px',
        position: 'relative',
        borderRadius: '24px',
        border: '2px solid',
        borderColor: palette.background.secondary,
        background: `${palette.background.secondary} !important`,

        [`&.${inputClasses.focused}`]: {
          borderColor: palette.blue[600],
          outline: `4px solid ${palette.blue[200]}`,

          [`& .${inputAdornmentClasses.root}`]: {
            color: palette.blue[800],
          },
        },

        '&:hover': {
          background: palette.blue[25],
          borderColor: palette.blue[600],

          [`& .${inputAdornmentClasses.root}`]: {
            color: palette.blue[800],
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
        paddingRight: '10px',

        [`&.${inputClasses.disabled}`]: {
          cursor: 'not-allowed',
        },

        '&::placeholder': {
          opacity: 1,
          color: palette.lavenderGray[600],
          fontSize: '16px',
        },

        ...getScrollbarStyles(),
      },

      root: {
        borderRadius: '8px',
        border: '1px solid',
        borderColor: palette.blue[50],
        color: palette.lavenderGray[900],

        [`&.${inputClasses.focused}`]: {
          backgroundColor: palette.blue[25],
          borderColor: palette.blue[600],
          outline: `2px solid ${palette.blue[200]}`,

          [`& .${inputAdornmentClasses.root}`]: {
            color: palette.blue[800],
          },
        },

        '&:hover': {
          backgroundColor: palette.blue[25],
          borderColor: palette.blue[600],

          [`& .${inputAdornmentClasses.root}`]: {
            color: palette.blue[800],
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
