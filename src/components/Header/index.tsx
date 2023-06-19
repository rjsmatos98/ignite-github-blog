import { HeaderContainer } from './styles'
import LogoGitHub from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoGitHub} alt="" />
    </HeaderContainer>
  )
}
