import { FC, useState } from 'react'
import Layout from '../src/components/Layout/Layout'
import { List } from '../src/components/Monsters/List/List'
import { selectedItems } from '../src/domain/service/monsters/filters'
import { getFilteredMonsters } from '../src/domain/service/monsters/getFilteredMonsters'
import { getMonsters } from '../src/domain/service/monsters/getMonsters'
import { elements, species } from '../src/lib/render'
import { Browser, Container, FormSection } from '../src/styles/monsters'

const Monsters: FC = ({ children }) => {
  const { monsters } = getMonsters()
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([])
  const [selectedWeakness, setSelectedWeakness] = useState<string[]>([])
  const [userSearch, setUserSearch] = useState<string>('')
  const { data } = getFilteredMonsters(
    monsters,
    userSearch,
    selectedSpecies,
    selectedWeakness
  )

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
