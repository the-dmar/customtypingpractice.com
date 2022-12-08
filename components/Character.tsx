import { CharacterWithFeedback } from "../styles/Character.styled"

interface CharacterProps {
  character: string
  characterIndex: number
  status: string
}

export default function Character({
  character,
  characterIndex,
  status,
}: CharacterProps) {
  return (
    <CharacterWithFeedback status={status}>
      {character === " " ? "\u00A0" : character}
    </CharacterWithFeedback>
  )
}
