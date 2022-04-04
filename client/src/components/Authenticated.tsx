
import React from 'react'
import {Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AppState} from '../redux/store'

type AuthenticatedProps = {
    children: React.ReactNode
}

function Authenticated({children}: AuthenticatedProps)
const isAuthenicated = useSelector((state: AppState) => state.auth.isAuthenicated)

return <>{isAuthenicated ? chdiren: <Navigate replace to='/login' />}</>



export default Authenticated