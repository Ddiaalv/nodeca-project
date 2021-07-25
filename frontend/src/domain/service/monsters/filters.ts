import { MonsterMenu } from '../../../components/Monsters/List/List.types'

export const selectedItems = (value: string, elements: string[]) => {
  const tempElements = elements
  const valueIsNotInElements = !tempElements.includes(value)
  if (valueIsNotInElements) return tempElements.concat(value)
  else return tempElements.filter((element) => element !== value)
}

export const byName = (name: string) => (monster: MonsterMenu) =>
  monster.nombre.toLowerCase().includes(name.toLowerCase().trim())

export const bySpecies = (species: string[]) => (monster: MonsterMenu) => {
  const tempSpecies = species.map((specie) => specie.toLowerCase())
  const specieSplitted = monster.especie.split(' ')
  const specie = specieSplitted[specieSplitted.length - 1]
  return tempSpecies.includes(specie.toLowerCase())
}

export const byWeakness = (elements: string[]) => (monster: any) => {
  for (const element of elements) {
    const isWeak = monster[element.toLowerCase()] >= 2
    if (isWeak) return monster
  }
}

export const applyMonsterFilters = (
  monsters: MonsterMenu[],
  search: string,
  species: string[],
  weakness: string[]
) => {
  let filteredMonsters = monsters
  const searchIsNotEmpty = search.length > 0
  const speciesIsNotEmpty = species.length > 0
  const weaknessIsNotEmpty = weakness.length > 0
  const allFilters =
    search.length > 0 && species.length > 0 && weakness.length > 0
  const searchSpecies = search.length > 0 && species.length > 0
  const searchWeakness = search.length > 0 && weakness.length > 0
  const speciesWeakness = species.length > 0 && weakness.length > 0

  if (searchIsNotEmpty) filteredMonsters = monsters.filter(byName(search))
  if (speciesIsNotEmpty) filteredMonsters = monsters.filter(bySpecies(species))
  if (weaknessIsNotEmpty)
    filteredMonsters = monsters.filter(byWeakness(weakness))
  if (searchSpecies)
    filteredMonsters = monsters
      .filter(byName(search))
      .filter(bySpecies(species))
  if (searchWeakness)
    filteredMonsters = monsters
      .filter(byName(search))
      .filter(byWeakness(weakness))
  if (speciesWeakness)
    filteredMonsters = monsters
      .filter(bySpecies(species))
      .filter(byWeakness(weakness))
  if (allFilters)
    filteredMonsters = monsters
      .filter(byName(search))
      .filter(bySpecies(species))
      .filter(byWeakness(weakness))
  return filteredMonsters
}
