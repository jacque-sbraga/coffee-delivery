import { CoffeeList, Products } from '../components/CoffeeList'
import { Intro } from '../components/Intro'

export function Home({ productsList }: Products) {
  return (
    <main>
      <Intro />
      <CoffeeList productsList={productsList} />
    </main>
  )
}
