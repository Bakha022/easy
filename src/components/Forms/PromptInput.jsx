import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaArrowCircleUp } from 'react-icons/fa'

const PromptInput = () => {
	const textareaRef = useRef()

	const handleInput = () => {
		const textarea = textareaRef.current
		if (!textarea) return

		// Avvalgi balandlikni 83px ga o'rnatish
		textarea.style.height = 'auto'

		// Yangi balandlikni hisoblash
		textarea.style.height = `${textarea.scrollHeight}px`
	}

	const handleFocus = () => {
		if (!textareaRef.current) return
		textareaRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()

	const onSubmit = data => {
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
			<textarea
				rows={1}
				ref={textareaRef}
				onInput={handleInput}
				onFocus={handleFocus}
				placeholder='Пишите тут'
				className='bg-[#F2F2F2] w-full resize-none outline-none overflow-hidden'
				type='text'
				{...register('text', { required: true })}
			></textarea>
			<button className='bg-none border-none flex items-end'>
				<FaArrowCircleUp className='cursor-pointer' size={30} />
			</button>
		</form>
	)
}

export default PromptInput
