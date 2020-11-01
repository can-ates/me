import React, { useState } from "react"

import SEO from "../components/seo"
import {
  Wrapper,
  Content,
  Me,
  Works,
  Name,
  About,
  Navigation,
  Button,
} from "../components/indexStyles.js"

import bgBrush from "../images/brush-paint.svg"

const IndexPage = () => {
  const [section, setSection] = useState(1)

  return (
    <Wrapper>
      <SEO title="Home" />
      <Content>
        <Me>
          <Name>
            <span
              style={{
                color: "#c3073f",
              }}
            >
              Hello,
            </span>{" "}
            I'm Mutlu Can Ates.
          </Name>
          <About>
            I'm a Junior Full Stack Software Developer based in Ankara, Turkey.
            I enjoy creating dynamic web applications, and I'm React enthusiast.
          </About>
          <Navigation>
            <Button
              backo={section === 1 ? bgBrush : false}
              onClick={() => setSection(1)}
            >
              Projects
            </Button>
            <Button
              backo={section === 2 ? bgBrush : false}
              onClick={() => setSection(2)}
            >
              Stacks
            </Button>
          </Navigation>
          <div>Social Links</div>
        </Me>
        <Works>Samples</Works>
      </Content>
    </Wrapper>
  )
}

export default IndexPage
