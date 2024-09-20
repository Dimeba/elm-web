// styles
import styles from './Footer.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const Footer = ({ content }) => {
	const year = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div className={`sectionContainer ${styles.content}`}>
				<div className={styles.column}>
					<Link href='/about' aria-label='About Page'>
						<p>About ELM</p>
					</Link>
					<Link href='/services' aria-label='Services Page'>
						<p>Our Services</p>
					</Link>
					<Link href='/equipment' aria-label='Our Equipment Page'>
						<p>Our Equipment </p>
					</Link>
					{/* <Link href='/news' aria-label='News Page'>
						<p>News</p>
					</Link> */}
				</div>

				<div className={styles.column}>
					<p>Suspended Scaffold Motors</p>
					<p>Platforms & Assemblies</p>
					<p>Outrigger Systems</p>
					<p>Material Hoists</p>
				</div>

				<div className={styles.column}>
					<h4>Contact Info</h4>
					<p>Phone: {content.fields.phone}</p>
					<p>Fax: {content.fields.fax}</p>
					<p>Email: {content.fields.email}</p>
				</div>

				<div className={styles.column}>
					<h4>Address</h4>
					<p>{content.fields.address}</p>
					<p>{content.fields.location}</p>
				</div>

				<div className={styles.credits}>
					<div className={styles.logos}>
						{/* <div className={styles.logo}>
							<Image src='/logo-white.svg' fill alt='Membership Logo' />
						</div> */}
						<div className={styles.logo}>
							<Image
								src='/nyc1-white.svg'
								fill
								alt='Membership Logo'
								loading='lazy'
							/>
						</div>
						<div className={styles.logo}>
							<Image
								src='/nyc2-white.svg'
								fill
								alt='Membership Logo'
								loading='lazy'
							/>
						</div>
					</div>

					<p>© {year} ELM Suspension Systems. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
