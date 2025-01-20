import React from 'react'
import { useSelector } from 'react-redux'
import PromptUI from '../../components/PromptUI'
import Resume from '../../components/resume/Resume'
import { promptName } from '../../redux/slice/prompt'

const PromptResPage = () => {
	const { loading, data } = useSelector(state => state[promptName])

	console.log(data)

	return (
		<div className='container'>
			<PromptUI />
			<Resume />
		</div>
	)
}

export default PromptResPage
