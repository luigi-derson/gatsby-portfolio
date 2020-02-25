import styled from 'styled-components'

import designer from '../../images/hero-img.svg'

export const Designer = styled.img.attrs({
  src: designer,
  alt: 'Designer',
})`
  width: 75%;
  height: 100%;
`
export const ImageWrapper = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  display: flex;
  justify-content: flex-end;
`
