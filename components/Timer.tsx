import useTypingContext from "../hooks/useTypingContext"
import { TestTimer } from "../styles/Timer.styled"

export default function Timer() {
  const { timer } = useTypingContext()

  return <TestTimer>{timer}</TestTimer>
}
