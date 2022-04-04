import { Schema } from 'mongoose'
import {Dispatch} from 'redux'
import axios form 'axios'

export type BookDocument = {
    _id: String
    title: String
    bookImg: String
    publishedYear: number
    quantuty: number
    genre: String
    authors: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
}

export type User = {
    _id: String
    firstName: String
    lastName: String
    email: String
    isAdmin: boolean
}

type LoginSuccessAction = {
    type: 'LOGIN_SUCCESS'
    payload: User
}
export type Logout = {
    type: 'LOGOUT'
    
}

export type Actions = LoginSuccessAction | Logout

export const LoginSuccess = (user: User) =>{
    return {
        type: 'LOGIN_SUCCESS',
        payload: user,
    }
}
export const logout = () => {
    return{
        type: 'LOGOUT',
    }
}
