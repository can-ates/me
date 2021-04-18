import React from "react"

import { Wrapper, Content } from "../styles/indexStyles.js"

import SEO from "../components/seo"


import Me from "../components/Me"
import Showcases from "../components/Showcases"


const IndexPage = () => {
  
  return (
    <React.Fragment>
    <Wrapper>
      <SEO  />
      <Content>
        <Me />
        <Showcases />
      </Content>
    </Wrapper>
    </React.Fragment>
  )
}


export default IndexPage


