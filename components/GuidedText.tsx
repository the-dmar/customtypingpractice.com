import { useEffect, useRef } from "react"
import useTypingContext from "../hooks/useTypingContext"
import { InvisibleInput } from "../styles/GuidedText.styled"
import Text from "./Text"

export default function GuidedText() {
  const { input, handleInput } = useTypingContext()

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.key.length === 1) inputRef?.current?.focus()
    })
  }, [])

  return (
    <>
      <InvisibleInput
        value={input}
        onChange={e => handleInput(e.target.value)}
        autoFocus
        ref={inputRef}
      />
      <Text />
    </>
  )
}
