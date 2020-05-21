/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: '#SundayRegulars Blog',
    siteUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://fervent-pasteur-29a652.netlify.app'
        : 'http://localhost:8000',
  },
  plugins: [
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
    'gatsby-transformer-remark',
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
