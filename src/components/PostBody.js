import React from 'react';

export default function PostBody({ body }) {
  return (
    <div className="max-w-xl mx-auto text-left mb-40">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
