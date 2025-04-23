// styles
import styles from './NewsSection.module.scss'

// components
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Button from '../Button'

const NewsSection = ({ content }) => {
	return (
		<section>
			<div className='sectionContainer'>
				<h2>{content.fields.title}</h2>

				<div className={styles.news}>
					{content.fields.news.map(item => (
						<div key={item.sys.id} className={styles.article}>
							<a
								href={item.fields.link}
								target='_blank'
								aria-label='Link to the article.'
								className={styles.image}
							>
								<Image
									src={'https:' + item.fields.image.fields.file.url}
									fill
									alt='Article Image'
								/>
							</a>

							<h4>{item.fields.title}</h4>

							{documentToReactComponents(item.fields.description)}

							<a
								href={item.fields.link}
								target='_blank'
								aria-label='Link to the article.'
							>
								<Button smallText text='Read More' icon='/arrow.svg' />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default NewsSection
