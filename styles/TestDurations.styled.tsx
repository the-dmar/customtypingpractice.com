import styled from "styled-components"

interface TestDurationProps {
  selected: boolean
}

export const DurationButtonWrapper = styled.div``
export const DurationButton = styled.button<TestDurationProps>`
  background-color: ${({ selected }) => (selected ? "blue" : "grey")};
`
