import styled from "styled-components/macro"

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  margin: auto;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 5rem 0 5rem;
`

//LEFT COLUMN
export const Me = styled.div`
  flex: 0.4;

  cursor: default;
`

export const Name = styled.h1`
  font-weight: 900;
  font-size: 4rem;
  line-height: 4rem;
`

export const Navigation = styled.div`
  padding-left: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    top: -47px;
    left: -30px;
    background: ${props => (props.backo ? `url(${props.backo})` : null)};
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 125px;
    width: 175px;
    z-index: -2;
  }

  &:hover {
    color: ${props => (props.backo ? "white" : "#c3073f")};
  }
`

export const About = styled.p`
  margin-top: 2rem;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 2.5rem;
`

export const Works = styled.div`
  flex: 0.6;
`
