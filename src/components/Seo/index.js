import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo({ title, description }) {
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription, keyword, twitterUsername } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="keyword" content={keyword} />
      <meta name="twitter:creator" content={twitterUsername} />
      <html lang="en" />
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
      }
    }
  }
`;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
Seo.defaultProps = {
  title: null,
  description: null,
};
