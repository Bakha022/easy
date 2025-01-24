import React, { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FaArrowCircleUp } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { promptUser } from '../../redux/slice/prompt'
const PromptInput = ({ word }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
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

	const onSubmit = async data => {
		dispatch(promptUser({ credentials: data, navigate }))
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`input-section bg-[#F2F2F2] flex flex-row py-4 px-[26px] w-full md:w-[75%] rounded-[20px] justify-betwee  ${
				errors?.prompt?.type == 'required' ? 'border-2 border-red-600' : ''
			}`}
		>
			<Controller
				name='prompt'
				control={control}
				defaultValue={word || ''}
				rules={{ required: true }}
				render={({ field }) => (
					<textarea
						value={word}
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
				<FaArrowCircleUp color='#207DFF' className='cursor-pointer' size={30} />
			</button>
		</form>
	)
}

export default PromptInput
