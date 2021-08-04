import { FC } from 'react'
import { PhysiologyStyled } from './Physiology.styles'
import PhysiologyProps from './Physiology.types'
import { Rathalos } from './Rathalos/Rathalos'

export const Physiology: FC<PhysiologyProps> = ({ monster, isWeak }) => {
  const isRathalosType =
    monster === 'Pukei-Pukei' ||
    monster === 'Pukei-Pukei Coralino' ||
    monster === 'Rathalos' ||
    monster === 'Rathalos Celeste' ||
    monster === 'Rathalos Plateado' ||
    monster === 'Rathian' ||
    monster === 'Rathian Rosa' ||
    monster === 'Rathian Dorada' ||
    monster === 'Bazelgeuse' ||
    monster === 'Bazelgeuse Magma' ||
    monster === 'Legiana' ||
    monster === 'Legiana aullador'

  return (
    <PhysiologyStyled>
      {isRathalosType && <Rathalos monster={monster} isWeak={isWeak} />}
    </PhysiologyStyled>
  )
}

Physiology.displayName = 'Physiology'
