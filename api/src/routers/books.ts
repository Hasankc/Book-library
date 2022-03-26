import express from 'express'

import {
  findAll,
  findById,
  createBook,
  updateBook,
  deleteBook,
} from '../controllers/books'

const router = express.Router()

// Every path we define here will get /api/v1/book
router.post('/', createBook)
router.get('/', findAll)
router.get('/:bookId', findById)
router.put('/:bookId', updateBook)
router.delete('/:bookId', deleteBook)


export default router
