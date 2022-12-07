import useGuidedText from "../hooks/useTypingText"

export default function Home() {
  const [text, newText, input, handleInput] = useGuidedText()

  return (
    <>
      <button onClick={newText}>Get New</button>
      <p>{text}</p>
      <input value={input} onChange={e => handleInput(e.target.value)} />
    </>
  )
}
