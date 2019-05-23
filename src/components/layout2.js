import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, Link, graphql } from 'gatsby';
// import "./layout2.css";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Layout2 = ({ children }) => (
  <StaticQuery query={graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={data => (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to={"/"}>Home</ListLink>
          <ListLink to={"/page-2"}>Page 2</ListLink>
          <ListLink to={"/info/about"}>About</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )} />
);

Layout2.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout2;
