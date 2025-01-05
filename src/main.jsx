import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
// import AuthProvider from './context/auth.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	// <AuthProvider>

	<StrictMode>
		<App />
		<Toaster />
	</StrictMode>

	// </AuthProvider>
)
