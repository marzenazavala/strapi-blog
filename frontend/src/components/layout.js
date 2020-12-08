import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import Seo from "./seo";
import './BlogLayout/blogLayout.styles.css';

const Layout = ({ children, seo, className }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              publicURL
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Seo seo={seo} />
        <main className={className}>{children}</main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
