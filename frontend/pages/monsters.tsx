import { useEffect, useState } from 'react'
import Layout from '../src/components/Layout/Layout'
import {
  Browser,
  Container,
  FormSection,
  Icon,
  List,
} from '../src/styles/monsters'

const Monsters = () => {
  const [monsters, setMonsters] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getMonsters = async (url: string) => {
    const response = await fetch(url)
    return await response.json()
  }

  useEffect(() => {
    getMonsters('http://192.168.0.16:3001/monsters').then((response) => {
      setMonsters(response)
      setIsLoading(false)
    })
  }, [])

  return (
    <Layout title="Monsters - David Díaz Alvarez">
      <Container>
        <Browser>
          <FormSection>
            <legend>Buscar:</legend>
            <label htmlFor="searchByName">
              <input type="text" name="searchByName" placeholder="Rathalos" />
            </label>
          </FormSection>
          <FormSection>
            <legend>Tipo:</legend>
            <label>
              <input type="checkbox" value="Pequeño" />
              Nadador
            </label>
            <label>
              <input type="checkbox" value="Grande" />
              Brutal
            </label>
            <label>
              <input type="checkbox" value="Grande" />
              Colmillos
            </label>
            <label>
              <input type="checkbox" value="Grande" />
              Pájaro
            </label>
            <label>
              <input type="checkbox" value="Grande" />
              Volador
            </label>
            <label>
              <input type="checkbox" value="Grande" />
              Anciano
            </label>
            <label>
              <input type="checkbox" value="Grande" />
              Relicto
            </label>
            <label>
              <input type="checkbox" value="Grande" />
              Bestia
            </label>
          </FormSection>
          <FormSection>
            <legend>Débil a:</legend>
            <label>
              <input type="checkbox" value="Pequeño" />
              Fuego
            </label>
            <label>
              <input type="checkbox" value="Pequeño" />
              Agua
            </label>
            <label>
              <input type="checkbox" value="Pequeño" />
              Rayo
            </label>
            <label>
              <input type="checkbox" value="Pequeño" />
              Hielo
            </label>
            <label>
              <input type="checkbox" value="Pequeño" />
              Draco
            </label>
          </FormSection>
        </Browser>
        <List>
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
        </List>
      </Container>
    </Layout>
  )
}

export default Monsters
