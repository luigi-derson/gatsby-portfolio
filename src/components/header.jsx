import React from "react"

import { BlackLogo } from "./shared/image"
import { NavBar } from "./shared/nav"
import { NavList } from "./shared/list"
import { StyledLink } from "./shared/button"
import { StyledHeader, MainContainer, FlexContainer } from "./shared/container"

const Header = () => {
  return (
    <StyledHeader>
      <MainContainer>
        <FlexContainer justify={"space-between"}>
          <StyledLink to="/">
            <BlackLogo />
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
        </FlexContainer>
      </MainContainer>
    </StyledHeader>
  )
}

export default Header
