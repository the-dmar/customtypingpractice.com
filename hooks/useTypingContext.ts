import { useContext } from "react"
import { TypingContext } from "../contexts/TypingContext"

const useTypingContext = () => {
  const context = useContext(TypingContext)

  if (context === null) {
    throw new Error("TextContext is null")
  }

  return context
}

export default useTypingContext
