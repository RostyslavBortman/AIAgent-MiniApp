import { Components } from '@mui/material';

export const typographyOverrides: Required<Pick<Components, 'MuiTypography'>> = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        headline: 'p',
      },
    },
  },
};
