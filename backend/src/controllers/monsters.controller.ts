import { Request, Response } from 'express'
import { mysqlConnection } from '../database/database'
import { MysqlError } from 'mysql'
import { Monsters } from '../models/monsters.model'
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
