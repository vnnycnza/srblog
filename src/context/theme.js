import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem('theme');
      return theme || 'light';
    }
    localStorage.setItem('theme', theme);
    setTheme(loadTheme());
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
