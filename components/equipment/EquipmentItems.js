'use client'

// styles
import styles from './EquipmentItems.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'

// context
import { EquipmentContext } from '@/context/EquipmentContext'

// hooks
import { useContext } from 'react'

const EquipmentItems = ({ items }) => {
	const { equipmentType } = useContext(EquipmentContext)
	const filteredItems = items.filter(
		item => item.fields.type.fields.title == equipmentType
	)

	return (
		<>
			{equipmentType != '' && (
				<section id='products' style={{ backgroundColor: '#272c44' }}>
					<div className={`sectionContainer ${styles.items}`}>
						{filteredItems.length > 0 ? (
							filteredItems.map(item => (
								<div key={item.sys.id} className={styles.item}>
									<div className={styles.image}>
										<Image
											src={'https:' + item.fields.image.fields.file.url}
											fill
											alt='Product Image'
										/>
									</div>

									<Link href='/' aria-label='Link to Product page.'>
										<Button text={item.fields.title} icon='/arrow-white.svg' />
									</Link>
								</div>
							))
						) : (
							<div className={styles.noItemsMessage}>
								<p>No products in this category yet.</p>
							</div>
						)}
					</div>
				</section>
			)}
		</>
	)
}

export default EquipmentItems
