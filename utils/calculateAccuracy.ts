const calculateAccuracy = (
  incorrectCharacters: number,
  totalCharacters: number
) => {
  return totalCharacters === 0
    ? "N/A"
    : `${Math.ceil(100 - (incorrectCharacters / totalCharacters) * 100)}%`
}

export default calculateAccuracy
