import { Components } from '@mui/material';

export const skeletonOverrides: Required<Pick<Components, 'MuiSkeleton'>> = {
  MuiSkeleton: {
    defaultProps: {
      animation: 'wave',
    },
  },
};
