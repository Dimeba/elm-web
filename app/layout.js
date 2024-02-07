import { Outfit } from 'next/font/google'
import './globals.scss'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
	title:
		'ELM Suspension Systems | Tailor-Made Rental, Sales, Installation, and Motor Services',
	description:
		'Since 1980, ELM Suspension Systems offers New York City and tri-state customers top-notch suspended scaffold equipment and rigging expertise.',
	icons: {
		icon: '/favicon.svg'
	}
}

// contentful
import { createClient } from 'contentful'

// components
import Contact from '@/components/Contact'

export default async function RootLayout({ children }) {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const contact = await client.getEntries({
		content_type: 'contactSection'
	})

	return (
		<html lang='en'>
			<body className={outfit.className}>
				{children}
				<Contact content={contact.items[0]} />
			</body>
		</html>
	)
}
