import { useEffect } from "react"
import useTypingContext from "../hooks/useTypingContext"
import { Button } from "../styles/General.styled"
import {
  TestResultContainer,
  ResultColumn,
  ResultWrapper,
  ResultLabel,
  MainResult,
  ResultList,
  ResultListItem,
  MiddleRow,
  OuterRow,
  RestartInstructionsPrimary,
  RestartInstructionsSecondary,
  RestartInstructionsSecondaryWrapper,
  Title,
} from "../styles/TestResults.styled"
import TestDurations from "./TestDurations"

export default function TestResults() {
  const { wpm, accuracy, keystrokes, newTest } = useTypingContext()

  useEffect(() => {
    document.addEventListener("keydown", ({ key }) => {
      if (key === "Enter") {
        newTest()
        return
      }
    })
  }, [])

  const incorrectKeystrokes = () => {
    return keystrokes.filter(({ key, correctKey }) => key !== correctKey)
  }

  const incorrectWords = () => [
    ...new Set(incorrectKeystrokes().map(({ word }) => word)),
  ]

  const incorrectCharacters = () => incorrectKeystrokes().map(({ key }) => key)

  return (
    <TestResultContainer>
      <OuterRow>
        <Title>RESULTS</Title>
      </OuterRow>
      <MiddleRow>
        <ResultColumn>
          <ResultWrapper alignment="center">
            <ResultLabel>Speed (WPM)</ResultLabel>
            <MainResult>{wpm}</MainResult>
          </ResultWrapper>
          <ResultWrapper alignment="center">
            <ResultLabel>Accuracy</ResultLabel>
            <MainResult>{accuracy}</MainResult>
          </ResultWrapper>
        </ResultColumn>
        <ResultColumn>
          <ResultWrapper alignment="start">
            <ResultLabel>Incorrect Words</ResultLabel>
            <ResultList>
              {incorrectWords().map((word, i) => (
                <ResultListItem key={i}>{word}</ResultListItem>
              ))}
            </ResultList>
          </ResultWrapper>
        </ResultColumn>
        <ResultColumn>
          <ResultWrapper alignment="start">
            <ResultLabel>Incorrect Letters</ResultLabel>
            <ResultList>
              {incorrectCharacters().map((character, i) => (
                <ResultListItem key={i}>{character}</ResultListItem>
              ))}
            </ResultList>
          </ResultWrapper>
        </ResultColumn>
      </MiddleRow>
      <OuterRow>
        <TestDurations />
        <RestartInstructionsPrimary>
          Press ENTER to start over
        </RestartInstructionsPrimary>
        <RestartInstructionsSecondaryWrapper>
          <RestartInstructionsSecondary>Or click</RestartInstructionsSecondary>
          <Button onClick={newTest} background="var(--Orange)" color="white">
            Here
          </Button>
        </RestartInstructionsSecondaryWrapper>
      </OuterRow>
    </TestResultContainer>
  )
}
