import React from 'react'
import Logo from './shared/logo'
import NavBar from './shared/nav'
import { NavList } from './shared/list'
import { StyledLink } from './shared/button'
import {
  StyledHeader,
  MainContainer,
  HeaderContainer,
} from './shared/container'

const Header = () => (
  <StyledHeader>
    <MainContainer>
      <HeaderContainer>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <NavBar>
          <NavList>
            <li>
              <StyledLink to="/portfolio">portfolio</StyledLink>
            </li>
            <li>
              <StyledLink to="/blog">blog</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">about</StyledLink>
            </li>
            <li>
              <StyledLink to="/contact">contact</StyledLink>
            </li>
          </NavList>
        </NavBar>
      </HeaderContainer>
    </MainContainer>
  </StyledHeader>
)

export default Header
