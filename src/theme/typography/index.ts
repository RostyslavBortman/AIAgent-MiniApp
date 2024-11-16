import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

import { inter, dmSans, goldman } from './fonts';

export const variants: TypographyOptions = {
  h1: {
    fontFamily: goldman.style.fontFamily,
    fontSize: 58,
    fontWeight: 500,
    lineHeight: '69.6px',
  },
  h2: {
    fontFamily: dmSans.style.fontFamily,
    fontSize: 49,
    fontWeight: 600,
    lineHeight: '58.8px',
  },
  h3: {
    fontFamily: dmSans.style.fontFamily,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: '48px',
  },
  h4: {
    fontFamily: dmSans.style.fontFamily,
    fontSize: 30,
    fontWeight: 600,
    lineHeight: '42px',
  },
  body1: {
    lineHeight: '22.4px',
  },
  body2: {
    fontWeight: 500,
    lineHeight: '22.4px',
  },
  body3: {
    fontWeight: 700,
    lineHeight: '22.4px',
  },
  subtitle1: {
    fontSize: 18,
    lineHeight: '23.4px',
  },
  subtitle2: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '23.4px',
  },
  caption: {
    fontSize: '13px',
    lineHeight: '16.9px',
  },
  caption2: {
    fontSize: '13px',
    fontWeight: 600,
    lineHeight: '16.9px',
  },
};

export const typography = (themePalette: Palette) => ({
  color: themePalette.text.primary,
  fontFamily: inter.style.fontFamily,
  allVariants: {
    fontSize: '16px',
    color: themePalette.text.primary,
  },
  ...variants,
});
