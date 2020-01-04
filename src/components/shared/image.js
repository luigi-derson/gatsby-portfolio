import styled from "styled-components"

import WhiteLogoPath from "../../images/logo-white.svg"
import BlackLogoPath from "../../images/logo-black.svg"

export const WhiteLogo = styled.img.attrs({
  src: WhiteLogoPath,
})`
  height: 2rem;
`

export const BlackLogo = styled.img.attrs({
  src: BlackLogoPath,
})`
  height: 3.5rem;
`
