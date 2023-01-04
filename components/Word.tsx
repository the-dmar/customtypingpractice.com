import useTypingContext from "../hooks/useTypingContext"
import { WordBlock } from "../styles/Word.styles"
import getCharacterStatuses from "../utils/getCharacterStatuses"
import Character from "./Character"

interface WordProps {
  word: string
  wordIndex: number
}

export default function Word({ word, wordIndex }: WordProps) {
  const { text, input } = useTypingContext()

  const characterStatuses = getCharacterStatuses(wordIndex, text, input)

  return (
    <WordBlock>
      {word.split("").map((character, characterIndex) => (
        <Character
          wordIndex={wordIndex}
          character={character}
          characterIndex={characterIndex}
          status={characterStatuses[characterIndex]}
        />
      ))}
    </WordBlock>
  )
}
