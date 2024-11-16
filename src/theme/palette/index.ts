import { PaletteOptions } from '../types';

import { semantic } from './semantic';

const palette: PaletteOptions = {
  mode: 'light',
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  gray: {
    100: '#E9E9E9', // contained button bg [HOOK_LEGO]
    200: '#ECEDF0', // outlined button bg [HOOK_LEGO]
    300: '#D4D6DB', // input border [HOOK_LEGO]

    400: '#888888', // border checkbox | radio btn disabled
    600: '#5D5D5D', // input placeholder

    900: '#202024', // button background [HOOK_LEGO]
  },

  ...semantic,
};

export default palette;
