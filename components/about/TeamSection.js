// styles
import styles from './TeamSection.module.scss'

// components
import Image from 'next/image'

const TeamSection = ({ content }) => {
	return (
		<section>
			<div className='sectionContainer'>
				<h2>{content.fields.title}</h2>

				<div className={styles.team}>
					{content.fields.team.map(item => (
						<div key={item.sys.id} className={styles.member}>
							<div className={styles.image}>
								<Image
									src={'https:' + item.fields.image.fields.file.url}
									fill
									alt={`${item.fields.name}'s portrait.`}
								/>
							</div>

							<div className={styles.info}>
								<h4>{item.fields.name}</h4>
								<p className={styles.title}>{item.fields.title}</p>
								<p>{item.fields.phone}</p>
								<p>{item.fields.email}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TeamSection
