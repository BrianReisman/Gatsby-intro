import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  // this becomes the JSON object. data.site.siteMetadata
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata; //unpacks JSON for us. It's like destructuring on SEND vs when recieved
};

export default useSiteMetadata;
