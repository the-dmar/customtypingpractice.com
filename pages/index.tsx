import GuidedText from "../components/GuidedText"
import TestDurations from "../components/TestDurations"
import TestResults from "../components/TestResults"
import Text from "../components/Text"
import Timer from "../components/Timer"
import useTypingContext from "../hooks/useTypingContext"
import { Details } from "../styles/Home.styled"

export default function Home() {
  const { input, handleInput, wpm, accuracy, timer, testDuration, keystrokes } =
    useTypingContext()

  return timer ? (
    <>
      <Details>
        {timer === testDuration ? <TestDurations /> : <Timer />}
      </Details>
      <GuidedText />
      <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(keystrokes)}</pre>
    </>
  ) : (
    <TestResults />
  )

  // return <TestResults />
}
