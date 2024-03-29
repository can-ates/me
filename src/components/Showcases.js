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
  HowLong,
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
        allExperiencesJson {
          nodes {
            company
            role
            howLong
            description
            web_url
            svgs
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <Container>
        <Section>Experiences</Section>
        {data.allExperiencesJson.nodes.map(({company, description, web_url, svgs, howLong}) => (
          <ProjectCard key={company}>
            <Header
              section="Experiences"
            >
            {svgs.map(svg => (
                  <Image
                    key={`${svg}-${company}`}
                    src={require("../images/" + svg + ".svg")}
                  />
                ))}
              <Title
                section="Experiences"
              >
                {company}
              </Title>
              <HowLong>
                {howLong}  
              </HowLong>
            </Header>
            <Body>
              <Description>{description}</Description>
            </Body>
            <Links>
              
              {web_url && (
                <LiveButton as="a" href={web_url} target="_blank">
                  Company Page
                </LiveButton>
              )}
            </Links>
          </ProjectCard>
        ))}
      </Container>
      <Container>
        <Section id="Projects">Projects</Section>
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
              {project.web_url ? (
                <LiveButton as="a" href={project.web_url} target="_blank">
                  Live Preview
                </LiveButton>
              ) : (
                <LiveButton as="a">To be deployed</LiveButton>
              )}
            </Links>
          </ProjectCard>
        ))}
      </Container>
      <Container>
        <Section>Skills</Section>

        <Skills>
          {data.allSkillsJson.nodes[0].techs.map(skill => (
            <Skill key={skill.name}>
              <TechName as="a">{skill.name}</TechName>
              <Logo
                key={`${skill.url}`}
                height="100px"
                width="120px"
                src={require("../images/" + skill.image + ".svg")}
              />
            </Skill>
          ))}
        </Skills>
        <Break id="Skills" />
        <Skills>
          {data.allSkillsJson.nodes[1].techs.map(skill => (
            <Skill key={skill.name}>
              <TechName as="a">{skill.name}</TechName>
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
