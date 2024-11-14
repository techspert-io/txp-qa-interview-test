import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import theme from './theme';

// Theme adapted from MUI example projects
export const TxpThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default TxpThemeProvider;
