import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
	const navigate = useNavigate()
	const toTry = () => {
		navigate('/prompt')
	}

	return (
		<div className='container'>
			<div className='flex flex-col gap-[40px] lg:flex mt-[60px] sm:mt-[100px] md:mt-[160px] items-start w-full'>
				<div className='flex flex-col items-start gap-8'>
					<h1 className='font-montserrat text-2xl leading-7 md:leading-[58px] sm:text-4xl md:text-5xl md:w-[665px] font-bold'>
						Сделай хорошое резюме за{' '}
						<span className='text-[#207DFF]'>2 минуты</span>
					</h1>
					<button
						onClick={toTry}
						className='py-[12px] px-[20px]  xs:py-[14px] xs:px-[25px] rounded-lg  bg-[#207DFF] text-white font-montserrat text-xl xs:text-2xl  leading-[29px] font-bold '
					>
						Попробовать
					</button>
				</div>
				<div className='mx-auto'>
					<img
						className='text-end lg:absolute w-[900px] top-[200px] right-[100px] hero-img'
						src='resumePerson.webp'
						alt='hero-img'
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero