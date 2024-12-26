import React from 'react'
import Button from '../Button'

const LoginForm = () => {
	return (
		<div className='flex flex-col gap-9  xs:gap-11 mt-[15px] xs:mt-[50px] items-center'>
			<input
				type='text'
				className='w-full text-xl font-medium leading-[42px] montserrat text-center  xs:text-[28px] border-b-[3px] border-[#00000066]'
				placeholder='Username'
			/>
			<input
				type='text'
				className='w-full text-xl font-medium leading-[42px] montserrat text-center  xs:text-[28px] border-b-[3px] border-[#00000066]'
				placeholder='Password'
			/>
			<Button word={'Войти'} />
		</div>
	)
}

export default LoginForm
