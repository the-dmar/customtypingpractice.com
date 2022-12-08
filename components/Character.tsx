interface CharacterProps {
  character: string
  characterIndex: number
}

export default function Character({
  character,
  characterIndex,
}: CharacterProps) {
  return <div>{character}</div>
}
