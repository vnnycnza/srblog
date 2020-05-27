import React from 'react';

import Avatar from './Avatar';
import FeaturedImage from './FeaturedImage';

export default function PostHeader({ title, image, date, author }) {
  return (
    <section className="flex-col flex items-start mt-6 sm:mt-10">
      <div className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-left sm:mb-2">
        {title}
      </div>
      <div className="mb-6 text-lg">{date}</div>
      <div className="container mb-8 md:mb-16">
        <FeaturedImage title={title} image={image} />
      </div>
      <div className="max-w-2xl mb-10 sm:mx-auto">
        <div className="block">
          <Avatar name={author.name} picture={author.photo} />
        </div>
      </div>
    </section>
  );
}
