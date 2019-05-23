import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout2";
import Greeting from "../../components/greeting";
import gatsbyAstronaut from "../../images/gatsby-astronaut.png"; // import asset file

const Ptag = styled.p`
  color: yellow;
`;

const AboutPage = ({ data }) => (
  <Layout>
    <div className="my-bg">
      <h3>About Page</h3>
      <Greeting
        greeting={data.site.siteMetadata.title}
        name={data.site.siteMetadata.author} />
      <Ptag>
        This is about route file, the /filename is the PATH in gatsby!!!
      </Ptag>
      <img width="60%" src={gatsbyAstronaut} alt="Gatsby Astronaut" />
      <Link to="/">Back to Home</Link>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

export default AboutPage;
