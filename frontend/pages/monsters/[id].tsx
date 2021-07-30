import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { Monster } from '../../src/components/Monsters/List/List.types'
import { getMonsters } from '../../src/domain/service/monsters/getMonsters'
import { defaultMonster } from '../../src/lib/default/monster'
import {
  Article,
  Icon,
  Information,
  Physiology,
  Quote,
  Row,
  RowIconText,
  Table,
  Weakness,
} from '../../src/styles/monsters'
import { getUrlEnv } from '../../utils/urlEnv'
import Monsters from '../monsters'

const MonsterPage = () => {
  const [monster, setMonster] = useState<Monster>(defaultMonster)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()
  const { id } = router.query

  const elementos = ['elemento01', 'elemento02']
  const resistencias = ['resistencia01', 'resistencia02', 'resistencia03']
  const estados = ['estado01', 'estado02', 'estado03']
  const elements = ['fuego', 'agua', 'rayo', 'hielo', 'draco']
  const states = ['veneno', 'sueno', 'paralisis', 'nitro', 'aturdimiento']

  useEffect(() => {
    setIsLoading(true)
    if (id !== undefined) {
      const urlMonster = `${getUrlEnv()}/monsters/${id}`
      getMonsters(urlMonster).then((response) => {
        setMonster(response)
        setIsLoading(false)
      })
    }
  }, [router])

  const buildPathImage = (name: string) => {
    let tempName = ''
    const elements = [
      'fuego',
      'agua',
      'rayo',
      'hielo',
      'draco',
      'veneno',
      'aturdimiento',
      'sueño',
      'parálisis',
      'nitro',
      'sangrado',
      'defensa',
      'sueno',
      'paralisis',
    ]

    elements.forEach((element) => {
      if (name.toLowerCase().includes(element)) {
        tempName = element
        if (name === 'sueno') {
          tempName = 'sueño'
        }
        if (name === 'paralisis') {
          tempName = 'parálisis'
        }
      }
    })
    return `/img/icons/${tempName}.png`
  }

  const buildStars = (stars: number) => {
    const starsComponents = []
    if (stars === 0) {
      starsComponents.push(<Icon key={1} src={`/img/icons/cross.png`} alt="" />)
    }
    for (let index = 0; index < stars; index++) {
      starsComponents.push(
        <Icon key={index} src={`/img/icons/star.png`} alt="" />
      )
    }
    return starsComponents
  }

  return (
    <Monsters>
      {isLoading && <p>Cargando...</p>}
      <Article>
        <h2>Ecología</h2>
        <p>
          Descubre toda la información descubierta hasta ahora sobre la
          ecología.
        </p>
        <Information>
          <img
            src={`/img/monsters/icon${monster.ruta}.png`}
            alt={`Icono del monstruo ${monster.ruta}`}
          />
          <h4>{monster.nombre}</h4>
          <p>Tamaño: {monster.tipo}</p>
          <p>Especie: {monster.especie}</p>
        </Information>
        <h3>Características</h3>
        <p>{monster.caracteristicas}</p>
        <h3>Notas</h3>
        <p>{monster.notas}</p>
        <h3>Coronas:</h3>
        <div>
          <RowIconText>
            <Icon
              src={`/img/icons/big-crown.png`}
              alt="Icono de una corona dorada"
            />
            Pequeña: {monster.tamano_min}
          </RowIconText>
          <RowIconText>
            <Icon
              src={`/img/icons/big-crown.png`}
              alt="Icono de una corona dorada"
            />
            Grande: {monster.tamano_max}
          </RowIconText>
        </div>
        <h3>Habitat</h3>
        <div>
          {monster.habitats.map((habitat: string, index) => (
            <RowIconText key={index}>
              {habitat !== 'Desconocida' && (
                <Icon
                  src={`/img/icons/${habitat
                    .split(' ')
                    .join('-')
                    .toLowerCase()}.png`}
                  alt={`icono del habitat ${habitat}`}
                />
              )}
              {habitat}
            </RowIconText>
          ))}
        </div>
        <h3>Elemento</h3>
        <div>
          {elementos.map(
            (element: string, index) =>
              monster[element] !== '' && (
                <RowIconText key={index}>
                  {monster[element] !== 'N/D' && (
                    <Icon
                      src={buildPathImage(monster[element])}
                      alt={`icono del elemento ${monster[element]}`}
                    />
                  )}
                  {monster[element]}
                </RowIconText>
              )
          )}
        </div>
        <h3>Resistencias</h3>
        <div>
          {resistencias.map(
            (resistencia, index) =>
              monster[resistencia] !== '' && (
                <RowIconText key={index}>
                  {monster[resistencia] !== 'N/D' && (
                    <Icon
                      src={buildPathImage(monster[resistencia])}
                      alt={`icono del elemento ${monster[resistencia]}`}
                    />
                  )}
                  {monster[resistencia]}
                </RowIconText>
              )
          )}
        </div>
        <h3>Estados</h3>
        <div>
          {estados.map(
            (estado, index) =>
              monster[estado] !== '' && (
                <RowIconText key={index}>
                  {monster[estado] !== 'N/D' && (
                    <Icon
                      src={buildPathImage(monster[estado])}
                      alt={`icono del elemento ${monster[estado]}`}
                    />
                  )}
                  {monster[estado]}
                </RowIconText>
              )
          )}
        </div>
      </Article>
      <Article>
        <h2>Fisiología</h2>
        <p>Descripcion de la fisiología.</p>
        <Physiology src={`/img/monsters/physiology/physRathalos.jpg`} alt="" />
        <Quote>
          Recuerda que puedes hacer click sobre las zonas rojas del monstruo
          para descubrir las debilidades del monstruo más a fondo.
        </Quote>
        <Weakness>
          <Table>
            <thead>
              <tr>
                <th>Elementos:</th>
              </tr>
            </thead>
            <tbody>
              {elements.map((element, index) => (
                <Row key={index}>
                  <td>
                    <Icon
                      src={buildPathImage(element)}
                      alt={`Icono de ${element}`}
                    />
                  </td>
                  <td>{buildStars(monster[element]).map((star) => star)}</td>
                </Row>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <th>Estados:</th>
              </tr>
            </thead>
            <tbody>
              {states.map((state, index) => (
                <Row key={index}>
                  <td>
                    <Icon
                      src={buildPathImage(state)}
                      alt={`Icono de ${state}`}
                    />
                  </td>
                  <td>{buildStars(monster[state]).map((star) => star)}</td>
                </Row>
              ))}
            </tbody>
          </Table>
        </Weakness>
      </Article>
    </Monsters>
  )
}

export default MonsterPage
