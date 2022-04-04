import passport from 'passport'
import passportLocal from 'passport-local'


import GoogleIdTokenStrategy from 'passport-google-id-token'
import { Request, Response, NextFunction } from 'express'

import {GOOGLE_CLIENT_ID} from '../util/secrets'



export const googleIdTokenStrategy = new GoogleIdTokenStrategy(
    {
        clientId: GOOGLE_CLIENT_ID,
    },
    (parsedToken: any, googleId: any, done: any) => {
        done(null,{})
    }
)