import React from 'react'
import style from './Resume.module.css'
const Resume = () => {
	return (
		<>
			<div className={style['container']}>
				<header>
					<h1>Henrietta Mitchell</h1>
					<p>+998909000000 &middot; user@gmail.com</p>
				</header>

				<section>
					<h2>About Me</h2>
					<p>
						Motivated and results-driven Business School graduate seeking a
						challenging position within a large organisation as a Business
						Analyst or Project Manager. Offering a strong foundation in business
						strategy, data analysis, and project management, with a proven
						ability to drive efficiency, deliver successful outcomes and
						collaborate within cross-functional teams.
					</p>
				</section>

				<section className={style['professional-experience']}>
					<h2>Professional Experience</h2>

					<div className={style['experience-item']}>
						<div className={style['row']}>
							<div>
								<h3>Arowwai Industries</h3>
								<p>Business Analyst Intern</p>
							</div>
							<p>Oct 2023 - Present</p>
						</div>
						<ul>
							<li>
								Developed and implemented a streamlined process for gathering
								business requirements, reducing project delivery time by 15%.
							</li>
							<li>
								Created a standardised reporting framework, improving visibility
								of key performance metrics and enabling data-driven
								decision-making.
							</li>
						</ul>
					</div>

					<div className={style['experience-item']}>
						<div className={style['row']}>
							<div>
								<h3>Hanover and Tyke</h3>
								<p>Project Management Assistant</p>
							</div>
							<p>Jan 2022 - Aug 2023</p>
						</div>
						<ul>
							<li>
								Assisted project managers in planning and executing various
								projects, ensuring adherence to timelines and deliverables.
							</li>
							<li>
								Monitored project budgets, tracked expenses, and prepared
								financial reports to ensure cost-effectiveness.
							</li>
						</ul>
					</div>

					<div className={style['experience-item']}>
						<div className={style['row']}>
							<div>
								<h3>Giggling Platypus Co.</h3>
								<p>Barista</p>
							</div>
							<p>July 2020 - Jan 2022</p>
						</div>
						<ul>
							<li>
								Prepared and served a variety of beverages with precision and
								creativity, consistently meeting quality standards.
							</li>
							<li>Received compliments for latte art and presentation.</li>
						</ul>
					</div>
				</section>

				<section className={style['education']}>
					<h2>Education</h2>
					<p>Bachelor of Business Administration</p>
					<p className={style['subtitle']}>
						Majors: Analytics and Project Management
					</p>
				</section>

				<section>
					<h2>Skills</h2>
					<div className={style['skills']}>
						<span className={style['skill-item']}>Python</span>
						<span className={style['skill-item']}>Data Analysis</span>
						<span className={style['skill-item']}>Project Management</span>
						<span className={style['skill-item']}>Communication</span>
						<span className={style['skill-item']}>Critical Thinking</span>
					</div>
				</section>
			</div>
		</>
	)
}

export default Resume
