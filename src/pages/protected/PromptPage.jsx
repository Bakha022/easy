import React from 'react'
import PrompInput from '../../components/PromptInput'
import Title from '../../components/Title'
const PromptPage = () => {
	return (
		<div className='container'>
			<div className='flex flex-col justify-between gap-7 mt-[133px] xs:mt-[273px] items-center'>
				<Title title={'Расскажите о себе'} />
				<p className='font-montserrat font-medium text-base leading-5 text-center max-w-[638px]'>
					Чем вы занимаетесь, ваш опыт, сколько лет занимаетесь, где вы учились,
					достижения или если у вас нет опыта кем вы бы хотели работать. Чем
					подробно вы опишите тем круче будет результат
				</p>
				<PrompInput />
			</div>
		</div>
	)
}

export default PromptPage
