import React from 'react'

import Layout from '../components/Layout'
import { List } from '../components/shared/list'
import { Title } from '../components/shared/text'

const PortfolioPage = () => (
  <Layout headTitle="portfolio">
    <Title>Check some of my last works!</Title>
    <List>
      <li>All</li>
      <li>Branding</li>
      <li>Print</li>
      <li>Illustration</li>
      <li>Web</li>
    </List>
  </Layout>
)

export default PortfolioPage
