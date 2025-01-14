import React from 'react'
import { useSelector } from 'react-redux'
import { authName } from '../redux/slice/auth'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
	const token = useSelector((state)=> state[authName].token)

	if(!token) {
		return <Navigate to={'/login'} replace />
	}
	return children
}

export default RequireAuth