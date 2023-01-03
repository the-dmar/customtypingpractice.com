import { useState, useEffect } from "react"
import sentences from "../text/sentences"
import getCurrentWord from "../utils/getCurrentWord"
import getRandomArrayItem from "../utils/getRandomArrayItem"

export default function useTypingText() {
  const [text, setText] = useState<string>("")
  const [input, setInput] = useState<string>("")
  const [incorrectCharacters, setIncorrectCharacters] = useState<string[]>([])
  const [incorrectWords, setIncorrectWords] = useState<string[]>([])

  useEffect(() => {
    getRandomText()
  }, [])

  useEffect(() => {
    if (input.length === text.length) newBlock()
  }, [input])

  const getRandomText = () => setText(getRandomArrayItem(sentences))

  const newBlock = () => {
    getRandomText()
    setInput("")
  }

  const validateAndCorrectInput = (value: string) => {
    const lastTyped = value[value.length - 1]
    const correctCharacter = text[value.length - 1]

    if (lastTyped !== correctCharacter) {
      setIncorrectCharacters(incorrectCharacters => [
        ...incorrectCharacters,
        correctCharacter.toUpperCase(),
      ])

      const currentWord = getCurrentWord(text, input)
      setIncorrectWords(incorrectWords => [...incorrectWords, currentWord])
    }

    if (lastTyped === " " && correctCharacter !== " ") {
      setInput(value.slice(0, -1) + "¿")
      return
    }

    if (correctCharacter === " " && lastTyped !== " ") {
      setInput(value.slice(0, -1) + " ")
    } else setInput(value)
  }

  return [
    text,
    input,
    validateAndCorrectInput,
    incorrectCharacters,
    incorrectWords,
    getRandomText,
  ] as const
}
