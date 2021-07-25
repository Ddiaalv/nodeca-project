import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { Monster } from '../../src/components/Monsters/List/List.types'
import { getMonsters } from '../../src/domain/service/monsters/getMonsters'
import { getUrlEnv } from '../../utils/urlEnv'
import Monsters from '../monsters'

const defaultMonster: Monster = {
  orden_menu: 34,
  nombre: 'Rathalos',
  ruta: 'Rathalos',
  especie: 'Wyvern volador',
  tipo: 'Grande',
  rango: 'BAM',
  caracteristicas:
    'El mayor depredador del Bosque Primigenio, también conocido como “rey de los cielos”. Un terrible monstruo que ataca a todo invasor con garras venenosas y aliento de fuego.',
  notas:
    'Los Rathalos prefieren mantenerse en las alturas para lanzar un sinfín de ataques, pero puedes hacer que se estrellen con una bomba de luz bien lanzada con la eslinga. También puedes herirles en las alas, debilitándoles en el momento de alzar el vuelo.',
  tamano_min: 1499.71,
  tamano_max: 2130.28,
  fuego: 0,
  agua: 1,
  rayo: 2,
  hielo: 1,
  draco: 3,
  veneno: 1,
  sueno: 2,
  paralisis: 2,
  nitro: 1,
  aturdimiento: 2,
  elemento01: 'Fuego',
  elemento02: '',
  resistencia01: 'Fuego',
  resistencia02: '',
  resistencia03: '',
  estado01: 'Plaga de fuego',
  estado02: 'Veneno',
  estado03: 'Aturdimiento',
}

const AboutPage = () => {
  const [monster, setMonster] = useState<Monster>(defaultMonster)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const url = `${getUrlEnv()}/monsters/${id}`
    getMonsters(url).then((response) => {
      setMonster(response)
      setIsLoading(false)
    })
  }, [router])

  return (
    <Monsters>
      ID: {id}
      <br></br>
      {isLoading && <p>Cargando...</p>}
      <br></br>
      Datos: {monster.nombre}
    </Monsters>
  )
}

export default AboutPage
