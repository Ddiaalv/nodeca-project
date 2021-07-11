import { useEffect, useState } from 'react'
import Layout from '../src/components/Layout/Layout'
import { List } from '../src/components/Monsters/List/List'
import { Monster } from '../src/components/Monsters/List/List.types'
import { MonsterData } from '../src/components/Monsters/monsters.types'
import { getMonsters } from '../src/domain/service/monsters/getMonsters'
import { Browser, Container, FormSection } from '../src/styles/monsters'

const Monsters = () => {
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [data, setData] = useState<MonsterData>({
    monsters: [],
    isLoading: true,
  })

  useEffect(() => {
    console.log(monsters)
    getMonsters('http://192.168.0.16:3001/monsters').then((response) => {
      setMonsters(response)
      setData({ monsters: response, isLoading: false })
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
        <List data={data} />
      </Container>
    </Layout>
  )
}

export default Monsters
