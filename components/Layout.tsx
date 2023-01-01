import { Children } from "../contexts/TypingContext"
import { LayoutContainer } from "../styles/Layout.styled"
import Navbar from "./Navbar"

export default function Layout({ children }: Children) {
  return (
    <>
      <Navbar />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  )
}
