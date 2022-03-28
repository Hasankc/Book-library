import express  from "express";

import {
    findAll,
    findById,
    createUser,
    updateUser,
    deleteUser,
    
} from '../controllers/users'
import adminCheck from '../middlewares/adminCheck'

const router = express.Router()

//Routes
router.post('/',  passport.authenticate('jwt', {session: false}), createUser)
router.get('/all', findAll)
router.get('/:userId', findById)
router.put('/:userId',  passport.authenticate('jwt', {session: false}), adminCheck, updateUser)
router.delete('/:userId', passport.authenticate('jwt', {session: false}), deleteUser)
router.post('/google-login', googleLogin)

export default router