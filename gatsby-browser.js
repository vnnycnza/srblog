import React from 'react';

import './src/css/index.css';
import ThemeContextProvider from './src/context/theme';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
