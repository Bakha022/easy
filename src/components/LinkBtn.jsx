import React from 'react'

const LinkBtn = ({ word }) => {
	return (
		<button className='border-[3px] px-4 py-3 md:px-6 hover:text-white hover:bg-black duration-200 rounded-lg border-[#000000] text-base font-bold font-montserrat'>
			{word}
		</button>
	)
}

export default LinkBtn
