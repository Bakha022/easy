import React from 'react'

const Title = ({ title, center }) => {
	return (
		<h1
			className={`${
				center ? 'text-center' : ''
			} font-montserrat font-bold text-3xl xs:text-4xl leading-[43px] text-[#207DFF]`}
		>
			{title}
		</h1>
	)
}

export default Title
