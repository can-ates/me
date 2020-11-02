import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Wrapper, ProjectCard, Image, Title } from "../styles/showcasesStyles"

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
        <ProjectCard href="">
          <div>
            {project.svgs.map(svg => (
              <Image src={require("../images/" + svg + ".svg")} />
            ))}
          </div>
          <Title>{project.title}</Title>
        </ProjectCard>
      ))}
    </Wrapper>
  )
}

export default Showcases
