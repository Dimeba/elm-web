// styles
import styles from './NewsSection.module.scss'

// components
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const NewsSection = ({ content }) => {
	return (
		<section>
			<div className='sectionContainer'>
				<h2>{content.fields.title}</h2>

				<div className={styles.news}>
					{content.fields.news.map(item => (
						<div key={item.sys.id} className={styles.article}>
							<div className={styles.image}>
								<Image
									src={'https:' + item.fields.image.fields.file.url}
									fill
									alt='Article Image'
								/>
							</div>

							<h4>{item.fields.title}</h4>

							{documentToReactComponents(item.fields.description)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default NewsSection
