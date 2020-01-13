import styled from "styled-components"

export const List = styled.ul`
  display: flex;

  li {
    padding: ${props => props.theme.size.df};
  }
`

export const NavList = styled(List)`
  font-family: ${props => props.theme.font.title};
  font-size: ${props => props.theme.size.df};
  font-weight: ${props => props.theme.weight.rg};
`

export const BlogList = styled.ol`
  /* list-style-type: disc; */
  list-style: none;

  li {
    box-sizing: unset;
    margin-bottom: ${props => props.theme.size.lg};
    border: 1px solid ${props => props.theme.base.lgGray};
    padding: ${props => props.theme.size.md};
    position: relative;
    transition: border 0.2s linear;

    &:hover {
      border: 1px solid ${props => props.theme.base.mdGray};
      a::before {
        opacity: 1;
      }
    }

    a {
      display: inline-block;
      &::before {
        content: "";
        height: 100%;
        width: 8px;
        background: ${props => props.theme.mod.clPrimary};
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        transition: opacity 0.25s linear;
      }
    }

    h2 {
      font-size: ${props => props.theme.size.lg};
      padding-bottom: ${props => props.theme.size.sm};
      font-weight: ${props => props.theme.weight.bd};
      line-height: 1;
    }
    p {
      color: ${props => props.theme.base.dkGray};
    }
  }
`
