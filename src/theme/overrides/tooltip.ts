import { Components, tooltipClasses } from '@mui/material';

import palette from '../palette';
import { variants } from '../typography';

export const tooltipOverrides: Required<Pick<Components, 'MuiTooltip'>> = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        maxWidth: '285px',
        padding: '16px',
        marginBottom: '17px !important',

        border: `1px solid ${palette.lavenderGray[100]}`,
        backgroundColor: palette.background.secondary,
        borderRadius: '8px',

        color: palette.text.body,
        fontWeight: 400,
        ...variants.caption,
      },

      tooltipArrow: {
        [`.${tooltipClasses.arrow}`]: {
          fontSize: '23px',

          '&:before': {
            color: palette.background.secondary,
            border: `1px solid ${palette.lavenderGray[100]}`,
          },
        },
      },
    },
  },
};
