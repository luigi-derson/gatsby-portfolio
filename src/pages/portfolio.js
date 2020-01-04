import React from "react"

import Layout from "../components/layout"
import { List } from "../components/list/index"
import { Title } from "../components/text/index"

const PortfolioPage = () => (
  <Layout>
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
