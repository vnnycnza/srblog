import React from 'react';
import { graphql } from 'gatsby';

import useSiteMetadata from '../hooks/useSiteMetadata';
import PostLayout from '../components/PostLayout';
import PostHeader from '../components/PostHeader';
import PostBody from '../components/PostBody';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { siteUrl } = useSiteMetadata();
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const imageUrl = `${siteUrl}/${frontmatter.image}`;
  const authorDetails = {
    name: frontmatter.author,
    photo: `${siteUrl}/assets/dp/${frontmatter.author.toLowerCase()}.jpg`,
  };

  return (
    <PostLayout>
      <PostHeader
        title={frontmatter.title}
        author={authorDetails}
        image={imageUrl}
        date={frontmatter.date}
      />
      <PostBody body={html} />
    </PostLayout>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
        image
      }
    }
  }
`;
