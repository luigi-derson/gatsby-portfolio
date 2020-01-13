import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Section from "../components/section"
import { List } from "../components/shared/list"
import { Title } from "../components/shared/text"

const PortfolioPage = () => (
  <Layout>
    <Head pageTitle="Portfolio" />
    <Section>
      <Title>Check some of my last works!</Title>
      <List>
        <li>All</li>
        <li>Branding</li>
        <li>Print</li>
        <li>Illustration</li>
        <li>Web</li>
      </List>
    </Section>
  </Layout>
)

export default PortfolioPage
