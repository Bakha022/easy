import React, { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaArrowCircleUp } from 'react-icons/fa'

const PromptInput = () => {
	const textareaRef = useRef()

	const handleInput = () => {
		const textarea = textareaRef.current
		if (!textarea) return

		// Avvalgi balandlikni avtomatik qaytarish
		textarea.style.height = 'auto'

		// Yangi balandlikni hisoblash
		textarea.style.height = `${textarea.scrollHeight}px`
	}

	const handleFocus = () => {
		if (!textareaRef.current) return
		textareaRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}

	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()

	const onSubmit = data => {
		const textarea = textareaRef.current
		if (!textarea) return
		textarea.style.height = '20px'

		console.log(data)
		toast.success('Successfully created!')
		reset({ text: '' })
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`input-section bg-[#F2F2F2] flex flex-row py-4 px-[26px] w-full md:w-[75%] rounded-[20px] justify-betwee  ${
				errors?.text?.type == 'required' ? 'border-2 border-red-600' : ''
			}`}
		>
			<Controller
				name='text'
				control={control}
				defaultValue=''
				rules={{ required: true }}
				render={({ field }) => (
					<textarea
						{...field}
						rows={1}
						ref={e => {
							textareaRef.current = e
							field.ref(e)
						}}
						onInput={e => {
							handleInput()
							field.onChange(e)
						}}
						onFocus={handleFocus}
						placeholder='Пишите тут'
						className='bg-[#F2F2F2] w-full resize-none outline-none overflow-hidden'
					/>
				)}
			/>
			<button type='submit' className='bg-none border-none flex items-end'>
				<FaArrowCircleUp className='cursor-pointer' size={30} />
			</button>
		</form>
	)
}

export default PromptInput
