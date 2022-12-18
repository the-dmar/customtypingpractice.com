const getCurrentWord = (text: string, inputValue: string) => {
  const caretIndex = inputValue.length - 1
  const leadingSpaceIndex = text.split("").reduce((acc, letter, i) => {
    if (i <= caretIndex && letter === " ") return i + 1
    else return acc
  }, -1)

  const trailingSpaceIndex = text.indexOf(" ", caretIndex)

  const word = text.substring(leadingSpaceIndex, trailingSpaceIndex)

  return word.split(" ")[0]
}

export default getCurrentWord
