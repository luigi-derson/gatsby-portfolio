import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import { Title, Paragraph } from "../components/shared/text"
import Section from "../components/section"
import {
  StyledLink,
  PrimaryButton,
  StyledButton,
} from "../components/shared/button"
import { HeroWrapper, FlexContainer } from "../components/shared/container"

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
      <Head />
      <Section>
        <HeroWrapper>
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
        </HeroWrapper>
      </Section>
      <Section>
        <FlexContainer direction={"column"} align={"end"}>
          <Title>I don't like to write</Title>
          <Paragraph>
            This could be my blog, but I dn't like to write anything, just read
            content, but anyways it's a section
          </Paragraph>
          <Paragraph right>Want to read my blog?</Paragraph>
          <StyledLink to="/blog">
            <StyledButton>Let's go!</StyledButton>
          </StyledLink>
        </FlexContainer>
      </Section>
    </Layout>
  )
}

export default HomePage
