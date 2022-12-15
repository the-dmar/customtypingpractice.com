import { createContext } from "react"
import useTimer from "../hooks/useTimer"
import useTypingText from "../hooks/useTypingText"

interface Children {
  children: JSX.Element | JSX.Element[]
}

interface TextContextInterface {
  text: string
  input: string
  handleInput: (value: string) => void
  timer: number
}

export const TypingContext = createContext<TextContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [text, input, handleInput] = useTypingText()
  const [timer, start, pause, reset] = useTimer(30, "backward")

  return (
    <TypingContext.Provider
      value={{
        text,
        input,
        handleInput,
        timer,
      }}
    >
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
