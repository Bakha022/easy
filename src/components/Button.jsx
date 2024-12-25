import React from 'react'

const Button = ({ word }) => {
	return (
		<button className='py-[12px] px-[20px]  xs:py-[12px] xs:px-[69px] border-[3px] rounded-[15px] border-[#000000] bg-black text-white font-montserrat text-xl xs:text-2xl  leading-[29px] font-bold hover:bg-white duration-200 hover:text-black'>
			{word}
		</button>
	)
}

export default Button
