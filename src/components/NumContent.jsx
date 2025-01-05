import React, { useEffect, useState } from 'react'
import { dataNumbers } from '../constants'
import NumItem from './NumItem'
import Title from './Title'
const NumContent = () => {
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return (
		<div className='container'>
			<div className='mt-[700px] pt-[70px] number-content'>
				<Title center={width < 640 ? true : false} title={'Цифры'} />
				<div className='flex flex-col gap-5 sm:flex-row  sm:gap-auto justify-between mt-10'>
					{dataNumbers.map((item, key) => (
						<NumItem key={key} item={item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default NumContent
