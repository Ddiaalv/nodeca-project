import { MonsterData } from '../monsters.types'

export interface Monster {
  ordenMenu: number
  nombre: string
  ruta: string
  tipo: string
  especie: string
  fuego: number
  agua: number
  rayo: number
  hielo: number
  draco: number
}

export default interface ListProps {
  data: MonsterData
}
