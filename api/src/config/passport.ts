import passport, { use } from 'passport'
import passportLocal from 'passport-local'
import { Request, Response, NextFunction } from 'express'
import GoogleTokenIdStrategy from 'passport-google-id-token'
import UserService from '../services/users'
import InternalServerError from '../../helpers/apiError'
import JwtStrategy from 'passport-jwt'
import { GOOGLE_CLIENT_ID, JWT_SECRET } from '../util/secrets'

export const googleStrategy = new GoogleTokenIdStrategy(
  {
    clientId: GOOGLE_CLIENT_ID,
  },
  (pasedToken: any, googleId: any, done: any) => {
    try {
      const user = UserService.findOrCreate(pasedToken)
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
