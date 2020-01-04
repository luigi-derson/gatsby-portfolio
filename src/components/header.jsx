import React from "react"

import { BlackLogo } from "./shared/image"
import { NavBar } from "./shared/nav"
import { NavList } from "./shared/list"
import { StyledLink } from "./shared/button"

const Header = () => {
  return (
    <header>
      <NavBar>
        <h1>
          <StyledLink to="/">
            <BlackLogo />
          </StyledLink>
        </h1>
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
    </header>
  )
}

export default Header
