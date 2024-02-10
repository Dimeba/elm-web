// styles
import styles from './Hero.module.scss'

// components
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Button from '../Button'
import HeroTrack from './HeroTrack'

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

			<HeroTrack content={content} />
		</section>
	)
}

export default Hero
