'use client';
import { ThemeProvider } from 'next-themes';

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeContextProvider;
