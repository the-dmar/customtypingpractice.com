import Text from "../components/Text"
import useTypingContext from "../hooks/useTypingContext"
import useGuidedText from "../hooks/useTypingText"

export default function Home() {
  const { text, newText, input, handleInput } = useTypingContext()

  return (
    <>
      <Text />
    </>
  )
}
