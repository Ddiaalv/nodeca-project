import { FC } from 'react'
import { buildPathImage } from '../../../../utils/buildPathImage'
import { elements, states } from '../../../lib/render'
import { Icon } from '../../../styles/monsters'
import { buildStars } from '../buildStars'
import { Row, Table } from './TableWeak.styles'
import TableWeakProps from './TableWeak.types'

export const TableWeak: FC<TableWeakProps> = ({ title, data }) => {
  let weakness = []
  if (title === 'Elementos') {
    weakness = elements
  } else {
    weakness = states
  }
  return (
    <Table>
      <thead>
        <tr>
          <th>{title}:</th>
        </tr>
      </thead>
      <tbody>
        {weakness.map((value, index) => (
          <Row key={index}>
            <td>
              <Icon src={buildPathImage(value)} alt={`Icono de ${value}`} />
            </td>
            <td>{buildStars(data[value.toLowerCase()]).map((star) => star)}</td>
          </Row>
        ))}
      </tbody>
    </Table>
  )
}

TableWeak.displayName = 'TableWeak'
