import styled from "styled-components"

export const Title = styled.h1`
  font-family: ${props => props.theme.font.title};
  font-size: ${props => props.theme.size.xxl};
  color: ${props => props.theme.base.black};
  padding-bottom: ${props => props.theme.size.md};
`

export const Paragraph = styled.p`
  line-height: 1.5;
  font-size: ${props => props.theme.size.md};
  color: ${props => props.theme.base.dkGray};
  padding-bottom: ${props => props.theme.size.sm};
`
