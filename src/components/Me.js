import React, { useState, useEffect } from "react"

import scrollTo from "gatsby-plugin-smoothscroll"

import {
  Wrapper,
  Hello,
  Name,
  About,
  Navigation,
  Button,
  Email,
  Social,
  Resume,
  Image,
  Border,
  Icon,
  SocialText,
} from "../styles/meStyles.js"

import me from "../images/me.png"

import bgBrush from "../images/brush-paint.svg"
import external from "../images/external-link.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

import Pdf from '../resume/CV_.pdf'

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

    
    observer.observe(document.querySelector("#Skills"))
  }, [])

  return (
    <Wrapper>
      <Name>
        <Hello>Hello,</Hello> I'm Mutlu Can Ates.
      </Name>
      <About>
        I'm a Full Stack Software Engineer based in Ankara, Turkey. I
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
            scrollTo("#Skills")
          }}
        >
          Skills
        </Button>
      </Navigation>
      <Email>Shoot me an email: canates.dev@gmail.com</Email>
      <Social>
        <Resume as='a' href={Pdf} target='_blank' >
          <Image style={{ borderRadius: "50%" }} width="55px" src={me} alt="" />
          <Border />
        </Resume>

        <Icon href="https://github.com/can-ates" target="_blank">
          <Image height="20px" alt="github_url" src={github} />
          <SocialText>GitHub</SocialText>
          <Image height="15px" alt="external_svg" src={external} />
        </Icon>

        <Icon
          href="https://www.linkedin.com/in/mutlu-can-ates-158210184/"
          target="_blank"
        >
          <Image height="25px" alt="linkedin_url" src={linkedin} />
          <SocialText>LinkedIn</SocialText>
          <Image height="15px" alt="linkedin_svg" src={external} />
        </Icon>
      </Social>
    </Wrapper>
  )
}

export default Me
