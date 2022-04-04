import express, { Request, Response, NextFunction } from 'express'

import lusca from 'lusca'
import dotenv from 'dotenv'
import passport from 'passport'

import booksRouter from './routers/books'
import authorsRouter from './routers/authors'
import usersRouter from './routers/users'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import  {googleStrategy} from './config/passport'
dotenv.config({ path: '.env' })
const app = express()

// Global middleware
app.use(apiContentType)
app.use(express.json())

//Global configuration
app.use(passport.initialize())
passport.use(googleStrategy)

// Express configuration
app.set('port', process.env.PORT || 3000)


// Set up routers
app.use('/users', usersRouter)
app.use('/books', booksRouter)
app.use('/authors', authorsRouter)
// Custom API error handler
app.use(apiErrorHandler)

export default app
