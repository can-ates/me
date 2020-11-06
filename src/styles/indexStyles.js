import styled from "styled-components/macro"

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  margin: auto;
`

export const Content = styled.div`
  display: flex;
  


  @media (min-width: 970px) {
    justify-content: space-between;
    gap: 5rem;
    padding: 5rem 5rem 0 5rem;
  }

  @media (max-width: 969px){
    flex-direction: column;
    align-items: center;
    padding: 2rem 2rem 0 2rem;
  }
`
