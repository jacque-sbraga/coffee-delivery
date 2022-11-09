import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <NavLink to="/">
          <MapPin size={22} color="#8047f8" weight="fill" />
          Porto Alegre, RS
        </NavLink>
        <NavLink to="/checkout">
          <ShoppingCart size={22} color="#c47f17" weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
