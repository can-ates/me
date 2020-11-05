import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  Wrapper,
  Container,
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
  Skills,
  Skill,
  TechName,
  Logo,
  Break,
} from "../styles/showcasesStyles"

import githubIcon from "../images/github.svg"

const Showcases = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSkillsJson {
          nodes {
            techs {
              image
              name
              url
            }
          }
        }
        allProjectsJson {
          nodes {
            web_url
            title
            tech
            svgs
            git_url
            description
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <Container id="Projects">
        <Section>Projects</Section>
        {data.allProjectsJson.nodes.map(project => (
          <ProjectCard key={project.title}>
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
      </Container>
      <Container id="Skills">
        <Section>Skills</Section>

        <Skills>
          {data.allSkillsJson.nodes[0].techs.map(skill => (
            <Skill>
              <TechName as="a" href={skill.url} target="_blank">
                {skill.name}
              </TechName>
              <Logo
                key={`${skill.url}`}
                height="100px"
                width="120px"
                src={require("../images/" + skill.image + ".svg")}
              />
            </Skill>
          ))}
        </Skills>
        <Break />
        <Skills>
          {data.allSkillsJson.nodes[1].techs.map(skill => (
            <Skill>
              <TechName as="a" href={skill.url} target="_blank">
                {skill.name}
              </TechName>
              <Logo
                key={`${skill.url}`}
                height="100px"
                width="120px"
                src={require("../images/" + skill.image + ".svg")}
              />
            </Skill>
          ))}
        </Skills>
      </Container>
    </Wrapper>
  )
}

export default Showcases
