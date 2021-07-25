import { FC, useEffect, useState } from 'react'
import Layout from '../src/components/Layout/Layout'
import { List } from '../src/components/Monsters/List/List'
import { MonsterMenu } from '../src/components/Monsters/List/List.types'
import { MonsterData } from '../src/components/Monsters/monsters.types'
import {
  applyMonsterFilters,
  selectedItems,
} from '../src/domain/service/monsters/filters'
import { getMonsters } from '../src/domain/service/monsters/getMonsters'
import { elements } from '../src/lib/elements'
import { species } from '../src/lib/species'
import { Browser, Container, FormSection } from '../src/styles/monsters'
import { getUrlEnv } from '../utils/urlEnv'

const Monsters: FC = ({ children }) => {
  const [monsters, setMonsters] = useState<MonsterMenu[]>([])
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([])
  const [selectedWeakness, setSelectedWeakness] = useState<string[]>([])
  const [userSearch, setUserSearch] = useState<string>('')
  const [data, setData] = useState<MonsterData>({
    monsters: [],
    isLoading: true,
  })

  useEffect(() => {
    const url = `${getUrlEnv()}/monsters`
    getMonsters(url).then((response) => {
      setMonsters(response)
      setData({ monsters: response, isLoading: false })
    })
  }, [])

  useEffect(() => {
    const filteredMonsters = applyMonsterFilters(
      monsters,
      userSearch,
      selectedSpecies,
      selectedWeakness
    )
    setData({ ...data, monsters: filteredMonsters })
  }, [userSearch, selectedSpecies, selectedWeakness])

  return (
    <Layout title="Monsters - David Díaz Alvarez">
      <Container>
        <Browser>
          <FormSection>
            <legend>Buscar:</legend>
            <label htmlFor="searchByName">
              <input
                onChange={(value) => setUserSearch(value.target.value)}
                type="text"
                name="searchByName"
                placeholder="Rathalos"
              />
            </label>
          </FormSection>
          <FormSection>
            <legend>Tipo:</legend>
            {species.map((specie, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={specie}
                  onClick={(value) =>
                    setSelectedSpecies(
                      selectedItems(value.currentTarget.value, selectedSpecies)
                    )
                  }
                />
                {specie}
              </label>
            ))}
          </FormSection>
          <FormSection>
            <legend>Débil a:</legend>
            {elements.map((element, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name={element}
                  value={element}
                  onClick={(value) =>
                    setSelectedWeakness(
                      selectedItems(value.currentTarget.value, selectedWeakness)
                    )
                  }
                />
                {element}
              </label>
            ))}
          </FormSection>
        </Browser>
        <List data={data} />
      </Container>
      {children}
    </Layout>
  )
}

export default Monsters
