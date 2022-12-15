import useTypingContext from "../hooks/useTypingContext"

export default function Timer() {
  const { timer } = useTypingContext()

  return <div>{timer}</div>
}
