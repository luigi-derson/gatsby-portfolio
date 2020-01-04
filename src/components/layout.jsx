import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../theme/index"
import GlobalStyle from "./reset.css"
import { Container, Content } from "./container/index"
import Header from "./header"
import Footer from "./footer"

const Layout = props => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Content>
          <Header />
          {props.children}
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  </>
)

export default Layout
