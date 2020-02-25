import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
// import { FlexContainer } from "../components/shared/container"
import { Title } from '../components/shared/text'
import { BlogList } from '../components/shared/list'
import { BlogLink } from '../components/shared/button'

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
    <Layout headTitle="Blog">
      <Title>My shitty Blog</Title>
      <BlogList>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <li key={node.title}>
            <BlogLink to={`/blog/${node.slug}`}>
              <h2>{node.title}</h2>
            </BlogLink>
            <p>By {node.author}</p>
            <p>Created at {node.publishedDate}</p>
          </li>
        ))}
      </BlogList>
    </Layout>
  )
}

export default BlogPage
