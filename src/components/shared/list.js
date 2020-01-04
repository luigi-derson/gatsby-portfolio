import styled from "styled-components"

export const List = styled.ul`
  display: flex;

  li {
    padding: ${props => props.theme.size.df};
  }
`

export const NavList = styled(List)`
  font-family: ${props => props.theme.fontStack.title};
  font-size: ${props => props.theme.size.md};
  font-weight: ${props => props.theme.weight.bold};
`

export const BlogList = styled.ol`
  li {
    margin-bottom: ${props => props.theme.size.df};
    h2 {
      font-size: ${props => props.theme.size.lg};
      padding-bottom: ${props => props.theme.size.sm};
      line-height: 1;
    }
    p {
      color: ${props => props.theme.generic.mdGray};
    }
  }
`
