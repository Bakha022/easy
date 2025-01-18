import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authName, login } from '../../redux/slice/auth'
import Button from '../Button'

const LoginForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { loading } = useSelector(state => state[authName])

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	const onSubmit = async values => {
		dispatch(login({ credentials: values, navigate }))
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
				{...register('password', { required: true })}
				placeholder='Password'
			/>
			<Button type='submit' word={loading ? 'Загрузка...' : 'Войти'} />
		</form>
	)
}

export default LoginForm
