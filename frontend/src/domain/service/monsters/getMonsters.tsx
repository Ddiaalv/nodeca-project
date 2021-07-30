import { useEffect, useState } from 'react'
import { getUrlEnv } from '../../../../utils/urlEnv'
import { MonsterMenu } from '../../../components/Monsters/List/List.types'

export const getMonsters = () => {
  const [monsters, setMonsters] = useState<MonsterMenu[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const url = `${getUrlEnv()}/monsters`
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setMonsters(response)
        setIsLoading(false)
      })
  }, [])
  return { monsters, isLoading }
}
