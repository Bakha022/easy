import React from 'react'
import Button from '../Button'
const FooterForm = () => {
	return (
		<form className='w-[80%] md:w-[649px] shadow-custom rounded-[30px] mx-auto py-9 px-[70px] absolute bg-white top-[-400px] md:top-[-440px]'>
			<h3 className='font-montserrat font-semibold text-2xl sm:text-3xl  md:text-4xl  mb-4  md:mb-[90px] leading-7 sm:leading-10 text-center'>
				Связаться с нами
			</h3>
			<div className='flex flex-col gap-9 mb-[80px]'>
				<input
					placeholder='Имя'
					className='bg-none py-2 border-b border-black border-solid w-full  md:w-[165px] placeholder:text-black text-black'
					type='text'
				/>
				<input
					placeholder='Почта'
					className='bg-none py-2 border-b border-black border-solid placeholder:text-black text-black w-full  md:w-[250px]'
					type='email'
				/>
				<input
					placeholder='Сообщение'
					className='bg-none py-2 border-b border-black border-solid placeholder:text-black text-black w-full'
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
