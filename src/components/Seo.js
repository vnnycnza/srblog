import get from 'lodash/get';
import React from 'react';
import { Title, Link, Meta } from 'react-head';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.org/tutorial/seo-and-social-sharing-cards-tutorial/
export default function Seo({
  description,
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

  const canonical = pathname
    ? `${site.siteMetadata.siteUrl}/${pathname}`
    : `${site.siteMetadata.siteUrl}`;
  const siteTitle = site.siteMetadata.title;
  const metaTitle = title || 'Home';
  const metaDescription = description || site.siteMetadata.description;
  const imageSource = get(metaImage, 'childImageSharp.fluid', null);
  const image = imageSource
    ? `${site.siteMetadata.siteUrl}${imageSource.src}`
    : `${site.siteMetadata.siteUrl}/assets/default.jpg`;

  return (
    <>
      <Title>{`${siteTitle} | ${metaTitle}`}</Title>
      <Link rel="canonical" content={canonical} />
      <Meta name="description" content={metaDescription} />
      <Meta name="keywords" content={site.siteMetadata.keywords.join(',')} />
      <Meta
        property="og:title"
        content={metaTitle === 'Home' ? `${siteTitle}` : `${metaTitle}`}
      />
      <Meta property="og:description" content={metaDescription} />
      <Meta property="og:type" content={canonical ? 'article' : 'website'} />
      <Meta property="og:site_name" content={site.siteMetadata.title} />
      <Meta property="og:image" content={image} />
      <Meta property="og:url" content={canonical} />
      <Meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
