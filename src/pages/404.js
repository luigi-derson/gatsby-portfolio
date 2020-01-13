import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import { StyledLink } from "../components/shared/button"
import { Title } from "../components/shared/text"

const NotFound = () => {
  return (
    <Layout>
      <Head pageTitle="404" />
      <Title>Page not found</Title>
      <StyledLink to="/">Head home</StyledLink>
    </Layout>
  )
}

export default NotFound
