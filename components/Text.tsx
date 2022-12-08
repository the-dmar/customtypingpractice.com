import useTypingContext from "../hooks/useTypingContext"
import { TextBlock } from "../styles/Text.styled"
import splitByWord from "../utils/splitByWord"
import Word from "./Word"

export default function Text() {
  const { text } = useTypingContext()
  return (
    <TextBlock>
      {splitByWord(text).map((word, wordIndex) => (
        <Word word={word} wordIndex={wordIndex} key={wordIndex} />
      ))}
    </TextBlock>
  )
}
