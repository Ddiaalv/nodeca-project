import { Request, Response } from 'express'
import { mysqlConnection } from '../database/database'
import { MysqlError } from 'mysql'
import { MonsterProps, Monsters } from '../models/monsters.model'
import { monstersQuery } from '../database/queries/monsters.query'

export const getAllMonsters = (req: Request, res: Response) => {
  mysqlConnection.query(
    monstersQuery,
    (error: MysqlError | null, monsters: Monsters[]) => {
      if (error) {
        res.status(404).end()
      } else {
        const monstersHasNoContent = monsters !== undefined
        if (monstersHasNoContent) {
          res.json(monsters)
        } else {
          res.status(204).end()
        }
      }
    }
  )
}

export const getMonster = (req: Request, res: Response) => {
  const monsterQuery =
    'SELECT orden_menu, nombre, ruta, especie, tipo, rango, caracteristicas, notas, tamano_min, tamano_max, fuego, agua, rayo, hielo, draco, veneno, sueno, paralisis, nitro, aturdimiento, elemento01, elemento02, resistencia01, resistencia02, resistencia03, estado01, estado02, estado03  FROM monstruo WHERE ruta = ?'
  const habitatQuery =
    'SELECT h.habitat FROM monstruo AS m INNER JOIN monstruo_habitat AS mh ON m.id_monstruo = mh.id_monstruo INNER JOIN habitat AS h ON h.id_habitat = mh.id_habitat WHERE m.ruta = ?'
  const monsterId = req.params.id

  mysqlConnection.query(
    monsterQuery,
    [monsterId],
    (error: MysqlError | null, monster: MonsterProps) => {
      if (!error) {
        if (monster[0] !== undefined) {
          mysqlConnection.query(
            habitatQuery,
            [monsterId],
            (error: MysqlError | null, habitat) => {
              if (!error) {
                if (habitat.length > 0) {
                  const habitats = habitat.map((hab: any) => hab.habitat)
                  const monsterTemp = { ...monster[0], habitats }
                  res.send(monsterTemp)
                } else {
                  res.sendStatus(400)
                }
              } else {
                res.sendStatus(500)
              }
            }
          )
        } else {
          res.sendStatus(400)
        }
      } else {
        res.sendStatus(500)
      }
    }
  )
}

export const getMonsterHabitat = (req: Request, res: Response) => {
  const habitatQuery =
    'SELECT h.habitat FROM monstruo AS m INNER JOIN monstruo_habitat AS mh ON m.id_monstruo = mh.id_monstruo INNER JOIN habitat AS h ON h.id_habitat = mh.id_habitat WHERE m.ruta = ?'
  const monsterId = req.params.id
  mysqlConnection.query(
    habitatQuery,
    [monsterId],
    (error: MysqlError | null, habitat) => {
      if (!error) {
        if (habitat.length > 0) {
          const habitats = habitat.map((hab: any) => hab.habitat)
          res.send(habitats)
        } else {
          res.sendStatus(400)
        }
      } else {
        res.sendStatus(500)
      }
    }
  )
}
