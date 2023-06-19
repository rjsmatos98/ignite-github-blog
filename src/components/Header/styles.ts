import styled from 'styled-components'
import imageBackground from '../../assets/background.svg'

export const HeaderContainer = styled.header`
  min-height: 18.5rem;
  width: 100%;

  background: url(${imageBackground}) no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-top: -4rem;
  }
`
