import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'

const FooterForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()
	const onSubmit = data => console.log(data)
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-[80%] md:w-[649px] shadow-custom rounded-[30px] mx-auto py-9 px-[25px] sm:px-[70px] absolute bg-white top-[-400px] md:top-[-440px]'
		>
			<h3 className='font-montserrat font-semibold text-2xl sm:text-3xl  md:text-4xl  mb-4  md:mb-[90px] leading-7 sm:leading-10 text-center'>
				Связаться с нами
			</h3>
			<div className='flex flex-col gap-9 mb-[80px]'>
				<input
					{...register('name', { required: true })}
					placeholder='Имя'
					className={`bg-none py-2 border-b ${
						errors.name
							? 'border-red-500 placeholder:text-red-500 '
							: 'border-black placeholder:text-black '
					} border-solid w-full  md:w-[165px] text-black'
					type='text`}
				/>
				<input
					{...register('email', { required: true })}
					placeholder='Почта'
					className={`bg-none py-2 border-b ${
						errors.email
							? 'border-red-500 placeholder:text-red-500 '
							: 'border-black placeholder:text-black '
					}  border-solid placeholder:text-black text-black w-full  md:w-[250px]`}
					type='email'
				/>
				<input
					{...register('message', { required: true })}
					placeholder='Сообщение'
					className={`bg-none py-2 border-b ${
						errors.message
							? 'border-red-500 placeholder:text-red-500 '
							: 'border-black placeholder:text-black '
					} border-solid placeholder:text-black text-black w-full `}
					type='text'
				/>
			</div>
			<div className='flex justify-center'>
				<Button word={'Отправить'} />
			</div>
		</form>
	)
}

export default FooterForm
