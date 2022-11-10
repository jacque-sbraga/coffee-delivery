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
      position: relative;
      span {
        position: absolute;
        cursor: pointer;
        top: 10px;
      }
      span:first-child {
        left: 8px;
      }
      span:last-child {
        right: 8px;
      }
      input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      input[type='number'] {
        -moz-appearance: textfield;
        appearance: textfield;
      }

      input[type='number'] {
        width: 100%;
        margin: 0 auto;
        display: block;
        outline: 0;
        border: 1px solid transparent;
        box-shadow: 0 0 0 0;
        border-radius: 6px;
        padding: 0.85rem;
        color: ${(props) => props.theme['gray-800']};
        text-align: center;
        background-color: ${(props) => props.theme['gray-400']};
        :focus {
          border-color: ${(props) => props.theme['purple-500']};
        }
      }
    }
  }

  button {
    background-color: ${(props) => props.theme['purple-800']};
    border: transparent;
    border-radius: 6px;
    line-height: 0;
    padding: 0.8rem;
    cursor: pointer;
    transition: background 0.3s ease;
    :hover {
      background-color: ${(props) => props.theme['purple-500']};
    }
  }
`
