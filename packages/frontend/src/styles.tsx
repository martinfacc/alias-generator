import styled, { createGlobalStyle } from 'styled-components'
import '@fontsource/dm-sans'
import { devices } from './constants'

const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: #2A2D34;
    --color-white: #F5F8FA;
    --color-gray: #3F4254;

    --color-green-1: #177B7E;
    --color-green-2: #0EA2A3;
    --color-green-3: #09B5B6;
    --color-green-4: #04C8C8;
    --color-green-5: #41D4D5;
    --color-green-6: #7DE0E1;
    --color-green-7: #B9ECEE;

    --color-gray-1: #545867;
    --color-gray-2: #696D80;
    --color-gray-3: #74788D;
    --color-gray-4: #7E8299;
    --color-gray-5: #9CA0B2;
    --color-gray-6: #BABDCA;
    --color-gray-7: #D8DBE2;

    --color-red-1: #8E3750;
    --color-red-2: #C03C5E;
    --color-red-3: #D93F65;
    --color-red-4: #F1416C;
    --color-red-5: #F2587E;
    --color-red-6: #F26F90;
    --color-red-7: #F39DB3;

    --color-blue-1: #156696;
    --color-blue-2: #0B82C7;
    --color-blue-3: #0690DF;
    --color-blue-4: #009EF7;
    --color-blue-5: #3EB5F8;
    --color-blue-6: #7BCBF9;
    --color-blue-7: #B8E2FA;

    --color-yellow-1: #957A1A;
    --color-yellow-2: #CAA10D;
    --color-yellow-3: #E5B407;
    --color-yellow-4: #FFC700;
    --color-yellow-5: #FECE20;
    --color-yellow-6: #FDD43F;
    --color-yellow-7: #FAE07D;

    --color-purple-1: #4E338F;
    --color-purple-2: #6036BD;
    --color-purple-3: #6938D4;
    --color-purple-4: #7239EA;
    --color-purple-5: #8351EC;
    --color-purple-6: #9369EE;
    --color-purple-7: #B499F2;

    --color-orange-1: #AF4F26;
    --color-orange-2: #C95523;
    --color-orange-3: #E45C20;
    --color-orange-4: #FE621D;
    --color-orange-5: #FD7539;
    --color-orange-6: #FC8855;
    --color-orange-7: #FAAD8C;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "DM Sans";
    font-weight: 600;
    color: var(--color-gray);
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
      }
  input[type=number] { -moz-appearance:textfield; }
`

export default GlobalStyles

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
`

export const Word = styled.button`
  width: 18ch;
  height: min-content;
  padding: 10px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  border-radius: 10px;

  &:hover {
    background-color: var(--color-green-7);
    color: var(--color-green-1);
  }
`

export const WordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 180px;
  overflow-y: scroll;
  margin-left: 10px;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #7e8299;
    border: 1px solid #eff2f5;
  }

  @media ${devices.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Header = styled.div`
  display: flex;
  gap: 10px;
`

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 15px;
  }

  &:hover {
    background-color: ${(props) => `var(--color-${props.color}-7)`};
    svg {
      fill: ${(props) => `var(--color-${props.color}-3)`};
    }
  }
`

export const Input = styled.input`
  padding: 10px;
  text-align: center;
  border: none;
  background-color: #f1f2f3;
`

export const InputButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #f1f2f3;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => `var(--color-${props.color}-7)`};
    color: ${(props) => `var(--color-${props.color}-3)`};
  }
`

export const InputGroup = styled.div`
  display: flex;
  border-radius: 10px;

  & > :first-child {
    border-radius: 10px 0 0 10px;
  }

  & > :last-child {
    border-radius: 0 10px 10px 0;
  }
`

export const P = styled.p`
  font-size: 12px;
  text-align: center;
`