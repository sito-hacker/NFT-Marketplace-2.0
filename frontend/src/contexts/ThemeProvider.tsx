import React, { createContext, use, useEffect, useState, type ReactNode } from 'react'

type Theme  = 'light'| 'dark'
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}


export const ThemeContext = createContext<ThemeContextType | undefined> (undefined);

const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>('dark');
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        const body = document.body;
        body.classList.remove('light', 'dark');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    
    const initialValue = {
        theme,
        toggleTheme
    }
  return (
    <ThemeContext.Provider value={initialValue}>
      {children}
    </ThemeContext.Provider>
  )
} 

export default ThemeProvider

export  const useTheme = () => {
  const  themeContext = React.useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return themeContext;
}
