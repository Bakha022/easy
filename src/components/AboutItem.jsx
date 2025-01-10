import React from 'react'

const AboutItem = ({ item }) => {
	return (
		<div className='flex flex-col text-center items-center  sm:items-start gap-5 md:w-[241px] justify-start'>
			<img src={item.img} alt='icon' />
			<p
				className={`text-center sm:text-start font-montserrat text-base leading-5 `}
			>
				{item.text}
			</p>
		</div>
	)
}

export default AboutItem
