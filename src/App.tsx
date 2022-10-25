import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
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
