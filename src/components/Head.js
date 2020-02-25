import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <Helmet title={pageTitle ? `${pageTitle} | ${title}` : title}>
      <link
        href="https://fonts.googleapis.com/css?family=Karla:400,700|Poppins:400,600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

Head.defaultProps = {
  pageTitle: '',
}

Head.propTypes = {
  pageTitle: PropTypes.string,
}

export default Head
