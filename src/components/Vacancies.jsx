import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { promptName } from '../redux/slice/prompt'
import request from '../services/request'
import Title from './Title'
import VacanciesItem from './VacanciesItem'

const Vacancies = () => {
	const [vacancy, setVacancy] = useState(null)
	const { data } = useSelector(state => state[promptName])

	useEffect(() => {
		const getData = async id => {
			try {
				const { data } = await request.get(`cv/vacanies/${id}/`)
				setVacancy(data)
			} catch (error) {
				console.log(error)
			}
		}

		getData(data?.id)
	}, [])

	return (
		<div>
			<Title center={true} title={'Вакансии для вас'} />
			{vacancy?.map((item, index) => (
				<VacanciesItem key={index} {...item} />
			))}
		</div>
	)
}

export default Vacancies
