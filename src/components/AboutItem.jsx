import React from 'react'

const AboutItem = ({ item }) => {
	console.log(item)

	return (
		<div className='flex flex-col text-center items-center  sm:items-start gap-5 md:w-[241px] justify-start'>
			{item?.img ? (
				<img src={item.img} alt='icon' />
			) : (
				<p className='text-[100px] leading-0'>{item.icon}</p>
			)}
			<p
				className={`text-center sm:text-start font-montserrat text-base leading-5 ${
					item?.img ? 'sm:pt-[50px]' : ''
				}`}
			>
				{item.text}
			</p>
		</div>
	)
}

export default AboutItem
