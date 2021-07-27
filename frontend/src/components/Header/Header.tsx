import { useRouter } from 'next/dist/client/router'
import { FC } from 'react'
import { HeaderImg, HeaderStyled, Title } from './Header.styles'

export const Header: FC = () => {
  const url = useRouter()
  return (
    <HeaderStyled>
      {url.pathname !== '/' && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title>Monstruos</Title>
          <HeaderImg src="/img/monster-header.jpg" alt="" />
        </div>
      )}
    </HeaderStyled>
  )
}

Header.displayName = 'Header'
