import React from 'react'
import useCounter from '../hook/useCounter'
const NumItem = ({ item }) => {
	const { count } = useCounter(item?.numbers)
	return (
		<div className='flex flex-col items-center'>
			<h3 className='font-montserrat text-4xl font-bold md:text-6xl md:leading-[78px]'>
				{count}
			</h3>
			<p className='font-montserrat font-bold text-xl md:text-2xl leading-7'>{item?.status}</p>
		</div>
	)
}

export default NumItem
