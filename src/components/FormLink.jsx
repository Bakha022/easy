import React from 'react'
import { Link } from 'react-router-dom'

const FormLink = ({ link, word }) => {
	return (
		<Link
			to={`/${link}`}
			className='block text-center mt-[26px] text-xl font-semibold leading-9 '
		>
			{word}
		</Link>
	)
}

export default FormLink
