import React from 'react'
import FooterForm from './Forms/FooterForm'
const Footer = () => {
	return (
		<footer className='w-full relative z-20 flex flex-col items-center mt-[550px] md:mt-[700px]'>
			<FooterForm />
			<div className='w-full bg-[#207DFF] h-[205px]'></div>
		</footer>
	)
}

export default Footer
