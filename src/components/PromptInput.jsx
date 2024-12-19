import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
const PromptInput = () => {
	return (
		<form className='input-section bg-[#F2F2F2] flex py-4 px-[26px] w-[708px] rounded-[20px] justify-between '>
			<textarea placeholder='Пишите тут' className='bg-[#F2F2F2] w-[400px]' type='text'  ></textarea>
			<FaArrowCircleUp className='cursor-pointer' size={30} />
		</form>
	)
}

export default PromptInput
