import JSConfetti from 'js-confetti'
import Swal from 'sweetalert2'
import words from './words.json'

export const choose = (currentWords: string[]) => {
  let word
  while (!word || currentWords.includes(word)) {
    const index = Math.floor(Math.random() * words.length)
    word = words[index]
  }
  return word
}

export const make = (count: number) => {
  const selected = []
  for (let i = 0; i < count; i++) {
    const word = choose(selected)
    selected.push(word)
  }
  return selected
}

export const getCombinations = (count: number): bigint => {
  const length = BigInt(words.length)
  let combinations = 1n
  for (let i = 0; i < count; i++) {
    const bigI = BigInt(i)
    combinations *= length - bigI
  }
  return combinations
}

export const confettiExplosion = () => {
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti({
    confettiColors: [
      '#fff',
      '#04C8C8',
      '#F1416C',
      '#009EF7',
      '#FFC700',
      '#7239EA',
      '#FE621D'
    ]
  })
}

export const toast = (text: string) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 1500
  })
  Toast.fire({
    icon: 'success',
    title: text
  })
}
