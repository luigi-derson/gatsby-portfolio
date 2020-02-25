import styled from 'styled-components'

export const StyledMain = styled.main`
  padding: ${({ theme }) => theme.size.lg} 0;
  min-height: calc(100vh - 86.4px - 66.4px);
`

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.size.md} 0;
  display: flex;
  justify-content: space-between;
`

export const StyledSection = styled.section`
  padding: ${({ theme }) => theme.size.lg} 0;
`

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.base.dkGray};
  padding: ${({ theme }) => theme.size.lg} 0;
  color: ${({ theme }) => theme.base.white};
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
`
export const HeaderContainer = styled(FlexContainer)`
  justify-content: space-between;
`

// export const FlexContainer = styled.div`
//   display: flex;
//   width: 100%;
//   ${({theme})({ justify }) => justify && `justify-content: ${({theme})justify};`}
//   ${({theme})({ align }) => align && `align-items: ${({theme})align};`}
//   ${({theme})({ direction }) => direction && `flex-direction: ${({theme})direction};`}
//   ${({theme})({ padding }) => padding && `padding: ${({theme})padding};`}
//   ${({theme})({ margin }) => margin && `margin: ${({theme})margin};`}
//   ${({theme})({ minWidth }) => minWidth && `min-width: ${({theme})minWidth};`}
//   ${({theme})({ maxWidth }) => maxWidth && `max-width: ${({theme})maxWidth};`}
//   ${({theme})({ height }) => height && `height: ${({theme})height};`}
//   ${({theme})({ minHeight }) => minHeight && `min-height: ${({theme})minHeight};`}
//   ${({theme})({ maxHeight }) => maxHeight && `max-height: ${({theme})maxHeight};`}
// `

export const MainContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.size.lg};
`
export const HeroWrapper = styled(FlexContainer)`
  width: 100%;
  justify-content: space-between;
  div {
    width: 50%;
  }
`
