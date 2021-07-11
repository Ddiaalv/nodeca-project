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
          <Icon key={index}>
            <img
              className={'monster-icon'}
              src={`/img/monsters/icon${monster.ruta}.png`}
              alt={`icono del monstruo ${monster.nombre}`}
            />
          </Icon>
        ))
      ) : (
        <p>No se han encontrado resultados</p>
      )}
    </ListStyled>
  )
}

List.displayName = 'List'