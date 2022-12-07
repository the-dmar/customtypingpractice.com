import { createContext } from "react"
import useTypingText from "../hooks/useTypingText"

interface Children {
  children: JSX.Element | JSX.Element[]
}

interface TextContextInterface {
  text: string
  newText: () => void
  input: string
  handleInput: (value: string) => void
}

export const TypingContext = createContext<TextContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [text, newText, input, handleInput] = useTypingText()

  return (
    <TypingContext.Provider
      value={{
        text,
        newText,
        input,
        handleInput,
      }}
    >
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
