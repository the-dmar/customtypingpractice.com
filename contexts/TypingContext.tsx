import { createContext, SetStateAction, useState } from "react"
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
  testDuration: number
  handleTestDuration: (newDuration: number) => void
}

export const TypingContext = createContext<TextContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [text, input, handleInput] = useTypingText()
  const [testDuration, setTestDuration] = useState(60)
  const [timer, start, pause, reset, setTimer] = useTimer(60, "backward")

  const handleTestDuration = (newDuration: number) => {
    setTimer(newDuration)
    setTestDuration(newDuration)
  }

  return (
    <TypingContext.Provider
      value={{
        text,
        input,
        handleInput,
        timer,
        testDuration,
        handleTestDuration,
      }}
    >
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
