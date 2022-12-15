import Text from "../components/Text"
import useTimer from "../hooks/useTimer"
import useTypingContext from "../hooks/useTypingContext"
import useGuidedText from "../hooks/useTypingText"

export default function Home() {
  // const { text, newText, input, handleInput } = useTypingContext()
  const [timer, start, pause, reset] = useTimer(30, "backward")

  return (
    <>
      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      <button onClick={reset}>reset</button>
      {timer}
      {/* <input value={input} onChange={e => handleInput(e.target.value)} />
      <Text /> */}
    </>
  )
}
