import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
	return (
		<div className='pt-5 overflow-auto'>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default Layout
