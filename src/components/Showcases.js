import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  Wrapper,
  ProjectCard,
  Header,
  Image,
  Title,
  Body,
  Description
} from "../styles/showcasesStyles"

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
      {data.allDataJson.nodes.map(project => (
        <ProjectCard >
          <Header>
            <Title>{project.title}</Title>
            <div>
              {project.svgs.map(svg => (
                <Image src={require("../images/" + svg + ".svg")} />
              ))}
            </div>
          </Header>
          <Body>
              <Description>
                {project.description}
              </Description>  
          </Body>
        </ProjectCard>
      ))}
    </Wrapper>
  )
}

export default Showcases
