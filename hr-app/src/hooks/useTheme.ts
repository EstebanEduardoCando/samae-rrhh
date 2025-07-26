import { useState } from 'react';

export function useTheme(initial: 'light' | 'dark' = 'light') {
  const [theme, setTheme] = useState(initial);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return { theme, toggleTheme };
}