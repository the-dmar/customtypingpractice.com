import sentences from "../text/sentences"
import getRandomArrayItem from "../utils/getRandomArrayItem"

export default function Home() {
  return <p>{getRandomArrayItem(sentences)}</p>
}
