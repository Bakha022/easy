import React from 'react'

const LinkBtn = ({ word }) => {
	return (
		<button className='border-[3px] px-4 text-[#207DFF] py-3 md:px-6 hover:text-white hover:bg-[#207DFF] duration-200 rounded-lg border-[#207DFF] text-base font-bold font-montserrat'>
			{word}
		</button>
	)
}

export default LinkBtn
