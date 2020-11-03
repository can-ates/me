import styled from "styled-components/macro"

export const Wrapper = styled.div`
  flex: 0.6;
`

export const ProjectCard = styled.div`
  background-color: #1f2833;
  max-width: 35rem;
  width: 100%;
  margin-left: auto;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  opacity: 0.8;
  transition: all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1);
  cursor: default;

  &:hover {
    opacity: 1;
    transform: scaleY(1.22) scaleX(1.1);
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
  color: white;
  background: -webkit-linear-gradient(#45a29e, #66fcf1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: center;
`

//CARD_BODY
export const Body = styled.div`
  margin-top: 1rem;
`

export const Description = styled.p`
  color: #c5c6c7;
  line-height: 1.5rem;
  font-weight: 400;
`
