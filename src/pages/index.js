import React from "react"

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

const IndexPage = () => (
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
          I'm a Junior Full Stack Software Developer based in Ankara, Turkey. I
          enjoy creating dynamic web applications, and I'm React enthusiast.
        </About>
        <Navigation>
          <Button backo={bgBrush}>Projects</Button>
          <Button backo={bgBrush}>Stacks</Button>
        </Navigation>
        <div>Social Links</div>
      </Me>
      <Works>Samples</Works>
    </Content>
  </Wrapper>
)

export default IndexPage
