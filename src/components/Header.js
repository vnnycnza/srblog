import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Toggle from 'react-toggle';

import { ThemeContext } from '../context/theme';

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <section className="flex-col md:flex-row flex items-center sm:justify-between bg-accent-1 border-b border-accent-2 pt-16 pb-4">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link to="/">
          <p className="hover:underline"> #SundayRegulars. </p>
        </Link>
      </h1>
      <section className="flex-row flex items-end">
        <h4 className="text-center text-sm mt-2 sm:mt-5 sm:text-lg sm:text-left sm:pl-8 pr-2">
          A repository of our fellowships.
        </h4>
        <Toggle
          id="theme-toggle"
          className="mr-2"
          checked={theme === 'light' ? true : false}
          onChange={handleThemeToggle}
          icons={{
            checked: '☀️',
            unchecked: '🌙',
          }}
        />
      </section>
    </section>
  );
}
