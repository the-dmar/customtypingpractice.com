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
  HorizontalLine,
  VerticalLine,
  MiddleRow,
  OuterRow,
  RestartInstructionsPrimary,
  RestartInstructionsSecondary,
  RestartInstructionsSecondaryWrapper,
  Title,
} from "../styles/TestResults.styled"
import TestDurations from "./TestDurations"

export default function TestResults() {
  const { wpm, accuracy, keystrokes } = useTypingContext()

  const incorrectKeystrokes = () => {
    return keystrokes.filter(({ key, correctKey }) => key !== correctKey)
  }

  const incorrectWords = () => [
    ...new Set(incorrectKeystrokes().map(({ word }) => word)),
  ]

  const incorrectCharacters = () => incorrectKeystrokes().map(({ key }) => key)

  // const incorrectCharacters

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
              {incorrectWords().map(word => (
                <ResultListItem>{word}</ResultListItem>
              ))}
            </ResultList>
          </ResultWrapper>
        </ResultColumn>
        <ResultColumn>
          <ResultWrapper alignment="start">
            <ResultLabel>Incorrect Letters</ResultLabel>
            <ResultList>
              {incorrectCharacters().map(character => (
                <ResultListItem>{character}</ResultListItem>
              ))}
            </ResultList>
          </ResultWrapper>
        </ResultColumn>
      </MiddleRow>
      <OuterRow>
        <TestDurations />
        <RestartInstructionsPrimary>
          Press TAB to start over
        </RestartInstructionsPrimary>
        <RestartInstructionsSecondaryWrapper>
          <RestartInstructionsSecondary>Or click</RestartInstructionsSecondary>
          <Button background="var(--Orange)" color="white">
            Here
          </Button>
        </RestartInstructionsSecondaryWrapper>
      </OuterRow>
    </TestResultContainer>
  )
}
