import React from 'react'

import Layout from '../components/Layout'
import { StyledLink } from '../components/shared/button'
import { Title } from '../components/shared/text'

const NotFound = () => (
  <Layout headTitle="404">
    <Title>Page not found</Title>
    <StyledLink to="/">Head home</StyledLink>
  </Layout>
)

export default NotFound
