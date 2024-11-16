'use client';

import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { PropsWithChildren, FC } from 'react';

import palette from './palette';
import { overrides as components } from './overrides';
import { breakpoints } from './breakpoints';
import { typography } from './typography';
import { zIndices } from './zIndices';

export const theme = createTheme({
  palette,
  components,
  spacing: 4,
  breakpoints,
  typography,
  zIndex: zIndices,
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    // https://mui.com/material-ui/integrations/nextjs/
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};
