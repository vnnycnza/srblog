import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

export default function Share({ url, title }) {
  return (
    <div className="flex justify-end md:justify-center items-center mb-10">
      <div className="px-1">
        <FacebookShareButton url={url}>
          <FacebookIcon className="rounded-full w-12 h-12" />
        </FacebookShareButton>
      </div>
      <div className="px-1">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon className="rounded-full w-12 h-12" />
        </TwitterShareButton>
      </div>
    </div>
  );
}
