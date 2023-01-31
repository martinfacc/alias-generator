import React from 'react'
import { debounce } from 'lodash'
import {
  choose,
  getCombinations,
  make,
  confettiExplosion,
  toast
} from './utils'
import {
  Button,
  Container,
  Card,
  Input,
  InputButton,
  InputGroup,
  Header,
  P,
  Word,
  WordContainer
} from './styles'

const App = () => {
  const inputRef = React.useRef(null)
  const [count, setCount] = React.useState(3)
  const [alias, setAlias] = React.useState([] as string[])
  const [term, exponent] = React.useMemo(() => {
    const c = getCombinations(count)
    const string = String(c)
    const length = string.length
    const chars = string.substring(0, 3)
    const numbers = parseFloat(chars) / 100
    return [numbers, length - 1]
  }, [count])

  const handleRefresh = () => {
    const newAlias = make(count)
    setAlias(newAlias)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    const { value } = target
    const number = Number(value)
    if (number >= 1) setCount(number)
  }

  const debouncedHandleChange = debounce(handleChange, 500)

  const updateInputRef = (value: number) => {
    // @ts-ignore
    if (inputRef.current) inputRef.current.value = value
  }

  const handleMinus = () => {
    setCount((prev) => {
      const newCount = prev > 1 ? prev - 1 : prev
      updateInputRef(newCount)
      return newCount
    })
  }

  const handlePlus = () => {
    setCount((prev) => {
      const newCount = prev + 1
      updateInputRef(newCount)

      return newCount
    })
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(alias.join('.'))
    confettiExplosion()
    toast('Se ha copiado en el portapapeles')
  }

  const handleUpdateWord = (index: number) => {
    const word = choose(alias)
    setAlias((prevAlias) => {
      const before = prevAlias.slice(0, index)
      const after = prevAlias.slice(index + 1)
      return [...before, word, ...after]
    })
  }

  React.useEffect(handleRefresh, [count])

  // words: 4727
  // long word: "desafortunadamente" 18ch

  return (
    <Container>
      <Card>
        <Header>
          <Button color="purple" onClick={handleRefresh}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
            </svg>
          </Button>
          <Button color="blue" onClick={handleCopy}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" />
            </svg>
          </Button>
        </Header>
        <WordContainer>
          {alias.map((word, index) => (
            <Word key={word} onClick={() => handleUpdateWord(index)}>
              {word}
            </Word>
          ))}
        </WordContainer>
        <InputGroup>
          <InputButton color="red" onClick={handleMinus}>
            -
          </InputButton>
          <Input
            type="number"
            onChange={debouncedHandleChange}
            defaultValue={3}
            ref={inputRef}
          />
          <InputButton color="green" onClick={handlePlus}>
            +
          </InputButton>
        </InputGroup>
        <P>
          Existen {term}&times;10<sup>{exponent}</sup> combinaciones posibles
          aproximadamente
        </P>
      </Card>
    </Container>
  )
}

export default App
