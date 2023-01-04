import Image from "next/image"
import {
  NavbarContainer,
  NavLink,
  NavLinkWrapper,
} from "../styles/Navbar.styled"
import logo from "../assets/logo.svg"
import Link from "next/link"

export default function Navbar() {
  return (
    <NavbarContainer>
      <Link href="/">
        <Image src={logo} alt="logo" height={40} />
      </Link>

      <NavLinkWrapper>
        <NavLink>
          <Link href="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link href="/">Feedback</Link>
        </NavLink>
        <NavLink>
          <Link href="/stats">Stats</Link>
        </NavLink>
      </NavLinkWrapper>
    </NavbarContainer>
  )
}
