import express from 'express'
import * as MonsterController from '../controllers/monsters.controller'

const router = express.Router()
router.get('/monsters', MonsterController.getAllMonsters)

export default router
