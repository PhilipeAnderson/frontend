import React from 'react';
import { Routes } from './src/routes';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';

// import { LoginToken } from './src/screens/LoginToken';

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Routes />
    </ThemeProvider>
  );
}