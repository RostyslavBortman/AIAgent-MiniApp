import { PaletteOptions as MuiPaletteOptions, Theme as MuiTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    caption2?: React.CSSProperties;
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
  gray: { 100: string; 200: string; 300: string; 400: string; 600: string; 900: string };

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
    placeholder: string;
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
  divider: string;
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
