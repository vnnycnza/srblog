import React from 'react';
import { Link } from 'gatsby';

export default function CoverImage({ title, src, slug }) {
  const image = (
    <img
      src={src}
      alt={`Cover for ${title}`}
      className="hover:shadow-medium transition-shadow duration-200 h-64 w-full object-cover"
    />
  );

  return <div>{slug ? <Link to={`/posts/${slug}`}>{image}</Link> : image}</div>;
}
