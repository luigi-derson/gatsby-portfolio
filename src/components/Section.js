import React from 'react'
import PropTypes from 'prop-types'
import { MainContainer, StyledSection } from './shared/container'

const Section = ({ children }) => (
  <StyledSection>
    <MainContainer>{children}</MainContainer>
  </StyledSection>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
