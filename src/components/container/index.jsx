import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1150px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex-grow: 1;
`

export const Section = styled.div`
  margin-top: ${props => props.theme.size.md};
  padding: ${props => props.theme.size.md} 0;
`
