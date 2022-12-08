import { useState, useEffect } from "react"
import sentences from "../text/sentences"
import getRandomArrayItem from "../utils/getRandomArrayItem"

export default function useTypingText() {
  const [text, setText] = useState<string>("")
  const [input, setInput] = useState<string>("")

  useEffect(() => {
    setText(getRandomText)
  }, [])

  useEffect(() => {
    if (input.length === text.length) newBlock()
  }, [input])

  const getRandomText = () => getRandomArrayItem(sentences)

  const newBlock = () => {
    setText(getRandomText)
    setInput("")
  }

  const handleInput = (value: string) => {
    const lastTyped = value[value.length - 1]
    const correctCharacter = text[value.length - 1]

    if (lastTyped === " " && correctCharacter !== " ") {
      setInput(value.slice(0, -1) + "¿")
      return
    }

    if (correctCharacter === " " && lastTyped !== " ") {
      setInput(value.slice(0, -1) + " ")
    } else setInput(value)
  }

  return [text, input, handleInput] as const
}
