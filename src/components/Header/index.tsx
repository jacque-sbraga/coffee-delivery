import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <a href="/">
          <MapPin size={32} color="#8047f8" weight="fill" />
          Porto Alegre, RS
        </a>
        <a href="/checkout">
          <ShoppingCart size={32} color="#c47f17" weight="fill" />
        </a>
      </nav>
    </HeaderContainer>
  )
}
