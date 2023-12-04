import './globals.css';

import ThemeContextProvider from '@/context/ThemeContextProvider';
import { StoreProvider } from '@/store/StoreProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { GlobalContextProvider } from '../context/ContextStoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'My Platform',
    template: '%s | My Platform',
  },
  description: 'Created by Dodo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning={true}>
          <ThemeContextProvider>{children}</ThemeContextProvider>
          {/* <GlobalContextProvider>{children}</GlobalContextProvider> */}
        </body>
      </html>
    </StoreProvider>
  );
}
