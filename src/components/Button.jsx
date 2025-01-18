import React from 'react'

const Button = ({ word, loading }) => {
	return (
		<button
			type='submit'
			className='py-[10px] px-[25px] w-full xs:w-auto xs:py-[12px] xs:px-[69px] border-[3px] rounded-[15px] border-[#207DFF] bg-[#207DFF] text-white font-montserrat text-xl xs:text-2xl  leading-[29px] font-bold hover:bg-white duration-200 hover:text-[#207DFF]'
			disabled={loading}
		>
			{word}
		</button>
	)
}

export default Button
