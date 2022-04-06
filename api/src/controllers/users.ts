import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../helpers/apiError";

import UserService from '../services/users'
import { JWT_SECRET } from '../util/secrets'


//Google
export const googleLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user as userDocument
    const token = jwt.sign({ email: user?.email, id: user?._id }, JWT_SECRET)
    res.json({ user, token })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// POST
export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      
      const newUser = new Book(req.body)
      await UserService.create(newUser)
      res.json(newUser)
      
      } catch(error) {
        if(error instanceof Error && error.name == 'validationError') {
          next(new BadRequestError('invalid Request', error))
        } else {
          next(error)
        }
      }
  
      // Put handeler for the end-point
       
      export const updateUser = async (
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        try {
          const update = req.body
          const userId = req.params.userId
          const updatedUser = await UserService.update(userId, update)
          res.json(updatedUser)
        } catch (error) {
          if (error instanceof Error && error.name == 'ValidationError') {
            next(new BadRequestError('Invalid Request', error))
          } else {
            next(error)
          }
        }
      }
  
  // Delete
  export const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await UserService.deleteUser(req.params.userId) 
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
        res.json(await UserService.findById(req.params.userId))  
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
      res.json(await UserService.findAll())
    } catch (error) {
      if (error instanceof Error && error.name == 'ValidationError') {
        next(new BadRequestError('Invalid Request', error))
      } else {
        next(error)
      }
    }
  }
  