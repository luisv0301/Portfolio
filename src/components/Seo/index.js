import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo({ title, description }) {
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription, keyword, image, twitterUsername } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <link
        rel="icon"
        type="image/jpg"
        href="https://drive.google.com/uc?export=view&id=1wbhAogi_lmrzIadclxWFnlRM4WXxziLb"
      />
      <meta name="theme-color" content="#a855f7" />
      <meta name="description" content={seo.description} />
      <meta name="keyword" content={keyword} />
      <meta name="image" content={image} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={seo.title} />
    </Helmet>
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        keyword
        twitterUsername
        image
      }
    }
  }
`;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
};
