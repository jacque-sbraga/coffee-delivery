import { Card, CoffeeProps } from '../Card'
import { FilterList } from '../FilterList'
import { CoffeeListContainer } from './styles'

export interface Products {
  productsList: CoffeeProps[]
}

export function CoffeeList({ productsList }: Products) {
  return (
    <CoffeeListContainer>
      <div>
        <h2>Nossos cafés</h2>
        <FilterList />
      </div>
      <ul>
        {productsList.map((product) => {
          return (
            <Card
              createdAt={product.createdAt}
              name={product.name}
              description={product.description}
              price={product.price}
              available={product.available}
              imageUrl={product.imageUrl}
              tags={product.tags}
              key={product.createdAt}
            />
          )
        })}
      </ul>
    </CoffeeListContainer>
  )
}
