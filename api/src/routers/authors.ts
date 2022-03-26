import express  from "express";

import {
    findAll,
    findById,
    createAuthor,
    updateAuthor,
    deleteAuthor,
    
} from '../controllers/authors'

const router = express.Router()

//Routes
router.post('/', createAuthor)
router.get('/', findAll)
router.get('/:authorId', findById)
router.put('/:authorId', updateAuthor)
router.delete('/:authorId', deleteAuthor)

export default router
