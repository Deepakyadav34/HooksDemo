import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h2>useContext Demo</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <hr />
      <hr />
    </div>
  );
};
const UseContextDemo = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);

export default UseContextDemo;
