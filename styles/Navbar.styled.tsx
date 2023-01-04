import styled from "styled-components"

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: var(--Blue);
`

export const NavLinkWrapper = styled.ul`
  display: flex;
  align-items: center;
`
export const NavLink = styled.li`
  list-style: none;
  margin-left: 4rem;
  font-size: 1.05vw;
  color: #575f66;
  font-weight: 600;
  display: flex;

  & > * {
    text-decoration: none;
    color: white;
  }

  &:first-child {
    margin-left: 0;
  }
`
