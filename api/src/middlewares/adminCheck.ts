import { Request, Response, NextFunction } from 'express'
import { UserDocument } from '../models/users'
import { ForbiddenError } from '../../helpers/apiError'


const adminCheck = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as unknown as UserDocument
    if ( user?.isAdmin) {
        next()
    } else {
        throw new ForbiddenError()
    }
}
export default adminCheck
