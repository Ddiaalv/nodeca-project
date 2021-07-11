import { FC } from 'react'
import { HeaderImg, HeaderStyled, Title } from './Header.styles'

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <Title>Monstruos</Title>
      <HeaderImg src="/img/monster-header.jpg" alt="" />
    </HeaderStyled>
  )
}

Header.displayName = 'Header'
