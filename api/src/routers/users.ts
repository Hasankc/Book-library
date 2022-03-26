import express  from "express";

import {
    findAll,
    findById,
    createUser,
    updateUser,
    deleteUser,
    
} from '../controllers/users'

const router = express.Router()

//Routes
router.post('/', createUser)
router.get('/', findAll)
router.get('/:userId', findById)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export default router