import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import TypingContextProvider from "../contexts/TypingContext"
import GlobalStyles from "../styles/Global.styled"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <TypingContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </TypingContextProvider>
    </Layout>
  )
}
