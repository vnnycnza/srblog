import React from 'react';

export default function PostBody({ body }) {
  return (
    <div className="max-w-xl mx-auto text-left md:text-justify mb-5">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
