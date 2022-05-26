import * as React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/shared/Section";
import Skills from "../components/Skills";
import Cards from "../components/Cards";
import Seo from "../components/Seo";
import Contact from "../components/Contact";
import { graphql } from "gatsby";
import MobileNabar from "../components/MobileNavbar";
import TimeLine from "../components/TimeLine";

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
      <MobileNabar/>
      <Header />
      <main style={{overflowX: "hidden"}}>
        <Section title="About me" id="about-me">
          <TimeLine/>
        </Section>
        <Section title="Skills" id="skills">
          <Skills />
        </Section>
        <Section title="Projects" id="projects">
          <Cards data={data} />
        </Section>
        <Section title="Let's talk" id="contact" withPaddingBottom withBg>
          <Contact />
        </Section>
      </main>
    </>
  );
};
export default IndexPage;
