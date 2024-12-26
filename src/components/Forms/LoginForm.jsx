import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'

const LoginForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()
	const onSubmit = data => console.log(data)
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-9  xs:gap-11 mt-[15px] xs:mt-[50px] items-center'
		>
			<input
				type='text'
				className={`w-full text-xl font-medium leading-[42px] montserrat text-center  xs:text-[28px] border-b-[3px] placeholder-[#00000066]  border-[#00000066] ${
					errors.userName ? 'placeholder-red-500 border-red-500' : ''
				} `}
				{...register('userName', { required: true })}
				placeholder='Username'
			/>
			<input
				type='password'
				className={`w-full text-xl font-medium leading-[42px] montserrat text-center  xs:text-[28px] border-b-[3px] placeholder-[#00000066]  border-[#00000066] ${
					errors.password ? 'placeholder-red-500 border-red-500' : ''
				} `}
				{...register('password', { required: true })}
				placeholder='Password'
			/>
			<Button word={'Войти'} />
		</form>
	)
}

export default LoginForm
