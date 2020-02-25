import styled from 'styled-components'

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.title};
  font-size: ${({ theme }) => theme.size.xxl};
  color: ${({ theme }) => theme.base.black};
  padding-bottom: ${({ theme }) => theme.size.md};
`

export const Paragraph = styled.p`
  line-height: 1.5;
  font-size: ${({ theme }) => theme.size.md};
  color: ${({ theme }) => theme.base.dkGray};
  padding-bottom: ${({ theme }) => theme.size.sm};
`
