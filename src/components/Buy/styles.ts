import styled from 'styled-components'

export const BuyContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 2.3rem;
  margin-top: 3.2rem;

  & > div {
    max-width: 11.8rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    align-items: stretch;
    label {
      width: 72px;
      input[type='number'] {
        width: 100%;
        display: block;
        outline: 0;
        border: 1px solid transparent;
        box-shadow: 0 0 0 0;
        padding: 0.85rem;
        border-radius: 6px;
        background-color: ${(props) => props.theme['gray-400']};
        :focus {
          border-color: red;
        }
      }
    }
  }
`
