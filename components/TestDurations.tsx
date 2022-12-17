import useTypingContext from "../hooks/useTypingContext"
import {
  DurationButton,
  DurationButtonWrapper,
} from "../styles/TestDurations.styled"

const durations = [
  { label: "30s", seconds: 30 },
  { label: "1m", seconds: 60 },
  { label: "3m", seconds: 180 },
  { label: "5m", seconds: 300 },
  { label: "10m", seconds: 600 },
]

export default function TestDurations() {
  const { testDuration, handleTestDuration } = useTypingContext()

  return (
    <DurationButtonWrapper>
      {durations.map(({ label, seconds }, i) => (
        <DurationButton
          onClick={() => handleTestDuration(seconds)}
          selected={testDuration === seconds}
        >
          {label}
        </DurationButton>
      ))}
    </DurationButtonWrapper>
  )
}
