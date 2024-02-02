// styles
import styles from './AboutSection.module.scss'

// components
import Image from 'next/image'
import Button from '../Button'

const AboutSection = () => {
	return (
		<section>
			<div className='sectionContainer'>
				<h2>About ELM</h2>
				<div className={styles.aboutContent}>
					<p>
						ELM Suspension Systems, Inc. was formed in 1980 to supply the New
						York market with safe and comprehensive solutions for temporary and
						permanent access needs. From our convenient location in Long Island
						City, NY we are able to offer our customers a wide variety of
						equipment and services for even the most difficult jobs. With over
						30 years of experience and two Special Riggers on staff, we have
						both the equipment and the expertise to make your jobs run smoothly.
					</p>

					<div>
						<h4>Proud members of</h4>

						<div className={styles.members}>
							<div className={styles.memberLogo}>
								<Image
									src='/nyc1-black.svg'
									fill
									alt='member association logo'
								/>
							</div>

							<div className={styles.memberLogo}>
								<Image
									src='/nyc2-black.svg'
									fill
									alt='member association logo'
								/>
							</div>
						</div>
					</div>
				</div>
				<Button color='yellow' text='Learn More' icon='/arrow.svg' animate />
			</div>
		</section>
	)
}

export default AboutSection
