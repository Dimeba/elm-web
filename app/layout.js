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

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={outfit.className}>{children}</body>
		</html>
	)
}
