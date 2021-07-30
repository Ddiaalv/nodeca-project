import { NextRouter } from 'next/dist/next-server/lib/router/router'
import { useEffect, useState } from 'react'
import { getUrlEnv } from '../../../../utils/urlEnv'
import { Monster } from '../../../components/Monsters/List/List.types'
import { defaultMonster } from '../../../lib/default/monster'

export const getMonster = (id: string | string[], router: NextRouter) => {
  const [monster, setMonster] = useState<Monster>(defaultMonster)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    if (id !== undefined) {
      const urlMonster = `${getUrlEnv()}/monsters/${id}`
      fetch(urlMonster)
        .then((response) => response.json())
        .then((response) => {
          setMonster(response)
          setIsLoading(false)
        })
    }
  }, [router])

  return { monster, isLoading }
}
