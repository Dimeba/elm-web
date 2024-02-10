'use client'

// styles
import styles from './ProductSection.module.scss'

// components
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useState } from 'react'

const ProductSection = ({ content }) => {
	const [showInfo, setShowInfo] = useState(true)

	return (
		<section className={styles.productSection}>
			<div className='sectionContainer'>
				<h2>{content.fields.title}</h2>
				<h3>{content.fields.subtitle}</h3>

				<div className={styles.content}>
					<div className={styles.image}>
						<Image
							src={'https:' + content.fields.image.fields.file.url}
							fill
							alt='Product Image'
						/>
					</div>

					<div className={styles.info}>
						<div className={styles.tabs}>
							<h4
								onClick={() => setShowInfo(true)}
								style={{ backgroundColor: showInfo ? '#d3d4d9' : '' }}
							>
								Product Information
							</h4>
							<h4
								onClick={() => setShowInfo(false)}
								style={{ backgroundColor: !showInfo ? '#d3d4d9' : '' }}
							>
								Electrical Specification
							</h4>
						</div>

						{showInfo ? (
							<div className={styles.description}>
								<div>
									{documentToReactComponents(content.fields.description)}
								</div>
								<div>
									{documentToReactComponents(content.fields.highlights)}
								</div>
							</div>
						) : (
							<div className={styles.specification}>
								<Image
									src={'https:' + content.fields.specification.fields.file.url}
									fill
									alt='Specification'
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductSection
