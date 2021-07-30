import { FC } from 'react'
import { buildPathImage } from '../../../../utils/buildPathImage'
import { Icon, RowIconText } from '../../../styles/monsters'
import { DataFrameStyled } from './DataFrame.styles'
import DataFrameProps from './DataFrame.types'

export const DataFrame: FC<DataFrameProps> = ({ data, type }) => (
  <DataFrameStyled>
    {type.map(
      (endurance, index) =>
        data[endurance] !== '' && (
          <RowIconText key={index}>
            {data[endurance] !== 'N/D' && (
              <Icon
                src={buildPathImage(data[endurance])}
                alt={`icono del elemento ${data[endurance]}`}
              />
            )}
            {data[endurance]}
          </RowIconText>
        )
    )}
  </DataFrameStyled>
)

DataFrame.displayName = 'DataFrame'
