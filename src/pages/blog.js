import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { Title } from "../components/text/index"
import { BlogList } from "../components/list/index"
import { BlogLink } from "../components/button/index"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Title>Blog</Title>
      <BlogList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <BlogLink to={`/blog/${node.fields.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </BlogLink>
            <p>{node.frontmatter.date}</p>
          </li>
        ))}
      </BlogList>
    </Layout>
  )
}

export default BlogPage
