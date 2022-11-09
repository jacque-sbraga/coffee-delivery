import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

import { initializeApp } from 'firebase/app'
import { config } from './config/config'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { CoffeeProps } from './components/Card'
const app = initializeApp(config.firebaseConfig)

export function App() {
  const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([])
  const db = getFirestore(app)
  const productsCollectionRef = collection(db, 'products')

  useEffect(() => {
    const getProducts = async () => {
      const data = await (
        await getDocs(productsCollectionRef)
      ).docs.map((doc) => doc.data())

      setCoffeeList((prev) => {
        const productList = data.map((d) => {
          return {
            createdAt: d.createdAt,
            name: d.name,
            description: d.description,
            price: d.price,
            tags: d.tags,
            imageUrl: d.imageUrl,
            available: d.available,
          }
        })
        return [...productList]
      })
    }
    getProducts()
  }, [setCoffeeList])

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router productsList={coffeeList} />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>

    // <ul>
    //   {products.map(product => {
    //     console.log(product)
    //     return (
    //       <li key={product.id}>
    //         <span>{product.name}</span>
    //         <img src={product.imageUrl} alt="" />
    //       </li>
    //     )
    //   })}
    // </ul>
  )
}
