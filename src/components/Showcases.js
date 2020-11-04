import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  Wrapper,
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
} from "../styles/showcasesStyles"

import githubIcon from "../images/github.svg"

const Showcases = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
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
      <Section id="Projects">Projects</Section>
      {data.allDataJson.nodes.map(project => (
        <ProjectCard key={project.title}>
          <Header>
            <Title>{project.title}</Title>
            <div>
              {project.svgs.map(svg => (
                <Image key={`${svg}-${project.title}`} src={require("../images/" + svg + ".svg")} />
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
      <div id="Stacks" >afasdasd</div>
    </Wrapper>
  )
}

export default Showcases
