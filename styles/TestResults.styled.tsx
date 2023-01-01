import styled from "styled-components"

interface ResultWrapperProps {
  alignment: "center" | "start"
}

export const TestResultContainer = styled.main`
  display: flex;
  flex-direction: column;
  /* outline: 1px solid red; */
  padding: 0 2rem;
`

export const OuterRow = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  &:nth-child(3) > *:not(:first-child) {
    padding-top: 0.5rem;
  }
`

export const Title = styled.h1`
  font-size: 3.2vw;
  font-weight: 800;
  color: var(--Blue);
`
export const MiddleRow = styled.section`
  display: flex;
  flex-direction: row;
  padding: 3rem 0;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border-radius: 4px;
`

export const RestartInstructionsPrimary = styled.strong`
  font-size: 1.8vw;
  color: var(--Blue);
`
export const RestartInstructionsSecondary = styled.span`
  font-weight: 600;
  font-size: 1.2vw;
`
export const RestartInstructionsSecondaryWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ResultColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* outline: 1px solid green; */
`

export const ResultWrapper = styled.div<ResultWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ alignment }) => alignment};
  /* outline: 1px solid blue; */
  height: 100%;
  max-height: 16rem;
`

export const ResultLabel = styled.label`
  font-weight: 700;
  font-size: 1vw;
  color: var(--Orange);
  margin-bottom: 0.5rem;
`
export const MainResult = styled.output`
  font-size: 2.9vw;
  font-weight: 700;
`
export const ResultList = styled.ul`
  max-height: 100%;
  overflow-y: auto;
  padding: 0 5rem;
`
export const ResultListItem = styled.li`
  list-style: none;
  margin-top: 1rem;
`

export const HorizontalLine = styled.div``
export const VerticalLine = styled.li``
