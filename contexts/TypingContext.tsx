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
  wpm: number
}

export const TypingContext = createContext<TextContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [text, input, setInput, incorrectCharacters] = useTypingText()
  const [inputHistory, setInputHistory] = useState<string[]>([])
  const [textHistory, setTextHistory] = useState<string[]>([])
  const [testDuration, setTestDuration] = useState(60)
  const [timer, start, pause, reset, setTimer] = useTimer(60, "backward")
  const [wpm, setWpm] = useState(0)

  useEffect(() => {
    if (text) {
      addNewHistoryBlocks()
    }
  }, [text])

  useEffect(() => {
    if (input !== "") updateInputHistory()
  }, [input])

  useEffect(() => {
    if (timer === 0) calculateWpm()
  }, [timer])

  const timerStatusRef = useRef("inactive")

  const addNewHistoryBlocks = () => {
    setTextHistory([...textHistory, text])
    setInputHistory([...inputHistory, ""])
  }

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

  const calculateWpm = () => {
    const combinedTextHistory = textHistory.join("")
    const combinedInputHistory = inputHistory.join("")

    const correctCharacterCount = combinedInputHistory
      .split("")
      .reduce((acc, el, i) => {
        if (combinedTextHistory[i] === el) return (acc += 1)
        else return acc
      }, 0)
    const correctWordCount = correctCharacterCount / 5
    const timerInMinutes = testDuration / 60
    const newWpm = Math.ceil(correctWordCount / timerInMinutes)
    setWpm(newWpm)
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
        wpm,
      }}
    >
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
