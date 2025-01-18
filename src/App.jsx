import React from 'react'

import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth'
import PromptPage from './pages/protected/PromptPage'
import HomePage from './pages/public/HomePage'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'
import { authName } from './redux/slice/auth'

const App = () => {
	const {token} = useSelector(state => state[authName])
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route
							path='/prompt'
							element={
								<RequireAuth>
									<PromptPage />
								</RequireAuth>
							}
						/>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
