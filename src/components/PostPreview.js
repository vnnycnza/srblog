import React from 'react';
import { Link } from 'gatsby';

import CoverImage from './CoverImage';

export default function PostPreview({ title, image, date, slug }) {
  return (
    <div className="max-w-xs md:min-w-500 rounded overflow-hidden shadow-xl my-2 bg-secondary">
      <CoverImage slug={slug} title={title} image={image} />
      <div className="px-6 py-4">
        <Link to={`/posts/${slug}`}>
          <div className="font-bold text-xl mb-1 hover:underline">{title}</div>
        </Link>
        <p className="text-grey-darker text-sm">{date}</p>
      </div>
    </div>
  );
}
