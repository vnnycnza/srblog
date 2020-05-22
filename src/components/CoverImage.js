import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default function CoverImage({ title, slug, image }) {
  const img = (
    <Img
      fixed={image.childImageSharp.fixed}
      alt={`Cover for ${title}`}
      style={{ width: '100%', display: 'flex' }}
      imgStyle={{ alignSelf: 'center' }}
      className="hover:shadow-medium transition-shadow duration-200 object-cover"
    />
  );

  return (
    <div className="container">
      {slug ? <Link to={`/posts/${slug}`}>{img}</Link> : img}
    </div>
  );
}
