import { FC } from 'react'
import { Barroth } from './Barroth/Barroth'
import { Jagras } from './Jagras/Jagras'
import { PhysiologyStyled } from './Physiology.styles'
import PhysiologyProps from './Physiology.types'
import { Rathalos } from './Rathalos/Rathalos'
import { Teostra } from './Teostra/Teostra'

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
  const isBarrothType =
    monster === 'Barroth' ||
    monster === 'Anjanath' ||
    monster === 'Anjanath Fulgúreo' ||
    monster === 'Deviljho' ||
    monster === 'Deviljho Salvaje' ||
    monster === 'Uragaan'
  const isJagrasType = monster === 'Gran Jagras' || monster === 'Dodogama'
  const isTeostraType =
    monster === 'Teostra' ||
    monster === 'Lunastra' ||
    monster === 'Kushala-Daora' ||
    monster === 'Namielle'
  return (
    <PhysiologyStyled>
      {isRathalosType && <Rathalos monster={monster} isWeak={isWeak} />}
      {isBarrothType && <Barroth monster={monster} isWeak={isWeak} />}
      {isJagrasType && <Jagras monster={monster} isWeak={isWeak} />}
      {isTeostraType && <Teostra monster={monster} isWeak={isWeak} />}
    </PhysiologyStyled>
  )
}

Physiology.displayName = 'Physiology'
