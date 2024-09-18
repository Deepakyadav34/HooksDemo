import React from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h2>useContext Demo</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

const UseContextDemo = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);

export default UseContextDemo;