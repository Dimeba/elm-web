'use client'

// styles
import styles from './Header.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'

// hooks
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
	const pathname = usePathname()

	const menu = [
		{ text: 'About ELM', url: '/about' },
		{ text: 'Our Services', url: '/services' },
		{ text: 'Our Equipment', url: '/equipment' },
		{ text: 'News', url: '/news' }
	]

	const [openMenu, setOpenMenu] = useState(false)

	return (
		<header className={styles.header}>
			<div className={`sectionContainer ${styles.headerContent}`}>
				<Link href='/' aria-label='Link to Homepage'>
					<Image src='/logo.svg' alt='Logo' height={31} width={150} />
				</Link>

				<div className={styles.hamburger}>
					<Hamburger
						color='#272c44'
						size={24}
						toggled={openMenu}
						toggle={setOpenMenu}
					/>
				</div>

				<nav className={`${styles.navigation} ${!openMenu && styles.hidden}`}>
					{menu.map(item => (
						<Link
							key={item.url}
							href={item.url}
							aria-label={`Link to ${item.text} page.`}
							onClick={() => setOpenMenu(false)}
						>
							<p>{item.text}</p>
						</Link>
					))}

					<a href={`${pathname}#contact`} onClick={() => setOpenMenu(false)}>
						<p>Contact</p>
					</a>
				</nav>
			</div>
		</header>
	)
}

export default Header
