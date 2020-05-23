/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: '#SundayRegulars Blog',
    description: 'A repository of our fellowships',
    author: '@vnnycnza',
    keywords: ['blog', 'christianity', 'fellowship', 'church'],
    siteUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://sundayregulars.netlify.app'
        : 'http://localhost:8000',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
          },
        ],
      },
    },
    'gatsby-plugin-react-head',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          ...(process.env.NODE_ENV === `production`
            ? [require('cssnano')]
            : []),
        ],
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
};
