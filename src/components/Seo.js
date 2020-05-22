import get from 'lodash/get';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.org/tutorial/seo-and-social-sharing-cards-tutorial/
export default function Seo({
  description,
  lang,
  meta,
  image: metaImage,
  title,
  pathname,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `,
  );

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;
  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const imageSource = get(metaImage, 'childImageSharp.fluid', null);

  const image = imageSource
    ? `${site.siteMetadata.siteUrl}${imageSource.src}`
    : null;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          image
            ? [
                {
                  property: 'og:image',
                  content: image,
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ],
        )
        .concat(meta)}
    ></Helmet>
  );
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};
