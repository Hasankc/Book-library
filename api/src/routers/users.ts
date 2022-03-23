import express from 'express'

import {findAllUsers, creatUser} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllUsers)
router.post('/', creatUser)

export default router