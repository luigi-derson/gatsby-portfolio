import styled from "styled-components"
import { Link } from "gatsby"

export const A = styled.a`
  display: flex;
  align-items: center;
  flex: none;
`
export const StyledLink = styled(Link).attrs({
  activeClassName: "active",
})`
  display: flex;
  flex: none;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.generic.dkGray};

  &:hover,
  &.${props => props.activeClassName} {
    color: ${props => props.theme.brand.primary};
  }
`

export const BlogLink = styled(Link)`
  color: ${props => props.theme.generic.black};
  text-decoration: none;

  &:hover,
  &:active {
    color: ${props => props.theme.brand.primary};
  }
`
