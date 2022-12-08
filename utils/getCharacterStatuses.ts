import splitByWord from "./splitByWord"

const getCharacterStyles = (
  wordIndex: number,
  textBlock: string,
  inputBlock: string
) => {
  console.log("in")
  const textByWord = splitByWord(textBlock)
  const inputByWord = splitByWord(inputBlock)

  const currentWord = textByWord[wordIndex]
  const currentInputWord = inputByWord[wordIndex]

  const correct = "#8a8a8a"
  const incorrect = "#e63946"

  const result = currentWord.split("").map((character, characterIndex) => {
    if (
      wordIndex === inputByWord.length - 1 &&
      characterIndex === currentInputWord.length
    )
      return "current"
    if (
      wordIndex < inputByWord.length - 1 ||
      (wordIndex === inputByWord.length - 1 &&
        characterIndex < currentInputWord.length)
    ) {
      if (currentInputWord[characterIndex] === currentWord[characterIndex])
        return correct
      else return incorrect
    } else return ""
  })
  return result
}

export default getCharacterStyles
