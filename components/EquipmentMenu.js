// styles
import styles from './EquipmentMenu.module.scss'

// components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Button from './Button'
import Link from 'next/link'

const EquipmentMenu = ({ content }) => {
	return (
		<section>
			<div className='sectionContainer'>
				<h2>{content.fields.title}</h2>

				<div className={styles.equipmentMenu}>
					{content.fields.types.map(item => (
						<div key={item.sys.id} className={styles.equipmentGroup}>
							<div>
								<h3>{item.fields.title}</h3>
								{documentToReactComponents(item.fields.description)}
							</div>
							<Link href='/equipment' aria-label='Link to Our Equipment Page'>
								<Button
									newClass={styles.equipmentButton}
									color='yellow'
									icon='/arrow.svg'
									animate
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default EquipmentMenu
