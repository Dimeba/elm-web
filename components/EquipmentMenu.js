'use client'

// styles
import styles from './EquipmentMenu.module.scss'

// components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Button from './Button'
import Link from 'next/link'
import EquipmentItems from './equipment/EquipmentItems'

// context
import { EquipmentContext } from '@/context/EquipmentContext'

// hooks
import { useContext } from 'react'

const EquipmentMenu = ({ content, linkToPage }) => {
	const { equipmentType, setEquipmentType } = useContext(EquipmentContext)

	return (
		<section style={{ paddingBottom: linkToPage ? '' : '0' }}>
			<div className='sectionContainer'>
				<h2>{content.fields.title}</h2>

				<div className={styles.equipmentMenu}>
					{content.fields.types.map(item => (
						<div
							key={item.sys.id}
							className={`${styles.equipmentGroup} ${
								item.fields.title == equipmentType ? styles.selected : ''
							}`}
						>
							<div>
								<h3>{item.fields.title}</h3>
								{documentToReactComponents(item.fields.description)}
							</div>
							{linkToPage ? (
								<Link
									href='/equipment#products'
									aria-label='Link to Our Equipment Page'
								>
									<Button
										newClass={styles.equipmentButton}
										color='yellow'
										icon='/arrow.svg'
										animate
										handleClick={() => setEquipmentType(item.fields.title)}
									/>
								</Link>
							) : (
								<a href='#products'>
									<Button
										newClass={styles.equipmentButton}
										color='yellow'
										icon='/arrow.svg'
										animate
										handleClick={() => setEquipmentType(item.fields.title)}
									/>
								</a>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default EquipmentMenu
