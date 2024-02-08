// contentful
import { createClient } from 'contentful'

// components
import PagesHero from '@/components/PagesHero'
import ServicesSection from '@/components/services/ServicesSection'

export default async function Services() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const services = await client.getEntries({
		content_type: 'servicesSection'
	})

	return (
		<main>
			<PagesHero
				image={'https:' + services.items[0].fields.image.fields.file.url}
			/>
			<ServicesSection content={services.items[0]} />
		</main>
	)
}
