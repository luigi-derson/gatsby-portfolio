import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { Title, Paragraph } from "../components/text/index"
import { Section } from "../components/container/index"

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
      <Section>
        <Title>{data.site.siteMetadata.title}</Title>
        <Paragraph>
          I'm {data.site.siteMetadata.author}, front-end developer with graphic
          design background based in Manchester, UK.
        </Paragraph>
        <Paragraph>
          Want to work togheter? <Link to="/contact">Get in touch</Link>
        </Paragraph>
      </Section>
    </Layout>
  )
}

export default HomePage
