import express from 'express'
import * as MonsterController from '../controllers/monsters.controller'

const router = express.Router()
router.get('/monsters/:id/habitat', MonsterController.getMonsterHabitat)
router.get('/monsters/:id', MonsterController.getMonster)
router.get('/monsters', MonsterController.getAllMonsters)

export default router
