import express from 'express'
import passport from 'passport'
import adminCheck from '../middlewares/adminCheck'
import {
  findAll,
  findById,
  createBook,
  updateBook,
  deleteBook,
} from '../controllers/books'

const router = express.Router()

// Every path we define here will get /api/v1/book
router.post('/',  passport.authenticate('jwt', {session: false}), adminCheck, createBook)
router.get('/', findAll)
router.get('/:bookId', findById)
router.put('/:bookId', passport.authenticate('jwt', {session: false}), adminCheck, updateBook)
router.delete('/:bookId',  passport.authenticate('jwt', {session: false}), adminCheck, deleteBook)


export default router
