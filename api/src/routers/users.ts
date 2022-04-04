import express  from "express";
import passport from 'passport'
import {
    findAll,
    findId,
    createUser,
    updateUser,
    deleteUser,
    googleLogin
    
} from '../controllers/users'
import adminCheck from '../middlewares/adminCheck'

const router = express.Router()

//Routes
router.post('/',  passport.authenticate('jwt', {session: false}), createUser)
router.get('/all', findAll)
router.get('/:userId', findId)
router.put('/:userId',  passport.authenticate('jwt', {session: false}), adminCheck, updateUser)
router.delete('/:userId', passport.authenticate('jwt', {session: false}), deleteUser)
router.post('/google-login',passport.authenticate('google-id-token', {session: false}), googleLogin)

export default router