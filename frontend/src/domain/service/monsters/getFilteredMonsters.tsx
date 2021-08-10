import { useEffect, useState } from 'react'
import { MonsterMenu } from '../../../components/Monsters/List/List.types'
import { MonsterData } from '../../../components/Monsters/monsters.types'
import { applyMonsterFilters } from './filters'

export const getFilteredMonsters = (
  monsters: MonsterMenu[],
  userSearch: string,
  selectedSizes: string[],
  selectedSpecies: string[],
  selectedWeakness: string[]
) => {
  const [data, setData] = useState<MonsterData>({
    monsters: monsters,
    isLoading: false,
  })
  useEffect(() => {
    const filteredMonsters = applyMonsterFilters(
      monsters,
      userSearch,
      selectedSizes,
      selectedSpecies,
      selectedWeakness
    )
    setData({ ...data, monsters: filteredMonsters })
  }, [monsters, userSearch, selectedSizes, selectedSpecies, selectedWeakness])
  return { data }
}
