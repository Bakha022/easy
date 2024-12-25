import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaArrowCircleUp } from 'react-icons/fa'

const PromptInput = () => {
	const textareaRef = useRef()

	const handleInput = () => {
		if (!textareaRef.current) return
		const textarea = textareaRef.current

		// Balandlikni qayta o'rnatish
		textarea.style.height = 'auto'

		// Yangi balandlikni o'lchash
		const newHeight = textarea.scrollHeight

		// Minimal balandlikni saqlash
		textarea.style.height = `${Math.max(newHeight, 23)}px`

	}

	const handleFocus = () => {
		if (!textareaRef.current) return;
		textareaRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
	};
	
	
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	const onSubmit = data => {
		errors?.text?.type == 'required'
			? toast.success('Successfully created!')
			: ''
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='input-section bg-[#F2F2F2] flex flex-row py-4 px-[26px] w-full md:w-[75%] rounded-[20px] justify-betwee'
		>
			<textarea
				rows={1}
				ref={textareaRef}
				onInput={handleInput}
				onFocus={handleFocus}
				placeholder='Пишите тут'
				className='bg-[#F2F2F2] w-full h-auto resize-none outline-none'
				type='text'
				// {...register('text', { required: true })}
			></textarea>
			<button className='bg-none border-none flex items-end'>
				<FaArrowCircleUp className='cursor-pointer' size={30} />
			</button>
		</form>
	)
}

export default PromptInput
