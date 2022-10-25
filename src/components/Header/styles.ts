import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 3.2rem 16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      padding: 0.8rem;
      border-radius: 6px;
      font-size: 1.4rem;
    }
    a:first-child {
      background-color: ${(props) => props.theme['purple-100']};
      gap: 0.4rem;
      color: ${(props) => props.theme['purple-800']};
    }
    a:last-child {
      background-color: ${(props) => props.theme['yellow-100']};
    }
  }
`
