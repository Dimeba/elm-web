// contentful
import { createClient } from 'contentful'

// components
import AboutSection from '@/components/homepage/AboutSection'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const about = await client.getEntries({
		content_type: 'aboutSection'
	})

	return (
		<main>
			<AboutSection content={about.items[0]} />
		</main>
	)
}
