import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { promptName } from '../../redux/slice/prompt'
import request from '../../services/request'
import style from './Resume.module.css'
const Resume = () => {
	const { data } = useSelector(state => state[promptName])
	const [resume, setResume] = useState(null)

	useEffect(() => {
		const getData = async id => {
			try {
				const { data } = await request.get(`cv/cv_result/${54}/`)
				setResume(data)
			} catch (error) {
				console.log(error)
			}
		}

		getData(data.id)
	}, [])

	return (
		<>
			<div className={style['container']}>
				<header>
					<h1>{resume?.full_name}</h1>
					<p>
						{resume?.number} &middot; {resume?.email}
					</p>
				</header>

				<section>
					<h2>About Me</h2>
					<p>{resume?.about_me}</p>
				</section>

				<section className={style['professional-experience']}>
					<h2>Professional Experience</h2>
					{resume?.jobs.map((item, index) => {
						return (
							<>
								<div key={index} className={style['experience-item']}>
									<div className={style['row']}>
										<div>
											<h3>{item?.name_company}</h3>
											<p>{item?.job_title}</p>
										</div>
										<p>
										{item?.from_date}-{item?.to_date}
										</p>
									</div>
									<ul>
											<li>
												{item?.job_description}
											</li>
									</ul>
									<hr />
								</div>
							</>
						)
					})}
				</section>

				<section className={style['education']}>
					<h2>Education</h2>
					<p>{resume?.education.university}</p>
					<p className={style['subtitle']}>
						Majors: {resume?.education?.major}
					</p>
				</section>

				<section>
					<h2>Skills</h2>
					<div className={style['skills']}>
						{resume?.skills.map((item, key) => (
							<span key={`${item}-${key}`} className={style['skill-item']}>
								{item}
							</span>
						))}
					</div>
				</section>
			</div>
		</>
	)
}

export default Resume
