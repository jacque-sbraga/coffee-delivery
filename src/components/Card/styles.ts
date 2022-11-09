import styled from 'styled-components'

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px 6px 36px;
  align-items: center;
  padding: 2rem;
  max-width: 25.6rem;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);

  img {
    margin: -4.4rem 0 0 0;
    display: block;
  }

  h3 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    margin: 1.6rem 0 0.8rem 0;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
    line-height: 1.82rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  margin: 1.2rem 0 0 0;
  span {
    margin-top: 1.2rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['yellow-800']};
    margin-top: 1.2rem;
    background-color: ${(props) => props.theme['yellow-100']};
    padding: 0.4rem 0.8rem;
    border-radius: 100px;
    display: block;
    line-height: 1.3rem;
  }
`
