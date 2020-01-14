import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"
import Head from "../components/Head"
import { Title, Paragraph } from "../components/shared/text"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author
      title
      publishedDate(formatString: "DD MMM, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const { title, author, publishedDate, body } = props.data.contentfulBlogPost
  const options = {
    renderNode: {
      //Fix image fetching
      "embedded-asset-block": ({ data }) => {
        const alt = data.target.fields.title["en-US"]
        const url = data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
      paragraph: ({ content }) => {
        const [paragraph] = content
        if (paragraph.value) {
          return <Paragraph>{paragraph.value}</Paragraph>
        }
      },
    },
  }
  return (
    <Layout>
      <Head pageTitle={title} />
      <Title>{title}</Title>
      <p>{author}</p>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default Blog
