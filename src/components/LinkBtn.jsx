import React from 'react'

const LinkBtn = ({ word }) => {
	return (
		<button className='border-[3px] px-6 py-3 md:py-8 md:px-4 hover:text-white hover:bg-black duration-200 rounded-lg border-[#000000] text-base font-bold font-montserrat'>
			{word}
		</button>
	)
}

export default LinkBtn
