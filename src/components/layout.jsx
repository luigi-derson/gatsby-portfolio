import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../theme/index"
import GlobalStyle from "./reset.css"
import { StyledMain } from "./shared/container"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </ThemeProvider>
  </>
)

export default Layout
