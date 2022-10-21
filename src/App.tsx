import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Headding } from './App.styles'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Headding>Hello</Headding>
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
