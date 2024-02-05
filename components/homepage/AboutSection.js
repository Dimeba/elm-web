// styles
import styles from './AboutSection.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import Slider from '../Slider'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const AboutSection = ({ content }) => {
	return (
		<section>
			<div className='sectionContainer'>
				<h2>{content.fields.title}</h2>
				<div className={styles.aboutContent}>
					{documentToReactComponents(content.fields.homepageDescription)}

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
				<Link href='/about'>
					<Button color='yellow' text='Learn More' icon='/arrow.svg' animate />
				</Link>
			</div>

			{/* Dealership & Partners */}
			<Slider content={content.fields.dealership} />
		</section>
	)
}

export default AboutSection
