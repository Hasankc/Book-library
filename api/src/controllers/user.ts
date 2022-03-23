import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../helpers/apiError";

import User from '../models/user'
import UserService from '../services/user'

export const findAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allUsers = await userService.findAll()
        res.json(allUsers)
    } catch  (error) {
        if (error instanceof Error && error.name == 'ValidationError')
        next(new BadRequestError('Invalid Request', error))

    } else {
        next(error)
    }
      
}
export const creatUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = new User(req.body)
        const creatUser = await userService.create(newUser)
        res.json(creatUser)
    } catch (error) {
        if (error instanceof Error && error.name == 'ValidationError')
        next(new BadRequestError('Invalid Request', error))

    } else {
        next(error)
    }
}
 
