import palette from '../palette';

import getDefaultTransitionProps from './getDefaultTransitionProps';

export const getUnderlineStyles = () => {
  return {
    '& span': {
      position: 'relative',
    },

    '& svg': {
      ...getDefaultTransitionProps(),
    },

    '& span:after': {
      content: "''",
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: '1px',
      bottom: 0,
      left: 0,
      transformOrigin: 'bottom right',
      transition: 'transform 150ms ease-out',
    },

    '&:hover': {
      background: 'none',

      'span:after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
        backgroundColor: palette.text.primary,
      },

      svg: {
        color: palette.text.hover,
      },
    },
  };
};
