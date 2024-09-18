// contentful
import { createClient } from 'contentful'

// components
import AboutHero from '@/components/about/AboutHero'
import Slider from '@/components/Slider'
import TeamSection from '@/components/about/TeamSection'

export default async function About() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const about = await client.getEntries({
		content_type: 'aboutSection'
	})

	const team = await client.getEntries({
		content_type: 'teamSection'
	})

	return (
		<main>
			<AboutHero content={about.items[0]} />

			{/* Slider */}
			<section>
				<Slider content={about.items[0].fields.dealership} />
			</section>

			<TeamSection content={team.items[0]} />
		</main>
	)
}
