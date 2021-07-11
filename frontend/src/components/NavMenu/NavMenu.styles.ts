import styled from '@emotion/styled'
import { styleGuide } from '../../../utils/styleGuide'
import { SeparatorProps } from './NavMenu.types'

export const NavMenuStyled = styled.nav`
  position: absolute;
  top: -28px;
  width: 90%;
  display: grid;
  justify-content: end;
  align-items: end;
  grid-template-columns: repeat(2, auto);
  @media (min-width: ${styleGuide.device.md}) {
    top: -15px;
  }
`

export const Separator = styled.a<SeparatorProps>`
  background: ${({ background }) => background};
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
`
