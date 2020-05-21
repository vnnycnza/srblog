import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
