'use client'

import React from 'react'

// styles
import styles from './Hero.module.scss'

// components
import Button from '../Button'

// hooks
import { useState } from 'react'

const HeroTrack = ({ content }) => {
	const [blueButtonIcon, setBlueButtonIcon] = useState('/download.svg')

	return (
		<div className={styles.heroTrack}>
			<div className={`sectionContainer ${styles.trackContent}`}>
				{content.fields.services.map(service => (
					<React.Fragment key={service.sys.id}>
						<h4>{service.fields.title}</h4>
						<hr />
					</React.Fragment>
				))}

				{content.fields.brochure && (
					<a
						href={'https:' + content.fields.brochure.fields.file.url}
						target='_blank'
						onMouseEnter={() => setBlueButtonIcon('/download-black.svg')}
						onMouseLeave={() => setBlueButtonIcon('/download.svg')}
					>
						<Button
							color='blue'
							text='Our Brochure'
							icon={blueButtonIcon}
							reverse
							newClass={styles.brochureButton}
						/>
					</a>
				)}
			</div>
		</div>
	)
}

export default HeroTrack
