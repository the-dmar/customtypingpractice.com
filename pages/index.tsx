import TestDurations from "../components/TestDurations"
import Text from "../components/Text"
import Timer from "../components/Timer"
import useTypingContext from "../hooks/useTypingContext"

export default function Home() {
  const { input, handleInput } = useTypingContext()

  return (
    <>
      <TestDurations />
      <input value={input} onChange={e => handleInput(e.target.value)} />
      <Text />
      <Timer />
    </>
  )
}
