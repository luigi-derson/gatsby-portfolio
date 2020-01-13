import React from "react"
import { MainContainer, StyledSection } from "./shared/container"

const Section = ({ children }) => {
  return (
    <StyledSection>
      <MainContainer>{children}</MainContainer>
    </StyledSection>
  )
}

export default Section
