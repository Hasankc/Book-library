import passport, { use } from 'passport'
import passportLocal from 'passport-local'
import { Request, Response, NextFunction } from 'express'
// import GoogleTokenStrategy from 'passport-google-id-token'
import UserService from '../services/users'
import InternalServerError from '../../helpers/apiError'
import JwtStrategy from 'passport-jwt'
import { GOOGLE_CLIENT_ID, JWT_SECRET } from '../util/secrets'

const GoogleTokenStrategy = require('passport-google-id-token');

export const googleStrategy = new GoogleTokenStrategy(
  {
    clientId: GOOGLE_CLIENT_ID,
  },
  (parsedToken: any, googleId: any, done: any) => {
    try {
      const user = UserService.findOrCreate(parsedToken)
      done(null, user)
    } catch (err) {
      done(InternalServerError, null)
    }
  }
)
export const jwtStrategy = new JwtStrategy.Strategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  (payload: any, done: any) => {
    const user = {}
    done(null, user)
  }
)
