// styles
import styles from './AboutHero.module.scss'

// components
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const AboutHero = ({ content }) => {
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

			<div className={`sectionContainer ${styles.heroContent}`}>
				<h2>{content.fields.title}</h2>

				{documentToReactComponents(content.fields.homepageDescription)}

				<h4>Our Certifications</h4>
				<div className={styles.members}>
					<div className={styles.memberLogo}>
						<Image
							src='/nyc1-black.svg'
							fill
							alt='member association logo'
							loading='lazy'
						/>
					</div>

					<div className={styles.memberLogo}>
						<Image
							src='/nyc2-black.svg'
							fill
							alt='member association logo'
							loading='lazy'
						/>
					</div>
				</div>

				<h4 style={{ marginTop: '4rem' }}>Proud Members of</h4>
				<div className={styles.members}>
					{content.fields.members.map(member => (
						<div className={styles.memberLogo}>
							<Image
								key={member.sys.id}
								src={'https:' + member.fields.image.fields.file.url}
								fill
								alt='member association logo'
								loading='lazy'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AboutHero
