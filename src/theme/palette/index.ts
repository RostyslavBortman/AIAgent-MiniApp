import { PaletteOptions } from '../types';

import { semantic } from './semantic';

const palette: PaletteOptions = {
  mode: 'light',
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  gray: {
    100: '#E9E9E9', // contained button bg
    200: '#ECEDF0', // outlined button bg
    300: '#D4D6DB', // input border

    400: '#888888',
    600: '#5D5D5D', // input placeholder

    900: '#202024', // button background
  },

  ...semantic,
};

export default palette;
