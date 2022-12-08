import { WordBlock } from "../styles/Word.styles"
import Character from "./Character"

interface WordProps {
  word: string
  wordIndex: number
}

export default function Word({ word, wordIndex }: WordProps) {
  return (
    <WordBlock>
      {word.split("").map((character, characterIndex) => (
        <Character character={character} characterIndex={characterIndex} />
      ))}
    </WordBlock>
  )
}
