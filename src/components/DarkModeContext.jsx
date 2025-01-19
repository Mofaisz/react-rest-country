import React, { createContext, useContext, useState } from 'react';

// Create DarkMode Context
const DarkModeContext = createContext();

// Provider Component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark'); // Toggle dark mode on the body element
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom Hook for easier access
export const useDarkMode = () => useContext(DarkModeContext);
