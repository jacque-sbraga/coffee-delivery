import styled from 'styled-components'

export const FilterListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;

  & li {
    color: ${(props) => props.theme['yellow-800']};
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme['yellow-500']};
    padding: 0.6rem 1.2rem;
    border-radius: 100px;
    transition: background-color 0.5s;
    :hover {
      background-color: ${(props) => props.theme['yellow-100']};
    }
  }
`
