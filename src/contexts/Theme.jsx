import { createContext, useState } from "react";

const ThemeContext =  createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export { ThemeContext };

const ThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;