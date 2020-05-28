import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Count from '../components/Count';

import { graphql, useStaticQuery } from 'gatsby';

const PrayersPage = () => {
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
              date(formatString: "MMMM DD, YYYY")
              for
              answered
            }
          }
        }
      }
    }
  `);

  const requests = data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.type === 'request')
    .map(p => ({
      title: p.node.frontmatter.title,
      for: p.node.frontmatter.for,
      date: p.node.frontmatter.date,
      answered: p.node.frontmatter.answered,
      description: p.node.frontmatter.description,
    }));

  return (
    <>
      <Seo title={'Prayers'} pathname={`/prayers`} />
      <Layout>
        <Count requests={requests} />
      </Layout>
    </>
  );
};

export default PrayersPage;
