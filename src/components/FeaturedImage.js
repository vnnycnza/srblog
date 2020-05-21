import React from 'react';

export default function FeaturedImage({ title, src }) {
  const image = (
    <img
      src={src}
      alt={`Featured for ${title}`}
      className="hover:shadow-medium transition-shadow duration-200 object-cover"
    />
  );

  return <div className="md:flex-shrink-0">{image}</div>;
}
