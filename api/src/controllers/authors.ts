import { Request, Response, NextFunction } from 'express'

import Author from '../models/authors'
import AuthorService from '../services/authors'
import { BadRequestError } from '../helpers/apiError'

// POST
export const creatAuthors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    const newAuthor = new Author(req.body)
    await AuthorService.create(newAuthor)
    res.json(newAuthor)
    
    } catch(error) {
      if(error instanceof Error && error.name == 'validationError') {
        next(new BadRequestError('invalid Request', error))
      } else {
        next(error)
      }
    }
    // Put handeler for the end-point 
   export const updateAuthor = async ( req: Request, res: Response, next: NextFunction) => {
     try {
       const update = req.body
       const authorId = req.params.authorId
       const updateAuthor = await AuthorService.update(authorId, update)

       res.json(updateAuthor)
     } catch (error) {
       if (error instanceof Error && error.name == 'validationError') {
         next(new BadRequestError('invalid Request', error))
       } else {
         next(error)
       }
     }
   }
        }


// Delete
export const deleteAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await AuthorService.deleteAuthor(req.params.authorId) 
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// Get Author
export const findId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {firstName, lastName, bithYear, books} = req.body
    try {
      res.json(await AuthorService.findById(req.params.authorId))  
    } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}



// GET 
export const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await AuthorServices.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
