import passport from 'passport'
import passportLocal from 'passport-local'

import GoogleIdTokenStrategy from 'passport-google-id-token'

import { Request, Response, NextFunction } from 'express'

const LocalStrategy = passportLocal.Strategy
