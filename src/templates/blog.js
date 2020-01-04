import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Title, Paragraph } from "../components/shared/text"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <Title>{props.data.markdownRemark.frontmatter.title}</Title>
      <Paragraph>{props.data.markdownRemark.frontmatter.date}</Paragraph>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Blog
