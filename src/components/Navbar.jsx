import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Navbar = () => {
	const [toogle, setToogle] = useState(false)
	// console.log(toogle)

	return (
		<>
			<div className='container'>
				<nav className='pt-[42px] flex !items-center justify-between'>
					<Link
						to={'/'}
						className={`font-montserrat font-bold text-2xl ${
							toogle ? 'hidden' : 'block'
						}`}
					>
						EasyCV
					</Link>
					<div className='xs:flex items-center gap-7 hidden'>
						<Link
							to={'/login'}
							className='border-[3px] px-3 py-1 md:px-6 md:py-2 hover:text-white hover:bg-black duration-200 rounded-lg border-[#000000] text-base font-bold font-montserrat'
						>
							Войти
						</Link>
						<Link
							to={'/register'}
							className='border-[3px] px-3 py-1 md:px-6 md:py-2 hover:text-white hover:bg-black duration-200 rounded-lg border-[#000000] text-base font-bold font-montserrat'
						>
							Регистрация
						</Link>
					</div>
					<FaBars
						onClick={() => setToogle(true)}
						className={`${toogle ? 'hidden' : 'block'} xs:hidden`}
						size={24}
					/>
				</nav>
			</div>
			<div
				className={`responsive-nav flex flex-col gap-7 bg-white w-full h-full ps-[50px] pe-[50px] fixed top-0  bottom-0 pt-[42px] transition-all duration-150 ${
					toogle ? 'left-0' : 'left-[-100%]'
				} xs:hidden`}
			>
				<div className='flex justify-between items-center'>
					<Link to={'/'} className='font-montserrat font-bold text-2xl'>
						EasyCV
					</Link>
					<MdCancel onClick={() => setToogle(false)} size={24} />
				</div>
				<div className='flex flex-col items-start gap-7'>
					<Link
						to={'/login'}
						className='border-[3px] px-3 py-1 md:px-6 md:py-2 hover:text-white hover:bg-black duration-200 rounded-lg border-[#000000] text-base font-bold font-montserrat'
					>
						Войти
					</Link>
					<Link
						to={'/register'}
						className='border-[3px] px-3 py-1 md:px-6 md:py-2 hover:text-white hover:bg-black duration-200 rounded-lg border-[#000000] text-base font-bold font-montserrat'
					>
						Регистрация
					</Link>
				</div>
			</div>
		</>
	)
}

export default Navbar
