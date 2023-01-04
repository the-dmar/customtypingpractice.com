import { Caret, CharacterWithFeedback } from "../styles/Character.styled"

interface CharacterProps {
  wordIndex: number
  character: string
  characterIndex: number
  status: string
}

export default function Character({
  wordIndex,
  character,
  characterIndex,
  status,
}: CharacterProps) {
  return (
    <CharacterWithFeedback status={status}>
      {character === " " ? "\u00A0" : character}
      {status === "current" && (
        <Caret wordIndex={wordIndex} characterIndex={characterIndex}>
          |
        </Caret>
      )}
    </CharacterWithFeedback>
  )
}
