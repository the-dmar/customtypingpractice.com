import GuidedText from "../components/GuidedText"
import TestDurations from "../components/TestDurations"
import TestResults from "../components/TestResults"
import Text from "../components/Text"
import Timer from "../components/Timer"
import useTypingContext from "../hooks/useTypingContext"

export default function Home() {
  const { input, handleInput, wpm, accuracy, timer } = useTypingContext()

  return timer ? (
    <>
      <TestDurations />
      <GuidedText />
      <Timer />
    </>
  ) : (
    <TestResults />
  )

  // return <TestResults />
}
