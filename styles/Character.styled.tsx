import styled from "styled-components"

interface CharacterWithFeedbackProps {
  status: string
}

export const CharacterWithFeedback = styled.span<CharacterWithFeedbackProps>`
  color: ${({ status }) => status};
  font-size: 1.85vw;
  margin: 0 0.02vw;
`
