import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  padding: 0 16rem 9.2rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5.4rem 0;
    h2 {
      color: ${(props) => props.theme['gray-800']};
      font-size: 3.2rem;
      font-family: 'Baloo 2', cursive;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 3.2rem;
  }
`
