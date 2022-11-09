import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IntroContainer, Item } from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ul>
          <div>
            <li>
              <Item variant="yellow-800">
                <ShoppingCart size={16} color="#ffffff" weight="fill" />
              </Item>
              Compra simples e segura
            </li>
            <li>
              <Item variant="yellow-500">
                <Timer size={16} color="#ffffff" weight="fill" />
              </Item>
              Entrega rápida e rastreada
            </li>
          </div>
          <div>
            <li>
              <Item variant="gray-700">
                <Package size={16} color="#ffffff" weight="fill" />
              </Item>
              Embalagem mantém o café intacto
            </li>
            <li>
              <Item variant="purple-500">
                <Coffee size={16} color="#ffffff" weight="fill" />
              </Item>
              O café chega fresquinho até você
            </li>
          </div>
        </ul>
      </div>
      <div>
        <img src="src/assets/intro.png" alt="" />
      </div>
    </IntroContainer>
  )
}
