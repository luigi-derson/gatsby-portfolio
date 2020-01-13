import styled from "styled-components"

export const StyledMain = styled.main`
  padding: ${props => props.theme.size.lg} 0;
  min-height: calc(100vh - 86.4px - 66.4px);
`

export const StyledHeader = styled.header`
  background: ${props => props.theme.base.lgGray};
  padding: ${props => props.theme.size.md} 0;
  display: flex;
  justify-content: space-between;
`

export const StyledSection = styled.section`
  padding: ${props => props.theme.size.lg} 0;
`

export const StyledFooter = styled.footer`
  background: ${props => props.theme.base.dkGray};
  padding: ${props => props.theme.size.lg};
  color: ${props => props.theme.base.white};
`

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
`
export const MainContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 ${props => props.theme.size.lg};
`
export const HeroWrapper = styled(FlexContainer)`
  width: 100%;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoint.md}) {
    width: 50%;
  }
`
