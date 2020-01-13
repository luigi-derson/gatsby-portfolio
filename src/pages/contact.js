import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import { Title } from "../components/shared/text"
import Section from "../components/section"

const ContactPage = () => (
  <Layout>
    <Head pageTitle="Contact" />
    <Section>
      <Title>Get in touch.</Title>
      <ul>
        <li>Phone: +44 07902842787</li>
        <li>Email: luigiderson@gmail.com</li>
      </ul>
    </Section>
  </Layout>
)

export default ContactPage
