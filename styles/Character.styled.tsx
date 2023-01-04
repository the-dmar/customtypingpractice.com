import styled from "styled-components"

interface CharacterWithFeedbackProps {
  status: string
}

interface CaretProps {
  wordIndex: number
  characterIndex: number
}

export const Caret = styled.span<CaretProps>`
  left: ${({ characterIndex, wordIndex }) =>
    wordIndex === 0 && characterIndex === 0 ? "-0.35vw" : "-0.2vw"};
  bottom: 0.1vw;
  color: #126782;
  scale: 1 1.35;
  font-size: 1.9vw;
  position: absolute;
  animation: ${({ characterIndex, wordIndex }) =>
    wordIndex === 0 && characterIndex === 0
      ? "blink 1s step-start 0s infinite"
      : "none"};

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`

export const CharacterWithFeedback = styled.span<CharacterWithFeedbackProps>`
  color: ${({ status }) => status};
  font-size: 1.85vw;
  margin: 0 0.02vw;
  position: relative;
`
