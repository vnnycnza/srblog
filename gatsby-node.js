const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/post.js');

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              type
              date
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    /** eslint-disable-next-line no-console */
    console.error(result.errors);
    throw result.errors;
  }

  const contentEdges = result.data.allMarkdownRemark.edges;
  const posts = contentEdges.filter(
    edge => edge.node.frontmatter.type === 'post',
  );

  // Per Post Pages
  posts.forEach((edge, index) => {
    // Create post pages
    const nextID = index + 1 < posts.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : posts.length - 1;
    const nextEdge = posts[nextID];
    const prevEdge = posts[prevID];

    createPage({
      path: edge.node.fields.slug,
      component: postTemplate,
      context: {
        slug: edge.node.fields.slug,
        nexttitle: nextEdge.node.frontmatter.title,
        nextslug: nextEdge.node.fields.slug,
        prevtitle: prevEdge.node.frontmatter.title,
        prevslug: prevEdge.node.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const type = _.get(node, 'frontmatter.type', null);
  if (node.internal.type === 'MarkdownRemark' && type === 'post') {
    const value = createFilePath({ node, getNode });
    const slug = `/posts/${value.split('---')[1]}`;

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};
