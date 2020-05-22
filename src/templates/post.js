import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostHeader from '../components/PostHeader';
import PostBody from '../components/PostBody';
import Seo from '../components/Seo';
import Share from '../components/Share';

import useSiteMetadata from '../hooks/useSiteMetadata';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { siteUrl, title } = useSiteMetadata();
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const authorDetails = {
    name: frontmatter.author,
    photo: `${siteUrl}/assets/dp/${frontmatter.author.toLowerCase()}.jpg`,
  };

  return (
    <>
      <Seo
        title={frontmatter.title}
        description={`An entry from ${title}`}
        image={frontmatter.image}
      />
      <Layout>
        <PostHeader
          title={frontmatter.title}
          author={authorDetails}
          image={frontmatter.image}
          date={frontmatter.date}
        />
        <PostBody body={html} />
        <Share
          url={`${siteUrl}/${frontmatter.slug}`}
          title={frontmatter.title}
        />
      </Layout>
    </>
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
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
