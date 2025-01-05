import { useState } from 'react'
import { AuthContext } from '../hook/useAuth'
import request from '../services/request'

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(false)

	const login = async (values, navigate) => {
		try {
			setLoading(true)
			const { data } = request.post('account/register', values)
		} finally {
			setLoading(false)
		}
	}

	const state = {}

	return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

export default AuthProvider