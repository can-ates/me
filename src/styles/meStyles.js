import styled from "styled-components/macro"

//LEFT COLUMN
export const Wrapper = styled.div`
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
  margin-top: 3rem;
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
    top: -46px;
    left: -37px;
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

export const About = styled.p`
  margin-top: 2rem;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 2.5rem;
`