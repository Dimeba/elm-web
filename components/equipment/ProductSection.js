'use client'

// styles
import styles from './ProductSection.module.scss'

// components
import Image from 'next/image'
import Button from '../Button'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useState } from 'react'

const ProductSection = ({ content }) => {
	const [showInfo, setShowInfo] = useState(true)
	const [blueButtonIcon, setBlueButtonIcon] = useState('/download.svg')

	return (
		<section className={styles.productSection}>
			<div className='sectionContainer'>
				<h2>{content.fields.title}</h2>
				<h3>{content.fields.subtitle}</h3>

				<div className={styles.content}>
					<div className={styles.imageColumn}>
						<div className={styles.image}>
							<Image
								src={'https:' + content.fields.image.fields.file.url}
								fill
								alt='Product Image'
							/>
						</div>

						<div className={styles.buttons}>
							{content.fields.brochure && (
								<a
									href={'https:' + content.fields.brochure.fields.file.url}
									target='_blank'
								>
									<Button
										color='yellow'
										icon='/download-black.svg'
										reverse
										text='Brochure'
										newClass={styles.productButton}
									></Button>
								</a>
							)}

							{content.fields.manual && (
								<a
									href={'https:' + content.fields.manual.fields.file.url}
									target='_blank'
									onMouseEnter={() => setBlueButtonIcon('/download-black.svg')}
									onMouseLeave={() => setBlueButtonIcon('/download.svg')}
								>
									<Button
										color='blue'
										icon={blueButtonIcon}
										reverse
										text='Manual'
										newClass={`${styles.productButton} ${styles.blueButton}`}
									></Button>
								</a>
							)}

							{content.fields.specification && (
								<a
									href={'https:' + content.fields.specification.fields.file.url}
									target='_blank'
									onMouseEnter={() => setBlueButtonIcon('/download-black.svg')}
									onMouseLeave={() => setBlueButtonIcon('/download.svg')}
								>
									<Button
										color='blue'
										icon={blueButtonIcon}
										reverse
										text='Specification'
										newClass={`${styles.productButton} ${styles.blueButton}`}
									></Button>
								</a>
							)}
						</div>
					</div>

					<div className={styles.info}>
						<div className={styles.tabs}>
							<h4
							// onClick={() => setShowInfo(true)}
							// style={{ backgroundColor: showInfo ? '#d3d4d9' : '' }}
							>
								Product Information
							</h4>
							{/* <h4
								onClick={() => setShowInfo(false)}
								style={{ backgroundColor: !showInfo ? '#d3d4d9' : '' }}
							>
								Electrical Specification
							</h4> */}
						</div>

						<div className={styles.description}>
							<div>{documentToReactComponents(content.fields.description)}</div>
							{/* <div>{documentToReactComponents(content.fields.highlights)}</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductSection
