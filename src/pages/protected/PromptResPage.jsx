import React from 'react'
import { useSelector } from 'react-redux'
import PromptInput from '../../components/Forms/PromptInput'
import Resume from '../../components/resume/Resume'
import Vacancies from '../../components/Vacancies'
import { promptName } from '../../redux/slice/prompt'
const PromptResPage = () => {
	const { loading, data } = useSelector(state => state[promptName])
	if (loading) {
		return (
			<div className='absolute top-0 left-0 bottom-0 right-0 bg-[#00000031] flex justify-center items-center w-full h-[100vh]'>
				<div className='loader'></div>
			</div>
		)
	}

	return (
		<div className='container'>
			<div className='w-[1080px] mx-auto flex justify-center'>
				<PromptInput word={data.prompt} />
			</div>
			<Resume />
			<Vacancies />
		</div>
	)
}

export default PromptResPage
