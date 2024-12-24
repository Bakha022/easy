import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FaArrowCircleUp } from 'react-icons/fa'

const PromptInput = () => {
	const textareaRef = useRef()

	const handleInput = () => {
		if (!textareaRef.current) return

		const textarea = textareaRef.current

		// Balandlikni qayta o'rnatish
		textarea.style.height = 'auto'
	}

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()
	const onSubmit = data => data

	return (
		<form
			className={`input-section bg-[#F2F2F2] flex py-4 px-[26px] w-[708px] rounded-[20px] justify-between ${
				errors?.text?.type == 'required' ? 'border-2 border-red-600' : ''
			} `}
			onSubmit={handleSubmit(onSubmit)}
		>
			<textarea
				rows={1}
				ref={textareaRef}
				onInput={handleInput}
				placeholder='Пишите тут'
				className={`bg-[#F2F2F2] w-[95%] h-auto resize-none outline-none`}
				type='text'
				{...register('text', { required: true })}
			></textarea>
			<button className='bg-none border-none'>
				<FaArrowCircleUp className='cursor-pointer' size={30} />
			</button>
		</form>
	)
}

export default PromptInput
