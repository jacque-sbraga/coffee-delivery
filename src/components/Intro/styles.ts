import styled from 'styled-components'

export const IntroContainer = styled.section`
  background: url(/src/assets/background.svg) top no-repeat;
  padding: 9.2rem 16rem;
  display: flex;

  gap: 5.6rem;
  div {
    flex: 1;
  }

  div:last-child {
    max-width: 47.6rem;

    img {
      max-width: 100%;
    }
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 4.8rem;
    line-height: 6.24rem;
    margin-bottom: 1.6rem;
    color: ${(props) => props.theme['gray-900']};
  }
  p {
    font-size: 2rem;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 6.6rem;
    line-height: 2.6rem;
  }

  ul {
    display: flex;
    grid-template-rows: repeat(2, 1fr);
    font-size: 1.6rem;
    max-width: 56.7rem;
    align-items: center;

    li {
      display: flex;
      gap: 1.2rem;
      align-items: center;
    }
    li:nth-child(2) {
      margin-top: 2rem;
    }
  }
`
export type ItemVariant =
  | 'yellow-800'
  | 'yellow-500'
  | 'gray-700'
  | 'purple-500'

interface ItemProps {
  variant: ItemVariant
}

export const Item = styled.span<ItemProps>`
  border-radius: 1000px;
  background-color: ${(props) => props.theme[props.variant]};
  padding: 0.8rem;
  line-height: 0;
`
