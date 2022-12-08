import useTypingContext from "../hooks/useTypingContext"
import splitByWord from "../utils/splitByWord"
import Word from "./Word"

export default function Text() {
  const { text } = useTypingContext()
  return (
    <div>
      {splitByWord(text).map((word, wordIndex) => (
        <Word word={word} wordIndex={wordIndex} key={wordIndex} />
      ))}
    </div>
  )
}
