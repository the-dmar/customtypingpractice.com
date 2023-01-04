import useTypingContext from "../hooks/useTypingContext"
import { Cell, Header, Row, StatTable } from "../styles/Stats.styled"
import { HorizontalLine } from "../styles/TestResults.styled"
import calculateAccuracy from "../utils/calculateAccuracy"

export default function Stats() {
  const { savedCharacterStats } = useTypingContext()

  const tableValues = () => {
    const headers = [
      "Letter",
      "Total Typed",
      "Correct",
      "Incorrect",
      "Accuracy",
    ]

    const tableValues = savedCharacterStats.map(
      ({ character, correct, incorrect }) => {
        const totalTyped = correct + incorrect
        const accuracy = calculateAccuracy(incorrect, totalTyped)

        return [character, totalTyped, correct, incorrect, accuracy]
      }
    )

    const tableValuesWithHeaders = [headers, ...tableValues]

    return tableValuesWithHeaders
  }

  return (
    <StatTable>
      {tableValues().map((row, rowIndex) => (
        <Row>
          {row.map(value => (
            <Cell>{rowIndex === 0 ? <Header>{value}</Header> : value}</Cell>
          ))}
        </Row>
      ))}
    </StatTable>
  )
}
