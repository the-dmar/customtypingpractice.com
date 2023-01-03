import styled from "styled-components"

interface TestDurationProps {
  selected: boolean
}

export const DurationButtonContainer = styled.div`
  display: flex;
  padding-bottom: 2rem;
`

export const DurationButtonWrapper = styled.div`
  display: flex;
`

export const DurationButton = styled.button<TestDurationProps>`
  outline: none;
  background: none;
  border: none;
  color: ${({ selected }) => (selected ? "var(--Blue)" : "var(--Black)")};
  font-weight: ${({ selected }) => (selected ? "700" : "500")};
  font-size: 1vw;
  cursor: pointer;
`

export const Divider = styled.div`
  background: var(--Black);
  width: 1px;
  height: auto;
  margin: 1rem;
`
