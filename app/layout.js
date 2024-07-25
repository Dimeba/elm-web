import { Outfit } from 'next/font/google'
import './globals.scss'
import Script from 'next/script'

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

// context
import { EquipmentContextProvider } from '@/context/EquipmentContext'

// contentful
import { createClient } from 'contentful'

// components
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

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
			<head>
				<Script
					type='text/javascript'
					id='hs-script-loader'
					async
					defer
					src='//js.hs-scripts.com/46387394.js'
				/>
			</head>
			<EquipmentContextProvider>
				<body className={outfit.className}>
					<Header />
					{children}
					<Contact content={contact.items[0]} />
					<Footer content={contact.items[0]} />
				</body>
			</EquipmentContextProvider>
		</html>
	)
}
