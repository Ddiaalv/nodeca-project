import Link from 'next/link'
import { FC } from 'react'
import { HeaderStyled, NavBar } from './Header.styles'
import { routes } from '../../../utils/routes/routes'

export const Header: FC = () => (
  <HeaderStyled>
    <NavBar>
      <Link href={routes.home.href}>
        <a>{routes.home.name}</a>
      </Link>
      |
      <Link href={routes.about.href}>
        <a>{routes.about.name}</a>
      </Link>
    </NavBar>
  </HeaderStyled>
)

Header.displayName = 'Header'
