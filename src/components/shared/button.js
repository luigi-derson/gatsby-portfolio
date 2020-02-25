/* eslint-disable */
import styled from 'styled-components'
import { Link } from 'gatsby'

export const A = styled.a`
  display: flex;
  align-items: center;
  flex: none;
`
export const StyledButton = styled.button.attrs(props => ({
  disabled: props.disabled ? true : false,
  type: props.submit ? 'submit' : 'button',
}))`
  color: ${props => props.theme.base.black};
  border: none;
  background: ${props => props.theme.base.white};
  padding: ${props => (props.large ? '16px 24px' : '12px 18px')};
  font-size: ${props => props.theme.size.df};
  font-family: ${props => props.theme.font.title};
  line-height: 1.2;
  border: 1px solid ${props => props.theme.base.mdGray};
  /* border-radius: 4px; */
  cursor: pointer;
  outline: none;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.disabled ? '0.6' : '1')};
  transition: background 0.2s linear;

  &:hover {
    background: ${props =>
      props.disabled ? props.theme.base.black : props.theme.base.lgGray};
    transition: background 0.2s linear;
  }

  &:disabled {
    cursor: default;
  }
`

export const PrimaryButton = styled(StyledButton)`
  border-color: ${props => props.theme.mod.lgPrimary};
  background: ${props => props.theme.mod.lgPrimary};
  color: ${props => props.theme.base.white};
  &:hover {
    background: ${props =>
      props.disabled ? props.theme.mod.clPrimary : props.theme.brand.primary};
  }
`

export const StyledLink = styled(Link).attrs({
  activeClassName: 'active',
})`
  display: flex;
  flex: none;
  align-items: center;
  text-decoration: none;
  height: 100%;
  color: ${props => props.theme.base.black};

  &:hover,
  &.${props => props.activeClassName} {
    color: ${props => props.theme.brand.primary};
  }
`

export const BlogLink = styled(Link)`
  color: ${props => props.theme.base.black};
  text-decoration: none;

  &:hover,
  &:active {
    color: ${props => props.theme.brand.primary};
  }
`
