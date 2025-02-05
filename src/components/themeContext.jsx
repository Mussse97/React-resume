import React, { createContext, useContext, useState } from "react";
// Skapar en context för att dela state mellan komponenter
const ThemeContext = createContext();
// Komponent som omger hela appen
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // State för att hålla koll på vilket tema som är aktivt
  // Funktionen för att toggla mellan light och dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
