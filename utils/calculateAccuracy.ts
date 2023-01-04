const calculateAccuracy = (
  incorrectCharacters: number,
  totalCharacters: number
) => {
  return `${Math.ceil(100 - (incorrectCharacters / totalCharacters) * 100)}%`
}

export default calculateAccuracy
