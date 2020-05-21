import React from 'react';

import PostPreview from './PostPreview';

export default function PostsGrid({ posts }) {
  return (
    <section className="flex-col items-center flex md:flex-row">
      <div className="grid grid-cols-1 row-gap-5 mb-5 sm:mb-32 sm:grid-cols-2 sm:col-gap-16 sm:row-gap-32 lg:col-gap-32">
        {posts.map(post => (
          <PostPreview
            key={`${post.date}-${post.slug}`}
            title={post.title}
            image={post.image}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
