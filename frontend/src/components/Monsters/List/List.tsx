import Link from 'next/link'
import { FC } from 'react'
import { Icon, ListStyled } from './List.styles'
import ListProps from './List.types'

export const List: FC<ListProps> = ({ data }) => {
  const { monsters, isLoading } = data
  return (
    <ListStyled>
      {isLoading ? (
        <p>Cargando...</p>
      ) : monsters.length > 0 ? (
        monsters.map((monster, index) => (
          <Link href={`/monsters/${monster.ruta}`} key={index}>
            <Icon>
              <img
                className={'monster-icon'}
                src={`/img/monsters/icons/${monster.ruta.toLowerCase()}.webp`}
                alt={`icono del monstruo ${monster.nombre}`}
              />
            </Icon>
          </Link>
        ))
      ) : (
        <p>No se han encontrado resultados</p>
      )}
    </ListStyled>
  )
}

List.displayName = 'List'
