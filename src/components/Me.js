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
  Contacts,
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

import Pdf from "../resume/_CV.pdf"

const Me = () => {
  const [section, setSection] = useState("Experiences")

  //TODO FIX OBSERVER API FOR LARGE SCREENS
  useEffect(() => {
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSection(entry.target.id)
        }
      })
    })
    const sections = [document.querySelector("#Projects"), document.querySelector('#Skills')]
    sections.forEach(section => observer.observe(section))
    
    window.addEventListener("scroll", function(){
      if (this.window.scrollY === 0) {
        setSection("Experiences")
      } else if (this.window.scrollY > 0 && this.window.scrollY < 150) {
        setSection("Projects");
      }
    });
  }, [])

  return (
    <Wrapper>
      <Name>
        <Hello>Hello,</Hello> I'm Mutlu Can Ates.
      </Name>
      <About>
        I'm a Full Stack Software Engineer based in Ankara, Turkey. I enjoy
        developing both front-end and back-end systems, and I'm React.js and
        GraphQL enthusiast.
      </About>
      <Navigation>
      <Button
          backo={section === "Experiences" && bgBrush}
          onClick={() => {
            setSection("Experiences")
            scrollTo("#Experiences")
          }}
          section="Experiences"
        >
          Experiences
        </Button>
        <Button
          backo={section === "Projects" && bgBrush}
          onClick={() => {
            setSection("Projects")
            scrollTo("#Projects")
          }}
          section="Projects"
        >
          Projects
        </Button>
        <Button
          backo={section === "Skills" && bgBrush}
          onClick={() => {
            setSection("Skills")
            scrollTo("#Skills")
          }}
          section="Skills"
        >
          Skills
        </Button>
      </Navigation>
      <Contacts>
        <Email>Shoot me an email: canates.dev@gmail.com</Email>
      </Contacts>

      <Social>
        <Resume as="a" href={Pdf} target="_blank">
          <Image style={{ borderRadius: "50%" }} width="55px" src={me} alt="" />
          <Border />
        </Resume>

        <Icon href="https://github.com/can-ates" target="_blank">
          <Image height="20px" alt="github_url" src={github} />
          <SocialText>GitHub</SocialText>
          <Image height="15px" alt="external_svg" src={external} />
        </Icon>

        <Icon
          href="https://www.linkedin.com/in/mutlu-can-ate%C5%9F-158210184/"
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
