import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

import { inter, ppMori } from './fonts';

export const variants: TypographyOptions = {
  h1: {
    font: ppMori.style.fontFamily,
    fontSize: 58,
    fontWeight: 600,
    lineHeight: '69.6px',
  },
  h2: {
    font: ppMori.style.fontFamily,
    fontSize: 49,
    fontWeight: 600,
    lineHeight: '58.8px',
  },
  h3: {
    font: ppMori.style.fontFamily,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: '48px',
  },
  h4: {
    font: ppMori.style.fontFamily,
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
  headline: {
    fontSize: 25,
    fontWeight: 700,
    lineHeight: '35px',
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
  caption3: {
    fontSize: '13px',
    fontWeight: 700,
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
