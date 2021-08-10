import { describe, expect, test } from '@jest/globals'
import { data } from '../../../lib/test/filters'
import {
  applyMonsterFilters,
  byName,
  bySize,
  bySpecies,
  byWeakness,
  selectedItems,
} from './filters'

describe('selectedItems:', () => {
  test('should add "agua" to array if it doesnt contain it:', () => {
    const elements = ['Fuego']
    expect(selectedItems('Agua', elements)).toEqual(['Fuego', 'Agua'])
  })
  test('should remove "Fuego" to array if contain it:', () => {
    const elements = ['Fuego']
    expect(selectedItems('Fuego', elements)).toEqual([])
  })
})

describe('Monster filters:', () => {
  describe('Individual filters:', () => {
    test('should return a monster matching the sear ch name:', () => {
      const monsterFiltered = data.monsters.filter(byName('Jag'))
      expect(monsterFiltered).toEqual(data.result)
    })
    test('should return a monster that matches the specie:', () => {
      const monsterFiltered = data.monsters.filter(bySpecies(['Colmillos']))
      expect(monsterFiltered).toEqual(data.result)
    })
    test('should return a monster that matches the weakness:', () => {
      const monsterFiltered = data.monsters.filter(byWeakness(['Rayo']))
      expect(monsterFiltered).toEqual(data.result)
    })
    test('should return all small monsters:', () => {
      const filteredMonsters = data.monsters.filter(bySize(['Pequeño']))
      expect(filteredMonsters).toEqual(data.monsters)
    })
  })

  describe('Apply multiple monsters filters:', () => {
    test('should return a monster applying a filter:', () => {
      const filteredMonsters = applyMonsterFilters(
        data.monsters,
        'Jag',
        [],
        [],
        []
      )
      expect(filteredMonsters).toEqual(data.result)
    })
    test('should return a monster applying two filters:', () => {
      const filteredMonsters = applyMonsterFilters(
        data.monsters,
        'Jagr',
        [],
        [],
        ['Fuego']
      )
      expect(filteredMonsters).toEqual(data.result)
    })
    test('should return a monster applying three filters:', () => {
      const filteredMonsters = applyMonsterFilters(
        data.monsters,
        'Jag',
        [],
        ['Colmillos'],
        ['Rayo']
      )
      expect(filteredMonsters).toEqual(data.result)
    })
    test('should return a monster applying all filters:', () => {
      const filteredMonsters = applyMonsterFilters(
        data.monsters,
        'Jag',
        ['Pequeño'],
        ['Colmillos'],
        ['Rayo']
      )
      expect(filteredMonsters).toEqual(data.result)
    })
  })
})
