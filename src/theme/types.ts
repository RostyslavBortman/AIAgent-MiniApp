import { PaletteOptions as MuiPaletteOptions, Theme as MuiTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
    headline?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    '2xl': true;
    '3xl': true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    caption2: true;
    caption3: true;
    headline: true;
  }
}

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
    palette: PaletteOptions;
    breakpoints: Breakpoints;
  }
}

export interface PaletteOptions extends MuiPaletteOptions {
  // COLORS
  common: {
    black: string;
    white: string;
  };
  blue: {
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  lavenderGray: {
    100: string;
    200: string;
    300: string;
    600: string;
    900: string;
  };
  gray: {
    200: string;
    400: string;
    600: string;
    900: string;
  };
  red: {
    100: string;
  };
  orange: {
    100: string;
    500: string;
  };
  green: {
    100: string;
  };

  // SEMANTIC
  background: {
    default: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
    subtitle: string;
    body: string;
    hover: string;
    disabled: string;
  };
  error: {
    main: string;
  };
  success: {
    main: string;
  };
  backdrop: {
    main: string;
  };
}

export interface Breakpoints {
  values: {
    xs: 0;
    sm: 640;
    md: 768;
    lg: 1024;
    xl: 1280;
    '2xl': 1440;
  };
}
