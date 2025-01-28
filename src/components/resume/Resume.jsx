import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
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


	const downloadPDF = () => {
    if (!resume) return;

    const resumeContainer = document.getElementById('resume-container');
    html2canvas(resumeContainer, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // A4 kengligi (mm)
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        // Agar tasvir balandligi A4 dan oshsa, yangi sahifa qo'shish
        let heightLeft = imgHeight;
        let position = 0;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= 297; // A4 balandligi (mm)

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= 297;
        }

        doc.save('resume.pdf');
    });
};
	return (
		<>
			<div id='resume-container' className={style['container']}>
				<header>
					<h1>{resume?.full_name}</h1>
					<p>
						{resume?.number} &middot; {resume?.email}
					</p>
				</header>

				<section>
					<h2>Обо мне</h2>
					<p>{resume?.about_me}</p>
				</section>

				<section className={style['professional-experience']}>
					<h2>Профессиональный опыт</h2>
					{resume?.jobs.map((item, index) => (
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
								<li>{item?.job_description}</li>
							</ul>
							<hr />
						</div>
					))}
				</section>

				<section className={style['education']}>
					<h2>Образование</h2>
					<p>{resume?.education.university}</p>
					<p className={style['subtitle']}>
						Majors: {resume?.education?.major}
					</p>
				</section>

				<section className='mb-2'>
					<h2>Навыки</h2>
					<section className='flex flex-col md:flex-row gap-3 items-center'>
						<p className='mt-4'>Technologies:</p>
						<div className={style['skills']}>
							{resume?.skills.map((item, key) => (
								<div key={`${item}-${key}`}>{item}</div>
							))}
						</div>
					</section>
				</section>
			</div>

			<div className='flex justify-center mb-10'>
				<button
					onClick={downloadPDF}
					className='bg-[#207DFF] text-white px-[23px] py-[15px] rounded-md font-montserrat font-semibold'
				>
					Скачать PDF-файл
				</button>
			</div>
		</>
	)
}

export default Resume
