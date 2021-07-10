import Link from 'next/link'
import { FC } from 'react'
import { routes } from '../../../utils/routes/routes'
import { setColor } from './domain/NavMenu'
import { NavMenuStyled, Separator } from './NavMenu.styles'
import NavMenuProps from './NavMenu.types'

export const NavMenu: FC<NavMenuProps> = () => (
  <NavMenuStyled>
    {Object.keys(routes).map((key: string, index) => (
      <Link href={routes[key].href} key={index}>
        <Separator background={setColor(routes[key].name)}>
          {routes[key].name}
        </Separator>
      </Link>
    ))}
  </NavMenuStyled>
)

NavMenu.displayName = 'NavMenu'
