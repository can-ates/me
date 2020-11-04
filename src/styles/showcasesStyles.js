import styled from "styled-components/macro"

export const Wrapper = styled.div`
  flex: 0.6;
  max-width: 35rem;
  width: 100%;
  margin-left: auto;
`

//SECTION
export const Section = styled.h1`
  font-weight: 700;
  background: -webkit-linear-gradient(#45a29e, #66fcf1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
  margin-bottom: 1.1rem;
`

//CARD
export const ProjectCard = styled.div`
  background-color: #1f2833;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
    transform: scale(1.16);
  }

  &:last-child {
    margin-bottom: 0;
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
`

export const Title = styled.h3`
  font-weight: 500;

  background: -webkit-linear-gradient(#45a29e, #66fcf1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: center;
  cursor: default;
`

//CARD_BODY
export const Body = styled.div`
  margin-top: 1rem;
`

export const Description = styled.p`
  color: #c5c6c7;
  line-height: 1.5rem;
  font-weight: 400;
  cursor: default;
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
`

export const LiveButton = styled(Button)``
