// styles
import styles from './ServicesSection.module.scss'

// components
import Button from '../Button'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ServicesSection = ({ content }) => {
	return (
		<section>
			<div className='sectionContainer'>
				<h2>{content.fields.title}</h2>

				<div className={styles.servicesSection}>
					<div className={styles.description}>
						{documentToReactComponents(content.fields.description)}

						{content.fields.brochure && (
							<a
								href={'https:' + content.fields.brochure.fields.file.url}
								target='_blank'
							>
								<Button
									text='Our Brochure'
									color='yellow'
									reverse
									icon='/download-black.svg'
								/>
							</a>
						)}
					</div>

					<div className={styles.services}>
						{content.fields.services.map(item => (
							<div key={item.sys.id} className={styles.service}>
								<h4>{item.fields.title}</h4>
								{documentToReactComponents(item.fields.description)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServicesSection
