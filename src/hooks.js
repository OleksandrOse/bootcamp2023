import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app_theme') || 'light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  localStorage.setItem('app_theme', theme);
  return { theme, setTheme };
};

export const useBodyOverflow = (a, b) => {
  useEffect(() => {
    if (a || b) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [a, b]);
};
