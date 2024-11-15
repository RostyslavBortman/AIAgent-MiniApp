import { Components, tabClasses } from '@mui/material';

import palette from '../palette';

export const tabsOverrides: Required<Pick<Components, 'MuiTabs' | 'MuiTab'>> = {
  MuiTabs: {
    styleOverrides: {
      root: { minHeight: 41 },
      flexContainer: {
        width: 'fit-content',
        minHeight: 41,
        height: 41,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        margin: 'auto',
        padding: 4,
        borderRadius: 10,
        backgroundColor: palette.blue[25],
        border: `1px solid ${palette.blue[50]}`,
      },
      indicator: {
        height: 33,
        margin: 'auto',
        top: 0,
        bottom: 0,
        borderRadius: 8,
        backgroundColor: palette.blue[800],
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        zIndex: 1,

        minWidth: 136,
        minHeight: 33,
        maxHeight: 33,

        borderRadius: 8,
        color: palette.text.subtitle,

        ':last-child': {
          marginRight: 0,
        },

        [`&.${tabClasses.selected}`]: {
          color: palette.text.secondary,
        },
      },
    },
  },
};
