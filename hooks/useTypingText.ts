import { useState, useEffect } from "react"
import sentences from "../text/sentences"
import getCurrentWord from "../utils/getCurrentWord"
import getRandomArrayItem from "../utils/getRandomArrayItem"
import useLocalStorage from "./useLocalStorage"

export default function useTypingText() {
  const [text, setText] = useState<string>("")
  const [input, setInput] = useState<string>("")
  const [incorrectCharacters, setIncorrectCharacters] = useState<string[]>([])
  const [incorrectWords, setIncorrectWords] = useState<string[]>([])
  const [savedCharacterStats, setSavedCharacterStats] = useLocalStorage(
    "characterStats",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("")
      .map(character => ({ character, correct: 0, incorrect: 0 }))
  )

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

    if (lastTyped && correctCharacter && /[a-zA-Z]/.test(correctCharacter)) {
      updateSavedCharacterStats(lastTyped, correctCharacter)
    }

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

  const updateSavedCharacterStats = (
    lastTyped: string,
    correctCharacter: string
  ) => {
    let newSavedCharacterStats = [...savedCharacterStats]

    const characterResult =
      correctCharacter === lastTyped ? "correct" : "incorrect"

    const characterIndex = savedCharacterStats.findIndex(
      ({ character }) => character === correctCharacter.toUpperCase()
    )

    newSavedCharacterStats[characterIndex][characterResult]++
    setSavedCharacterStats(newSavedCharacterStats)
  }

  return [
    text,
    input,
    validateAndCorrectInput,
    incorrectCharacters,
    incorrectWords,
    getRandomText,
    savedCharacterStats,
  ] as const
}
