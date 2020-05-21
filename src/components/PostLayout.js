import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import HeaderMin from './Header-Min';
import Footer from './Footer';
import Container from './Container';

import { ThemeContext } from '../context/theme';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  const { title } = useSiteMetadata();

  return (
    <div
      className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      } bg-primary text-main-text transition-all duration-300`}
    >
      <Helmet title={title} />
      <Container>
        <HeaderMin />
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
