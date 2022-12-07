import type { AppProps } from "next/app"
import TypingContextProvider from "../contexts/TypingContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TypingContextProvider>
      <Component {...pageProps} />
    </TypingContextProvider>
  )
}
