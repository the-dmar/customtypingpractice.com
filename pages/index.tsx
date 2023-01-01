import TestDurations from "../components/TestDurations"
import TestResults from "../components/TestResults"
import Text from "../components/Text"
import Timer from "../components/Timer"
import useTypingContext from "../hooks/useTypingContext"

export default function Home() {
  const { input, handleInput, wpm, accuracy } = useTypingContext()

  // return (
  //   <>
  //     <TestDurations />
  //     <input value={input} onChange={e => handleInput(e.target.value)} />
  //     <Text />
  //     <Timer />
  //     <div>{wpm}</div>
  //     <div>{accuracy}</div>
  //   </>
  // )

  return <TestResults />
}
