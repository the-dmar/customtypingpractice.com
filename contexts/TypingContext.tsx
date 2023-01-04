import { createContext, useRef, useState, useEffect } from "react"
import useTimer from "../hooks/useTimer"
import useTypingText from "../hooks/useTypingText"
import calculateAccuracy from "../utils/calculateAccuracy"
import getCurrentWord from "../utils/getCurrentWord"

export interface Children {
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
  accuracy: string
  keystrokes: Keystroke[]
  newTest: () => void
  savedCharacterStats: {
    character: string
    correct: number
    incorrect: number
  }[]
}

interface Keystroke {
  key: string
  correctKey: string
  word: string
}

export const TypingContext = createContext<TextContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [text, input, setInput, getRandomText, savedCharacterStats] =
    useTypingText()
  const [keystrokes, setKeystrokes] = useState<Keystroke[]>([])
  const [inputHistory, setInputHistory] = useState<string[]>([])
  const [textHistory, setTextHistory] = useState<string[]>([])
  const [testDuration, setTestDuration] = useState(15)
  const [timer, start, pause, reset, setTimer] = useTimer(15, "backward")
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState("")

  useEffect(() => {
    if (text) {
      addNewHistoryBlocks()
    }
  }, [text])

  useEffect(() => {
    if (input !== "") {
      updateInputHistory()
    }
  }, [input])

  useEffect(() => {
    if (timer === 0) {
      calculateWpm()

      const incorrectKeystrokes = keystrokes.reduce(
        (acc, { key, correctKey }) => {
          return key === correctKey ? acc : (acc += 1)
        },
        0
      )

      const totalKeystrokes = keystrokes.length
      setAccuracy(calculateAccuracy(incorrectKeystrokes, totalKeystrokes))
    }
  }, [timer])

  const timerStatusRef = useRef("inactive")

  const newTest = () => {
    getRandomText()
    handleTestDuration(testDuration)
    setInputHistory([])
    setTextHistory([])
    setKeystrokes([])
  }

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
    if (newInput.length > input.length) {
      handleKeystroke(newInput)
    }

    if (timerStatusRef.current === "inactive") {
      start()
      timerStatusRef.current = "active"
    }
    setInput(newInput)
  }

  const handleKeystroke = (newInput: string) => {
    const keyIndex = newInput.length - 1
    const key = newInput[keyIndex]
    setKeystrokes(keystrokes => [
      ...keystrokes,
      { key, correctKey: text[keyIndex], word: getCurrentWord(text, newInput) },
    ])
  }

  const updateInputHistory = () => {
    let newInputHistory = [...inputHistory]
    newInputHistory[inputHistory.length - 1] = input
    setInputHistory(newInputHistory)
  }

  const getCorrectCharacterCount = () => {
    return inputHistory
      .join("")
      .split("")
      .reduce((acc, el, i) => {
        if (textHistory.join("")[i] === el) return (acc += 1)
        else return acc
      }, 0)
  }

  const calculateWpm = () => {
    const correctCharacterCount = getCorrectCharacterCount()
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
        accuracy,
        keystrokes,
        newTest,
        savedCharacterStats,
      }}
    >
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
