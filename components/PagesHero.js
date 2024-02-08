// styles
import styles from './PagesHero.module.scss'

// components
import Image from 'next/image'

const PagesHero = ({ image }) => {
	return (
		<section style={{ paddingBottom: '0px' }}>
			<div className={styles.pagesHero}>
				<Image src={image} alt='Background Image' fill priority quality={100} />
			</div>
		</section>
	)
}

export default PagesHero
