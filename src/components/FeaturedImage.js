import React from 'react';
import Img from 'gatsby-image';

export default function FeaturedImage({ title, image }) {
  const img = (
    <Img
      fluid={image.childImageSharp.fluid}
      alt={`Featured for ${title}`}
      style={{ width: '100%' }}
      imgStyle={{ objectFit: 'contain' }}
      className="hover:shadow-medium transition-shadow duration-200 object-fit"
    />
  );

  return <div className="flex-shrink">{img}</div>;
}
