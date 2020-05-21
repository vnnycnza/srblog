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
    <section className="grid grid-cols-2 flex-row flex items-start mb-6 sm:mb-10 bg-accent-1 border-b border-accent-2 pt-16 pb-2">
      <h2 className="text-2xl font-bold text-left tracking-tighter leading-tight md:pr-8">
        <Link to="/">
          <p className="hover:underline"> #SundayRegulars. </p>
        </Link>
      </h2>
      <div className="mt-1 sm:mt-1 text-right">
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
      </div>
    </section>
  );
}
