import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
	const navigate = useNavigate()
	const toTry = () => {
		navigate('/prompt')
	}
	return (
		<div className='container'>
			{/* <div className='flex flex-col justify-between gap-7 mt-[133px] xs:mt-[273px] items-center'>
				<Title title={'Хотите быстро сделать резюме?'} />
				<button
					onClick={toTry}
					className='py-[12px] px-[20px]  xs:py-[14px] xs:px-[25px] border-[3px] rounded-lg border-[#000000] bg-black text-white font-montserrat text-xl xs:text-2xl  leading-[29px] font-bold hover:bg-white duration-200 hover:text-black'
				>
					Попробовать
				</button>
			</div> */}
			<div className='flex mt-[160px] items-start w-full relative h-[100vh]'>
				<div className='flex flex-col items-start gap-8'>
					<h1 className='font-montserrat leading-[58px] text-5xl md:w-[665px] font-bold'>
						Сделай хорошое резюме за <span>2 минуты</span>
					</h1>
					<button
						onClick={toTry}
						className='py-[12px] px-[20px]  xs:py-[14px] xs:px-[25px] rounded-lg  bg-[#207DFF] text-white font-montserrat text-xl xs:text-2xl  leading-[29px] font-bold '
					>
						Попробовать
					</button>
				</div>
				<img className='absolute top-[-200px] right-[0px]' src="hero.png" alt="hero-img" />
			</div>
		</div>
	)
}

export default HomePage
