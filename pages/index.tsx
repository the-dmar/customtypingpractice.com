import Text from "../components/Text"
import useTypingContext from "../hooks/useTypingContext"

export default function Home() {
  const { input, handleInput } = useTypingContext()

  return (
    <>
      <input value={input} onChange={e => handleInput(e.target.value)} />
      <Text />
    </>
  )
}
