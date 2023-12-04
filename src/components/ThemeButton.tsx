'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon, BeakerIcon } from '@heroicons/react/24/solid';
// import { BeakerIcon } from '@heroicons/react/24/solid'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* <BeakerIcon className="h-6 w-6 text-blue-500" /> */}
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
        style={{ border: 'red', height: 50, width: 50 }}
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'dark' ? (
          <SunIcon className="h-5 w-5 text-orange-300" />
        ) : (
          <MoonIcon className="h-5 w-5 text-gray-800" />
        )}
      </button>
    </>
  );
};

export default ThemeButton;
