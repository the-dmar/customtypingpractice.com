import Image from "next/image"
import Link from "next/link"
import logo from "../assets/logo.svg"
import {
  NavbarContainer,
  NavLink,
  NavLinkWrapper,
} from "../styles/Navbar.styled"

export default function Navbar() {
  return (
    <NavbarContainer>
      <Link href="/">
        <NavLink>
          <Image src={logo} alt="logo" height={30} />
        </NavLink>
      </Link>
      <NavLinkWrapper>
        <NavLink>
          <Link href="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link href="/stats">Stats</Link>
        </NavLink>
      </NavLinkWrapper>
    </NavbarContainer>
  )
}
