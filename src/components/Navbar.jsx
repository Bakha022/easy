import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { authName, logout } from '../redux/slice/auth'
import LinkBtn from './LinkBtn'
const Navbar = () => {
	const [toogle, setToogle] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const token = useSelector(state => state[authName].token)

	return (
		<>
			<div className='container'>
				<nav className='pt-[42px] flex !items-center justify-between'>
					<Link to={'/'} className={'font-montserrat font-bold text-2xl '}>
						EasyCV
					</Link>
					<div className='xs:flex items-center gap-7 hidden'>
						{token ? (
							<div onClick={() => dispatch(logout(navigate()))}>
								<LinkBtn word={'Выйти'} />
							</div>
						) : (
							<>
								<Link to={'/login'}>
									<LinkBtn word={'Войти'} />
								</Link>
								<Link to={'/register'}>
									<LinkBtn word={'Регистрация'} />
								</Link>
							</>
						)}
					</div>
					<FaBars
						color=''
						onClick={() => setToogle(true)}
						className={`${toogle ? 'hidden' : 'block'} xs:hidden`}
						size={24}
					/>
				</nav>
			</div>
			<div
				className={`responsive-nav flex flex-col gap-7 bg-white w-full h-full ps-[25px] pe-[25px] fixed top-0  bottom-0 pt-[62px] transition-all duration-150 ${
					toogle ? 'left-0' : 'left-[-100%]'
				} xs:hidden`}
			>
				<div className='flex justify-between items-center'>
					<Link
						onClick={() => setToogle(false)}
						to={'/'}
						className='font-montserrat font-bold text-2xl'
					>
						EasyCV
					</Link>
					<MdCancel color='' onClick={() => setToogle(false)} size={26} />
				</div>
				<div className='flex flex-col items-start gap-7'>
					<Link onClick={() => setToogle(false)} to={'/login'}>
						<LinkBtn word={'Войти'} />
					</Link>

					<Link onClick={() => setToogle(false)} to={'/register'}>
						<LinkBtn word={'Регистрация'} />
					</Link>
				</div>
			</div>
		</>
	)
}

export default Navbar
