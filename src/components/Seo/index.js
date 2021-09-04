import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo({ title, description }) {
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
    </Helmet>
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
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
