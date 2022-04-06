import express  from "express";

import {
    // findAll,
    findById,
    creatAuthor,
    updateAuthor,
    deleteAuthor,
    
} from '../controllers/authors'

const router = express.Router()

//Routes
router.post('/', creatAuthor)
// router.get('/', findAll)
router.get('/:authorId', findById)
router.put('/:authorId', updateAuthor)
router.delete('/:authorId', deleteAuthor)

export default router
