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
  return (
    <TestResultContainer>
      <OuterRow>
        <Title>RESULTS</Title>
      </OuterRow>
      <MiddleRow>
        <ResultColumn>
          <ResultWrapper alignment="center">
            <ResultLabel>Speed (WPM)</ResultLabel>
            <MainResult>132</MainResult>
          </ResultWrapper>
          <ResultWrapper alignment="center">
            <ResultLabel>Accuracy</ResultLabel>
            <MainResult>98%</MainResult>
          </ResultWrapper>
        </ResultColumn>
        <ResultColumn>
          <ResultWrapper alignment="start">
            <ResultLabel>Incorrect Words</ResultLabel>
            <ResultList>
              {Array(16).fill(<ResultListItem>Word</ResultListItem>)}
            </ResultList>
          </ResultWrapper>
        </ResultColumn>
        <ResultColumn>
          <ResultWrapper alignment="start">
            <ResultLabel>Incorrect Letters</ResultLabel>
            <ResultList>
              {Array(16).fill(<ResultListItem>A</ResultListItem>)}
            </ResultList>
          </ResultWrapper>
        </ResultColumn>
      </MiddleRow>
      <OuterRow>
        <TestDurations />
        <RestartInstructionsPrimary>
          Press ENTER or TAB to start over
        </RestartInstructionsPrimary>
        <RestartInstructionsSecondaryWrapper>
          <RestartInstructionsSecondary>Or click</RestartInstructionsSecondary>
          <button>Here</button>
        </RestartInstructionsSecondaryWrapper>
      </OuterRow>
    </TestResultContainer>
  )
}
