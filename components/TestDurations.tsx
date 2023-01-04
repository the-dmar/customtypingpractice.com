import useTypingContext from "../hooks/useTypingContext"
import {
  DurationButton,
  DurationButtonContainer,
} from "../styles/TestDurations.styled"

const durations = [
  { label: "30 sec", seconds: 30 },
  { label: "1 min", seconds: 60 },
  { label: "3 min", seconds: 180 },
  { label: "5 min", seconds: 300 },
  { label: "10 min", seconds: 600 },
]

export default function TestDurations() {
  const { testDuration, handleTestDuration } = useTypingContext()

  return (
    <DurationButtonContainer>
      {durations.map(({ label, seconds }, i) => (
        <DurationButton
          onClick={() => handleTestDuration(seconds)}
          selected={testDuration === seconds}
        >
          {label}
        </DurationButton>
      ))}
    </DurationButtonContainer>
  )
}
