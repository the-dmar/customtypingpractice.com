import styled from "styled-components"

interface ButtonProps {
  color: string
  background: string
}

export const Button = styled.button<ButtonProps>`
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 0.3rem 1rem;
  cursor: pointer;
  font-size: 1vw;
  font-weight: 700;
`
