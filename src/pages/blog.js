import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import { FlexContainer } from "../components/shared/container"
import { Title } from "../components/shared/text"
import { BlogList } from "../components/shared/list"
import { BlogLink } from "../components/shared/button"
import Section from "../components/section"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            author
            title
            slug
            publishedDate(formatString: "DD MMM, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head pageTitle="Blog" />
      <Section>
        <Title>My shitty Blog</Title>
      </Section>
      <Section>
        <BlogList>
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <li key={node.title}>
              <BlogLink to={`/blog/${node.slug}`}>
                <h2>{node.title}</h2>
              </BlogLink>
              <FlexContainer justify={"space-between"}>
                <p>By {node.author}</p>
                <p>Created at {node.publishedDate}</p>
              </FlexContainer>
            </li>
          ))}
        </BlogList>
      </Section>
    </Layout>
  )
}

export default BlogPage
