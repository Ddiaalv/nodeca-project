import styled from '@emotion/styled'
import { SeparatorProps } from './NavMenu.types'

export const NavMenuStyled = styled.nav`
  position: absolute;
  top: -19px;
  width: 95%;
  display: grid;
  justify-content: end;
  align-items: end;
  grid-template-columns: repeat(2, auto);
`

export const Separator = styled.a<SeparatorProps>`
  background: ${({ background }) => background};
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
`
