import styled from "styled-components"

export const StatTable = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
`

export const Header = styled.h3`
  color: var(--Blue);
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`

export const Row = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  min-height: 3rem;

  &:not(:first-child) {
    &::after {
      content: "";
      position: absolute;
      background: var(--Blue);
      height: 1.5px;
      width: 100%;
    }
  }
`
export const Cell = styled.span`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  :first-child {
    font-weight: 800;
    font-size: 1.4rem;
  }

  /* width: 110%; */
`
