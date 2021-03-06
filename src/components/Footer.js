import React from 'react';
import { Link } from 'gatsby';

import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-center">
          <div className="text-4xl md:text-6xl md:pr-6 text-center">
            <Link to="/prayers">
              <span role="img" aria-label="Pray">
                🙏
              </span>
            </Link>
          </div>
          <div className="text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2">
            "Carry each other’s burdens, and in this way you will fulfill the
            law of Christ."
            <span className="text-xl italic"> ~ Galatians 6:2 </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
