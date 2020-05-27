import React, { useContext } from 'react';

import Header from './Header';
import HeaderMin from './Header-Min';
import Footer from './Footer';
import Container from './Container';

import { useLocation } from '@reach/router';
import { ThemeContext } from '../context/theme';

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const header = pathname === '/' ? <Header></Header> : <HeaderMin></HeaderMin>;

  return (
    <div
      className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      } bg-primary text-main-text text-center transition-all duration-300`}
    >
      <Container>
        {header}
        <div className="min-h-full">
          <main>{children}</main>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
