import React from 'react'

// styles
import styles from './Hero.module.scss'

// components
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Button from '../Button'

const Hero = ({ content }) => {
	return (
		<section className={styles.hero}>
			<Image
				className={styles.heroImage}
				src={'https:' + content.fields.image.fields.file.url}
				fill
				// loading='lazy'
				alt='Hero Image'
				quality={100}
				priority
			/>
			<div></div>

			<div className={`sectionContainer ${styles.heroContent}`}>
				<h1>{content.fields.title}</h1>

				{documentToReactComponents(content.fields.description)}

				<a href='/#contact'>
					<Button
						color='yellow'
						text='Get In Touch'
						icon='/arrow.svg'
						animate
						newClass={styles.heroButton}
					/>
				</a>
			</div>

			<div className={styles.heroTrack}>
				<div className={`sectionContainer ${styles.trackContent}`}>
					{content.fields.services.map(service => (
						<React.Fragment key={service.sys.id}>
							<h4>{service.fields.title}</h4>
							<hr />
						</React.Fragment>
					))}

					<a
						href={'https:' + content.fields.brochure.fields.file.url}
						target='_blank'
					>
						<Button
							color='blue'
							text='Our Brochure'
							icon='/download.svg'
							reverse
							newClass={styles.brochureButton}
						/>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero
