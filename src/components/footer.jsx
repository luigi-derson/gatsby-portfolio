import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { StyledFooter, MainContainer, FlexContainer } from "./shared/container"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <StyledFooter>
      <MainContainer>
        <FlexContainer justify={"center"}>
          <p>Created by {data.site.siteMetadata.author} &copy; 2020</p>
        </FlexContainer>
      </MainContainer>
    </StyledFooter>
  )
}

export default Footer
