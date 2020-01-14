import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import { Title, Paragraph } from "../components/shared/text"
import {
  StyledLink,
  PrimaryButton,
  StyledButton,
} from "../components/shared/button"
import { HeroWrapper, MainContainer } from "../components/shared/container"
import { Designer, ImageWrapper } from "../components/shared/image"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <Layout>
      <MainContainer>
        <HeroWrapper>
          <div>
            <Title>I love to build simple, clear and intuitive websites</Title>
            <Paragraph>
              I'm {data.site.siteMetadata.author}, front-end developer with
              graphic design background based in Manchester, UK.
            </Paragraph>
            <Paragraph>
              Some of the tools I usually use are SASS, Styled Components,
              React.js, Gatsby, Node, and git.
            </Paragraph>
            <StyledLink to="/contact">
              <PrimaryButton>Check portfolio</PrimaryButton>
            </StyledLink>
          </div>
          <ImageWrapper>
            <Designer />
          </ImageWrapper>
        </HeroWrapper>
        <Title>I don't like to write</Title>
        <Paragraph>
          This could be my blog, but I dn't like to write anything, just read
          content, but anyways it's a section
        </Paragraph>
        <Paragraph>Want to read my blog?</Paragraph>
        <StyledLink to="/blog">
          <StyledButton>Let's go!</StyledButton>
        </StyledLink>
      </MainContainer>
    </Layout>
  )
}

export default HomePage
