import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  Wrapper,
  Projects,
  Section,
  ProjectCard,
  Header,
  Image,
  Title,
  Body,
  Description,
  Links,
  GithubButton,
  GithubImage,
  LiveButton,
  Skills
} from "../styles/showcasesStyles"

import githubIcon from "../images/github.svg"

const Showcases = () => {
  const projects = useStaticQuery(
    graphql`
      query {
        allProjectsJson {
          nodes {
            title
            description
            tech
            libraries
            git_url
            web_url
            svgs
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <Projects >
        <Section>Projects</Section>
        {projects.allProjectsJson.nodes.map(project => (
          <ProjectCard  key={project.title}>
            <Header>
              <Title>{project.title}</Title>
              <div>
                {project.svgs.map(svg => (
                  <Image
                    key={`${svg}-${project.title}`}
                    src={require("../images/" + svg + ".svg")}
                  />
                ))}
              </div>
            </Header>
            <Body>
              <Description>{project.description}</Description>
            </Body>
            <Links>
              <GithubButton as="a" href={project.git_url} target="_blank">
                {" "}
                <span>Source Code</span>
                <GithubImage src={githubIcon} alt="" />
              </GithubButton>
              <LiveButton as="a" href={project.web_url} target="_blank">
                Live Preview
              </LiveButton>
            </Links>
          </ProjectCard>
        ))}
      </Projects>
      <Skills id="Skills">
           <Section>Skills</Section>       
      </Skills>
    </Wrapper>
  )
}

export default Showcases
