import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { authName } from '../redux/slice/auth'

const RequireAuth = ({ children }) => {
	const { token } = useSelector(state => state[authName])
	if (!token) {
		return <Navigate to={'/login'} replace />
	}
	return children
}

export default RequireAuth
