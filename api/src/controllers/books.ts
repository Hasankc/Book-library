import { Request, Response, NextFunction } from 'express'

import Book from '../models/books'
import BookService from '../services/books'
import { BadRequestError } from '../../helpers/apiError'

// POST
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    const newBook = new Book(req.body)
    await BookService.create(newBook)
    res.json(newBook)
    
    } catch(error) {
      if(error instanceof Error && error.name == 'validationError') {
        next(new BadRequestError('invalid Request', error))
      } else {
        next(error)
      }
    }
  }
    // Put handeler for the end-point 

   export const updateBook = async ( req: Request, res: Response, next: NextFunction) => {
     try {
       const update = req.body
       const bookId = req.params.authorId
       const updateBook = await BookService.update(bookId, update)

       res.json(updateBook)
     } catch (error) {
       if (error instanceof Error && error.name == 'validationError') {
         next(new BadRequestError('invalid Request', error))
       } else {
         next(error)
       }
     }
   }
      


// Delete
export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await BookService.deleteBook(req.params.authorId) 
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
      res.json(await BookService.findById(req.params.bookId))  
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
    res.json(await BookServices.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
