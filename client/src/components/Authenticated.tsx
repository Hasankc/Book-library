
import React from 'react'
import { useSelector } from 'react-redux'
import {AppState} from '../redux/store'
import {Navigate} from 'react-router-dom'

type AuthenticatedProps = {
    children: React.ReactNode
}

export default function Authenticated({ children }: AuthenticatedProps) {
	const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated);
	return <>{isAuthenticated ? children : <Navigate replace to='/login' />}</>
}