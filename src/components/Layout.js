import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from '../theme/index'
// import dark from "../theme/dark"
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import GlobalStyle from './reset.css'
import { StyledMain } from './shared/container'

const Layout = ({ headTitle, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head pageTitle={headTitle} />
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </ThemeProvider>
)

Layout.propTypes = {
  headTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
