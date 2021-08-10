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

export const bySize = (types: string[]) => (monster: any) => {
  for (const type of types) {
    const match = monster.tipo.toLowerCase().includes(type.toLowerCase())
    if (match) return monster
  }
}

export const applyMonsterFilters = (
  monsters: MonsterMenu[],
  search: string,
  sizes: string[],
  species: string[],
  weakness: string[]
) => {
  let filteredMonsters = monsters
  const searchIsNotEmpty = search.length > 0
  const sizesIsNotEmpty = sizes.length > 0
  const speciesIsNotEmpty = species.length > 0
  const weaknessIsNotEmpty = weakness.length > 0

  const searchSpecies = searchIsNotEmpty && speciesIsNotEmpty
  const searchWeakness = searchIsNotEmpty && weaknessIsNotEmpty
  const searchTypes = searchIsNotEmpty && sizesIsNotEmpty
  const sizeSpecies = sizesIsNotEmpty && speciesIsNotEmpty
  const sizeWeakness = sizesIsNotEmpty && weaknessIsNotEmpty
  const speciesWeakness = speciesIsNotEmpty && weaknessIsNotEmpty

  const searchSizesSpecies =
    searchIsNotEmpty && sizesIsNotEmpty && speciesIsNotEmpty
  const searchSizeWeakness =
    searchIsNotEmpty && sizesIsNotEmpty && weaknessIsNotEmpty
  const searchSpeciesWeakness =
    searchIsNotEmpty && speciesIsNotEmpty && weaknessIsNotEmpty
  const sizeSpeciesWeakness =
    sizesIsNotEmpty && speciesIsNotEmpty && weaknessIsNotEmpty

  const allFilters =
    searchIsNotEmpty &&
    sizesIsNotEmpty &&
    speciesIsNotEmpty &&
    weaknessIsNotEmpty

  if (searchIsNotEmpty) filteredMonsters = monsters.filter(byName(search))
  if (sizesIsNotEmpty) filteredMonsters = monsters.filter(bySize(sizes))
  if (speciesIsNotEmpty) filteredMonsters = monsters.filter(bySpecies(species))
  if (weaknessIsNotEmpty)
    filteredMonsters = monsters.filter(byWeakness(weakness))

  if (searchTypes)
    filteredMonsters = monsters.filter(bySize(sizes)).filter(byName(search))
  if (searchSpecies)
    filteredMonsters = monsters
      .filter(byName(search))
      .filter(bySpecies(species))
  if (searchWeakness)
    filteredMonsters = monsters
      .filter(byName(search))
      .filter(byWeakness(weakness))
  if (sizeWeakness)
    filteredMonsters = monsters
      .filter(bySize(sizes))
      .filter(byWeakness(weakness))
  if (sizeSpecies)
    filteredMonsters = monsters.filter(bySize(sizes)).filter(bySpecies(species))
  if (speciesWeakness)
    filteredMonsters = monsters
      .filter(bySpecies(species))
      .filter(byWeakness(weakness))

  if (searchSizesSpecies)
    filteredMonsters = monsters
      .filter(byName(search))
      .filter(bySize(sizes))
      .filter(bySpecies(species))
  if (searchSizeWeakness)
    filteredMonsters = monsters
      .filter(byName(search))
      .filter(bySize(sizes))
      .filter(byWeakness(weakness))
  if (searchSpeciesWeakness)
    filteredMonsters = monsters
      .filter(byName(search))
      .filter(bySpecies(species))
      .filter(byWeakness(weakness))
  if (sizeSpeciesWeakness)
    filteredMonsters = monsters
      .filter(bySize(sizes))
      .filter(bySpecies(species))
      .filter(byWeakness(weakness))

  if (allFilters)
    filteredMonsters = monsters
      .filter(byName(search))
      .filter(bySpecies(species))
      .filter(byWeakness(weakness))
  return filteredMonsters
}
