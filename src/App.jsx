import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/public/HomePage'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route element={<Layout />}>
						<Route index element={<HomePage />} />
					</Route>
					<Route path='login'  element={<LoginPage/>} />
					<Route path='register'  element={<RegisterPage/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
