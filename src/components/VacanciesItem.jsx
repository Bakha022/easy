import React from 'react'
import { Link } from 'react-router-dom'

const VacanciesItem = ({ title, link, company, salary }) => {
	return (
		<Link
			target='_blank'
			to={link}
			className='flex gap-[2px] flex-col sm:flex-row sm:justify-between  xl:w-[850px] mx-auto my-9 bg-[#F2F2F2] p-8 rounded-[20px] sm:items-start'
		>
			<div className='title'>
				<p className='font-montserrat font-bold text-xl mb-2 sm:mb-1 leading-8'>
					{title}
				</p>
				<p className='font-montserrat font-medium text-base leading-4 capitalize'>
					{company}
				</p>
			</div>
			<p className='font-montserrat font-medium text-base leading-8'>
				{salary ? salary : ''}
			</p>
		</Link>
	)
}

export default VacanciesItem
