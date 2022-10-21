import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['gray-700']}
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 400;
        font-size: 1.6rem;
    }

    body{
        background-color: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-700']}
    }

    ul{
        list-style: none;
    }
`
