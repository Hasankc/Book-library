import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../helpers/apiError";

import User from '../models/users'
import UserService from '../services/users'

// POST
export const creatBook = async (
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
          const updateUser = await UserServices.update(userId, update)
          res.json(updateUser)
        } catch (error) {
          if (error instanceof Error && error.name == 'ValidationError') {
            next(new BadRequestError('Invalid Request', error))
          } else {
            next(error)
         }
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
      res.json(await UserServices.findAll())
    } catch (error) {
      if (error instanceof Error && error.name == 'ValidationError') {
        next(new BadRequestError('Invalid Request', error))
      } else {
        next(error)
      }
    }
  }
  