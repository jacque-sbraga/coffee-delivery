import { Routes, Route } from 'react-router-dom'
import { Products } from './components/CoffeeList'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router({ productsList }: Products) {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home productsList={productsList} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
