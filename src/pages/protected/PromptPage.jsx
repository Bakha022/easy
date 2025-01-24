import React from 'react'
import { useSelector } from 'react-redux'
import PrompInput from '../../components/Forms/PromptInput'
import Title from '../../components/Title'
import { promptName } from '../../redux/slice/prompt'
const PromptPage = () => {
	const { loading } = useSelector(state => state[promptName])

	if (loading) {
		return (
			<div className='absolute top-0 left-0 bottom-0 right-0 bg-[#00000031] flex justify-center items-center w-full h-[100vh]'>
				<div className='loader'></div>
			</div>
		)
	}

	return (
		<>
			<div className='container'>
				<div className='flex flex-col justify-between gap-7 mt-[83px] xs:mt-[273px] items-center mb-[80px]'>
					<Title center={true} title={'Расскажите о себе'} />
					<p className='font-montserrat font-medium text-base leading-5 text-center max-w-[638px]'>
						Чем вы занимаетесь, ваш опыт, сколько лет занимаетесь, где вы
						учились, достижения или если у вас нет опыта кем вы бы хотели
						работать. Чем подробно вы опишите тем круче будет результат
					</p>
					<PrompInput />
				</div>
			</div>
		</>
	)
}

export default PromptPage
