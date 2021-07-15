export interface Monsters {
  idMonstruo: number
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

export type MonsterProps = [
  {
    idMonstruo: number
    ordenMenu: number
    nombre: string
    ruta: string
    especie: string
    tipo: string
    rango: string
    caracteristicas: string
    notas: string
    tamanoMin: number
    tamanoMax: number
    fuego: number
    agua: number
    rayo: number
    hielo: number
    draco: number
    veneno: number
    sueno: number
    paralisis: number
    nitro: number
    aturdimiento: number
    elemento01: string
    elemento02?: string
    resistencia01: string
    resistencia02?: string
    resistencia03?: string
    estado01: string
    estado02?: string
    estado03?: string
  }
]
