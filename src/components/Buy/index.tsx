import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { BuyContainer } from './styles'

export function Buy() {
  return (
    <BuyContainer>
      <p>
        R$<span>9,90</span>
      </p>
      <div>
        <label>
          <span>
            <Minus size={14} color="#8047F8" weight="bold" />
          </span>
          <input type="number" min={1} max={100} aria-label="Quantidade" />
          <span>
            <Plus size={14} color="#8047F8" weight="bold" />
          </span>
        </label>
        <button type="submit">
          <ShoppingCartSimple size={22} color="#F3F2F2" weight="fill" />
        </button>
      </div>
    </BuyContainer>
  )
}
