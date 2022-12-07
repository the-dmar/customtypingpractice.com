import { useState, useEffect } from "react"
import sentences from "../text/sentences"
import getRandomArrayItem from "../utils/getRandomArrayItem"

export default function useTypingText() {
  const [text, setText] = useState<string | null>(null)
  const [input, setInput] = useState<string | null>(null)

  useEffect(() => {
    newText()
  }, [])

  const newText = () => setText(getRandomArrayItem(sentences))
  const handleInput = (value: string) => setInput(value)

  return [text ?? "", newText, input ?? "", handleInput] as const
}
