import { PaletteOptions } from '../types';

import { semantic } from './semantic';

const palette: PaletteOptions = {
  mode: 'light',
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  blue: {
    25: '#F7F9FF',
    50: '#EAEEFF',
    100: '#E9F6FF', // popover button hover
    200: '#D7EEFF',
    300: '#B8DEFF', // outline button radio
    400: '#8DC5FF',
    500: '#609FFF',
    600: '#3C7AFF', // input | button border hover
    700: '#1A4FFF',
    800: '#0D3EF0',
    900: '#1039C3',
  },
  lavenderGray: {
    100: '#EAEAEF', // popover border
    200: '#DADAE3',
    300: '#C1C2CF',
    600: '#7E7B95', // caption color
    900: '#4F4D5B',
  },
  gray: {
    200: '#D1D1D1', // bg checkbox | radio btn disabled
    400: '#888888', // border checkbox | radio btn disabled
    600: '#5D5D5D', // input placeholder
    900: '#3D3D3D',
  },
  red: {
    100: '#FFF0F2', // delete hook button bg color
  },
  orange: {
    100: '#FFE9CA', // status pending bg
    500: '#EA6E0E', // status pending text color
  },
  green: {
    100: '#EAFFEB', // status success bg
  },

  ...semantic,
};

export default palette;
