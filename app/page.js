// contentful
import { createClient } from 'contentful'

// components
import Hero from '@/components/homepage/Hero'
import AboutSection from '@/components/homepage/AboutSection'
import EquipmentMenu from '@/components/EquipmentMenu'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const about = await client.getEntries({
		content_type: 'aboutSection'
	})

	const equipment = await client.getEntries({
		content_type: 'equipmentSection'
	})

	const hero = await client.getEntries({
		content_type: 'heroSection'
	})

	return (
		<main>
			<Hero content={hero.items[0]} />
			<AboutSection content={about.items[0]} />
			<EquipmentMenu content={equipment.items[0]} />
		</main>
	)
}
