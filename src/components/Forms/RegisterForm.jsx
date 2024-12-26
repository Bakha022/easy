import React from 'react'
import Button from '../Button'

const RegisterForm = () => {
	return (
		<div className='flex flex-col gap-9  xs:gap-11 mt-[15px] xs:mt-[50px] items-center'>
			<input
				type='text'
				className='w-full text-xl font-medium leading-[42px] montserrat text-center  xs:text-[28px] border-b-[3px] border-[#00000066]'
				placeholder='Username'
			/>
			<input
				type='password'
				className='w-full text-xl font-medium leading-[42px] montserrat text-center  xs:text-[28px] border-b-[3px] border-[#00000066]'
				placeholder='Password'
			/>
			<input
				type='password'
				className='w-full text-xl font-medium leading-[42px] montserrat text-center  xs:text-[28px] border-b-[3px] border-[#00000066]'
				placeholder='Confirm password'
			/>
			<Button word={'Регистрация'} />
		</div>
	)
}

export default RegisterForm
