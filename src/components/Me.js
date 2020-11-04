import React, { useState, useEffect } from "react"

import scrollTo from "gatsby-plugin-smoothscroll"

import {
  Wrapper,
  Name,
  About,
  Navigation,
  Button,
  Social,
} from "../styles/meStyles.js"
import bgBrush from "../images/brush-paint.svg"

const Me = () => {
  const [section, setSection] = useState(1)

  //TODO FIX OBSERVER API FOR LARGE SCREENS
  useEffect(() => {
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSection(2)
        } else {
          setSection(1)
        }
      })
    })

    observer.observe(document.querySelector("#Stacks"))
  }, [])

  return (
    <Wrapper>
      <Name>
        <span
          style={{
            color: "#66fcf1",
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
        <Button
          backo={section === 1 ? bgBrush : false}
          onClick={() => {
            setSection(1)
            scrollTo("#Projects")
          }}
        >
          Projects
        </Button>
        <Button
          backo={section === 2 ? bgBrush : false}
          onClick={() => {
            setSection(2)
            scrollTo("#Stacks")
          }}
        >
          Stacks
        </Button>
      </Navigation>
      <Social>
          <p>IMAGE</p>
          <p>LINKEDIN</p>
          <p>GITHUB</p>
      </Social>
    </Wrapper>
  )
}

export default Me
