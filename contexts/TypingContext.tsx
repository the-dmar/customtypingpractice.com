import { createContext, useRef, useState, useEffect } from "react"
import useTimer from "../hooks/useTimer"
import useTypingText from "../hooks/useTypingText"

interface Children {
  children: JSX.Element | JSX.Element[]
}

interface TextContextInterface {
  text: string
  input: string
  handleInput: (newInput: string) => void
  timer: number
  testDuration: number
  handleTestDuration: (newDuration: number) => void
}

export const TypingContext = createContext<TextContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [text, input, setInput] = useTypingText()
  const [inputHistory, setInputHistory] = useState<string[]>([])
  const [textHistory, setTextHistory] = useState<string[]>([])
  const [testDuration, setTestDuration] = useState(60)
  const [timer, start, pause, reset, setTimer] = useTimer(60, "backward")

  useEffect(() => {
    if (text) {
      setTextHistory([...textHistory, text])
      setInputHistory([...inputHistory, ""])
    }
  }, [text])

  useEffect(() => {
    if (input !== "") updateInputHistory()
  }, [input])

  useEffect(() => {
    console.log(inputHistory)
  }, [inputHistory])

  const timerStatusRef = useRef("inactive")

  const handleTestDuration = (newDuration: number) => {
    setTimer(newDuration)
    setTestDuration(newDuration)
    pause()
    timerStatusRef.current = "inactive"
    setInput("")
  }

  const handleInput = (newInput: string) => {
    if (timerStatusRef.current === "inactive") {
      start()
      timerStatusRef.current = "active"
    }
    setInput(newInput)
  }

  const updateInputHistory = () => {
    let newInputHistory = [...inputHistory]
    newInputHistory[inputHistory.length - 1] = input
    setInputHistory(newInputHistory)
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
