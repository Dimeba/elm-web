// styles
import styles from './Slider.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const Slider = ({ content }) => {
	const sliderContent = [...content, ...content]

	return (
		<div className={styles.slider}>
			<div className='sectionContainer'>
				<h4 className={styles.sliderTitle}> Dealerships & Partners</h4>
			</div>
			<div
				className={styles.sliderContent}
				style={{
					animationDuration: `${content.length * 2.5}s`
				}}
			>
				{sliderContent.map((item, index) => (
					<Link
						href={item.fields.link}
						key={`${item.sys.id}-${index}`}
						aria-label={`Link to ${item.fields.title} website.`}
						className={styles.sliderItem}
						target='_blank'
					>
						<div className={styles.logo}>
							<Image
								src={'https:' + item.fields.image.fields.file.url}
								fill
								alt={`${item.fields.title} logo.`}
								loading='lazy'
							/>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Slider
