import styled from "styled-components/macro"

export const Wrapper = styled.div`
  flex: 0.6;
  max-width: 35rem;
  width: 100%;
  margin-left: auto;

  @media (max-width: 969px) {
    margin: 0;
  }
`

//PROJECTS-SKILLS CONTAINER
export const Container = styled.div`
  margin-bottom: 3rem;
`

//SECTION
export const Section = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  background: -webkit-linear-gradient(#45a29e, #66fcf1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
  margin-bottom: 3rem;

  @media (max-width: 969px) {
    font-size: 2rem;
  }
`

//CARD
export const ProjectCard = styled.div`
  background-color: #27323f;
  padding: 1rem;
  border-radius: 7px;
  margin-bottom: 2rem;
  transition: all 0.2s ease-in-out;

  @media (min-width: 970px) {
    &:hover {
      transform: scale(1.16);
    }
  }
`

//CARD_HEADER
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Image = styled.img`
  opacity: 0.4;
  margin-right: 1rem;

  @media (max-width: 969px) {
    height: 30px;
  }

  @media (max-width: 430px) {
    height: 21px;
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 1.31rem;
  background: -webkit-linear-gradient(#45a29e, #66fcf1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: center;
  cursor: default;

  @media (max-width: 430px) {
    font-size: 1.1rem;
  }
`

//CARD_BODY
export const Body = styled.div`
  margin-top: 1rem;
`

export const Description = styled.h1`
  color: #c5c6c7;
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  cursor: default;

  @media (max-width: 430px) {
    font-size: 0.9rem;
  }
`
//CARD_LINKS
export const Links = styled.div`
  display: flex;

  margin-top: 1.5rem;
`

export const Button = styled.button`
  cursor: pointer;
  padding: 0.66em;
  border-radius: 15px;
  opacity: 0.7;
  background-color: #46344e;
  color: #66fcf1;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 430px) {
    padding: 0.5em;
  }
`

export const GithubButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

export const GithubImage = styled(Image)`
  margin: 0;
  margin-left: 0.5rem;
  opacity: 1;
  height: 17px;
  width: 17px;

  @media (max-width: 430px) {
    display: none;
  }
`

export const LiveButton = styled(Button)`
  vertical-align: middle;
`

//SKILLS
export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-around;
`

export const Skill = styled.div`
  position: relative;

  @media (min-width: 970px) {
    &:hover a {
      display: block;
    }
  }
`

export const TechName = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  text-decoration: none;
  transform: translate(-50%, -50%);
  display: none;
`

export const Logo = styled(Image)`
  opacity: 1;
  margin: 0;
  transition: opacity 0.5s ease;
  height: 100px;
  width: 120px;

  @media (max-width: 430px) {
    height: 75px;
    width: 90px;
  }

  @media (min-width: 970px) {
    &:hover {
      opacity: 0;
      cursor: pointer;
    }
  }
`

export const Break = styled.div`
  height: 5em;
  width: 1px;
  margin: 2rem auto;

  background-color: #45a29e;
`
