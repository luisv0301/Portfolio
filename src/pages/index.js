import * as React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/shared/Section";
import Skills from "../components/Skills";
import Cards from "../components/Cards";
import Form from "../components/Form";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

export const query = graphql`
  {
    projects: allContentfulProjects {
      nodes {
        title
        image {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            aspectRatio: 1
          )
          title
        }
        categories
        description
        repoUrl
        siteUrl
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo />
      <Navbar />
      <Header />
      <main>
        <Section title="Skills" id="skills">
          <Skills />
        </Section>
        <Section title="Projects" id="projects">
          <Cards data={data} />
        </Section>
        <Section title="Let's talk" id="contact">
          <Form />
        </Section>
      </main>
    </>
  );
};
export default IndexPage;
