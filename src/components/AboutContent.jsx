import React, { useEffect, useState } from 'react'
import { aboutData } from '../constants'
import AboutItem from './AboutItem'
import Title from './Title'

const AboutContent = () => {
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
			<div className='mt-[130px]'>
				<Title
					center={width < 640 ? true : false}
					title={'Как сделать резюме?'}
				/>
				<div className='flex flex-col gap-10 sm:gap-5 sm:flex-row  sm:gap-auto justify-between mt-10'>
					{aboutData.map((item, key) => (
						<AboutItem key={key} item={item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default AboutContent
