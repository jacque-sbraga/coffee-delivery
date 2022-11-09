import { ShoppingCartSimple } from 'phosphor-react'
import { BuyContainer } from './styles'

export function Buy() {
  return (
    <BuyContainer>
      <p>
        <span>R$</span>9,90
      </p>
      <div>
        <label>
          <input type="number" min={1} aria-label="Quantidade" />
        </label>
        <button type="submit">
          <ShoppingCartSimple size={22} color="#8047f8" weight="fill" />
        </button>
      </div>
    </BuyContainer>
  )
}
