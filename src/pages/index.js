import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PostsGrid from '../components/PostsGrid';
import Message from '../components/Message';

import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              type
              title
              slug
              image
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.type === 'post')
    .map(p => ({
      title: p.node.frontmatter.title,
      image: p.node.frontmatter.image,
      date: p.node.frontmatter.date,
      slug: p.node.frontmatter.slug,
    }));

  const noPostsRetrieved = posts.length === 0;
  const display = noPostsRetrieved ? (
    <Message content={`No posts to show`}> </Message>
  ) : (
    <PostsGrid posts={posts} />
  );

  return (
    <Layout>
      <Container>{display}</Container>
    </Layout>
  );
};

export default IndexPage;
