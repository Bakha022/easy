import React from 'react'

import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth'
import PromptPage from './pages/protected/PromptPage'
import PromptResultPage from './pages/protected/PromptResPage'
import HomePage from './pages/public/HomePage'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'
import { promptName } from './redux/slice/prompt'

const App = () => {
	// const { token } = useSelector(state => state[authName])
	const { data } = useSelector(state => state[promptName])

	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route element={<Layout />}>
						<Route index element={<HomePage />} />
						<>
							<Route
								path='/prompt'
								element={
									<RequireAuth>
										<PromptPage />
									</RequireAuth>
								}
							/>
							<Route
								path='/result'
								element={
									data ? <PromptResultPage /> : <Navigate to={'/prompt'} />
								}
							/>
						</>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
