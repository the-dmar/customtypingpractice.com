import styled from "styled-components"

interface CharacterWithFeedbackProps {
  status: string
}

export const CharacterWithFeedback = styled.span<CharacterWithFeedbackProps>`
  color: ${({ status }) => status};
  font-size: 1.85vw;
  margin: 0 0.02vw;
  position: relative;

  ${({ status }) =>
    status === "current" &&
    `
    &::before {
      left: -0.2vw;
      content: "|";
      bottom: 0.1vw;
      color: #126782;
      scale: 1 1.3;
      font-size: 1.9vw;
      position: absolute;
    }
  `}
`
