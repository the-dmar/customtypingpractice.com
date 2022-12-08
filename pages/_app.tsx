import type { AppProps } from "next/app"
import TypingContextProvider from "../contexts/TypingContext"
import GlobalStyles from "../styles/Global.styled"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TypingContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </TypingContextProvider>
  )
}
