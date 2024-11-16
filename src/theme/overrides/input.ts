import { Components, formLabelClasses, inputAdornmentClasses, inputClasses } from '@mui/material';

import palette from '../palette';
import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';

export const inputOverrides: Required<
  Pick<Components, 'MuiInputAdornment' | 'MuiFilledInput' | 'MuiFormHelperText' | 'MuiFormLabel'>
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
