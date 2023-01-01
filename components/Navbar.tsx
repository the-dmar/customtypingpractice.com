import Image from "next/image"
import {
  NavbarContainer,
  NavLink,
  NavLinkWrapper,
} from "../styles/Navbar.styled"
import logo from "../assets/logo.svg"

export default function Navbar() {
  return (
    <NavbarContainer>
      <Image src={logo} alt="logo" height={45} />
      <NavLinkWrapper>
        <NavLink>Home</NavLink>
        <NavLink>Feedback</NavLink>
        <NavLink>Typing Stats</NavLink>
      </NavLinkWrapper>
    </NavbarContainer>
  )
}
