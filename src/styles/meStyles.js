import styled from "styled-components/macro"

//LEFT COLUMN
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;

  @media (min-width: 970px) {
    flex: 0.4;
    position: sticky;
    height: calc(100vh - 5rem);
    top: 5rem;
  }

  @media (max-width: 969px) {
    flex-direction: column;
  }
`

export const Name = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  line-height: 4rem;

  @media (max-width: 1205px) {
    font-size: 2.6rem;
  }

  @media (max-width: 350px) {
    font-size: 2.1rem;
  }
`

export const Hello = styled.span`
  color: #66fcf1;
  background: -webkit-linear-gradient(#45a29e, #66fcf1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Button = styled.button`
  background-color: inherit;
  position: relative;
  cursor: pointer;
  color: white;
  margin-bottom: 2rem;
  font-size: 1.5rem;

  &:before {
    position: absolute;
    content: "";
    top: -46px;
    left: -40px;
    display: ${props => (props.backo ? "block" : "none")};
    background: ${props => (props.backo ? `url(${props.backo})` : null)};
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 125px;
    width: 175px;
    z-index: -2;
  }

  &:hover {
    color: ${props => (props.backo ? "white" : "#45a29e")};
  }
`

export const About = styled.h1`
  margin-top: 2rem;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 2.5rem;

  @media (max-width: 969px) {
    max-width: 560px;
    width: 100%;
  }
`

export const Navigation = styled.div`
  padding-left: 1rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 969px) {
    display: none;
  }
`

export const Email = styled.h1`
  font-size: 1.2rem;
  margin: auto 0;
  font-weight: 400;
  color: #66fcf1;

  @media (max-width: 969px) {
    margin: 3rem 0;
  }
`

export const Social = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 1rem 1rem 0.8rem 0;
  border-radius: 10px;
  margin-bottom: 1.5rem;
`

export const Resume = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`
export const Border = styled.div`
  position: absolute;
  height: 50px;
  width: 60px;
  background-color: #45a29e;
  transform: translate(-50%, -50%);
  top: 46.5%;
  left: 50%;
  border-radius: 50%;
  z-index: -1;

  &::before{
    content: '';
    position: absolute;
    height: 25px;
    width: 20px;
    top: 2px;
    right: 3px;
    background-color: #45a29e;
  }
`

export const Image = styled.img`
  
`

export const Icon = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 300;

  &:visited {
    color: #fff;
  }

  &:hover {
    cursor: pointer;
  }
`

export const SocialText = styled.span`
  margin: 0 0.5em;
`
