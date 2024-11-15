import palette from '../palette';

export const getScrollbarStyles = () => ({
  '&::-webkit-scrollbar': {
    width: '4px',
    backgroundColor: palette.common.white,
    borderRadius: '17px',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: '17px',
    backgroundColor: palette.blue[800],
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: palette.blue[50],
    borderRadius: '10px',
  },
});
