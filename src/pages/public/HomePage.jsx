import React from 'react'
import Title from '../../components/Title'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
	const navigate = useNavigate()
	const toTry = () => {
		navigate('/prompt')
	}
	return (
		<div className='container'>
			<div className='flex flex-col justify-between gap-7 mt-[133px] xs:mt-[273px] items-center'>
				<Title title={'Хотите быстро сделать резюме?'} />
				<button
					onClick={toTry}
					className='py-[18px] px-[24px]  xs:py-[19px] xs:px-[25px] border-[3px] rounded-lg border-[#000000] bg-black text-white font-montserrat text-xl xs:text-2xl  leading-[29px] font-bold hover:bg-white duration-200 hover:text-black'
				>
					Попробовать
				</button>
			</div>
		</div>
	)
}

export default HomePage
