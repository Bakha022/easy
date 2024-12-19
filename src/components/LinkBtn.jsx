import React from 'react'

const LinkBtn = ({word}) => {
	return (
		<button className='border-[3px] px-[300px] py-1 md:px-6 md:py-2 hover:text-white hover:bg-black duration-200 rounded-lg border-[#000000] text-base font-bold font-montserrat'>
			{word}
		</button>
	)
}

export default LinkBtn
