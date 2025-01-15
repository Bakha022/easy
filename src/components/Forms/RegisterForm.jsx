import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register as registerForm } from '../../redux/slice/auth'
import Button from '../Button'

const RegisterForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()

	const onSubmit = async data => {
		dispatch(registerForm({ credentials: data, navigate }))
		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-9  xs:gap-11 mt-[15px] xs:mt-[50px] items-center'
		>
			<input
				type='text'
				className={`w-full text-xl font-medium leading-[42px] montserrat text-center  xs:text-[28px] border-b-[3px] placeholder-[#00000066]  border-[#00000066] ${
					errors.username ? 'placeholder-red-500 border-red-500' : ''
				} `}
				{...register('username', { required: true })}
				placeholder='Username'
			/>
			<input
				type='password'
				className={`w-full text-xl font-medium leading-[42px] montserrat text-center  xs:text-[28px] border-b-[3px] placeholder-[#00000066]  border-[#00000066] ${
					errors.password ? 'placeholder-red-500 border-red-500' : ''
				} `}
				placeholder='Password'
				{...register('password', { required: true })}
			/>
			<input
				type='password'
				className={`w-full text-xl font-medium leading-[42px] montserrat text-center  xs:text-[28px] border-b-[3px] placeholder-[#00000066]  border-[#00000066] ${
					errors.password2 ? 'placeholder-red-500 border-red-500' : ''
				} `}
				placeholder='Confirm password'
				{...register('password2', { required: true })}
			/>
			<Button word={'Регистрация'} />
		</form>
	)
}

export default RegisterForm
