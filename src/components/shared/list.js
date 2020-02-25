import styled from 'styled-components'

export const List = styled.ul`
  display: flex;

  li {
    padding: ${({ theme }) => theme.size.df};
  }
`

export const NavList = styled(List)`
  font-family: ${({ theme }) => theme.font.title};
  font-size: ${({ theme }) => theme.size.df};
  font-weight: ${({ theme }) => theme.weight.rg};
`

export const BlogList = styled.ol`
  /* list-style-type: disc; */
  list-style: none;

  li {
    box-sizing: unset;
    margin-bottom: ${({ theme }) => theme.size.lg};
    border: 1px solid ${({ theme }) => theme.base.lgGray};
    padding: ${({ theme }) => theme.size.md};
    position: relative;
    transition: border 0.2s linear;

    &:hover {
      border: 1px solid ${({ theme }) => theme.base.mdGray};
      a::before {
        opacity: 1;
      }
    }

    a {
      display: inline-block;
      &::before {
        content: '';
        height: 100%;
        width: 8px;
        background: ${({ theme }) => theme.mod.clPrimary};
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        transition: opacity 0.25s linear;
      }
    }

    h2 {
      font-size: ${({ theme }) => theme.size.lg};
      padding-bottom: ${({ theme }) => theme.size.sm};
      font-weight: ${({ theme }) => theme.weight.bd};
      line-height: 1;
    }
    p {
      color: ${({ theme }) => theme.base.dkGray};
    }
  }
`
