import React from 'react';

export default function Message({ content }) {
  return (
    <section className="flex-row content-center py-10 min-h-60-vh md:min-h-65-vh min-w-full">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tighter leading-tight">
        {content}{' '}
        <span role="img" aria-label="Peace">
          ✌️
        </span>
      </h1>
    </section>
  );
}
