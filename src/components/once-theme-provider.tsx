
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

type ThemeMode = 'light' | 'dark';

interface OnceThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const OnceThemeContext = createContext<OnceThemeContextType | undefined>(undefined);

export const OnceThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>('dark'); // Default to dark since it matches your current setup

  useEffect(() => {
    // Check for saved preference
    const savedTheme = localStorage.getItem('once-theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme as ThemeMode);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-once-theme', theme);
    localStorage.setItem('once-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <OnceThemeContext.Provider value={{ theme, toggleTheme }}>
      <NextThemeProvider attribute="class" defaultTheme={theme} enableSystem>
        {children}
      </NextThemeProvider>
    </OnceThemeContext.Provider>
  );
};

export const useOnceTheme = (): OnceThemeContextType => {
  const context = useContext(OnceThemeContext);
  if (context === undefined) {
    throw new Error('useOnceTheme must be used within a OnceThemeProvider');
  }
  return context;
};
